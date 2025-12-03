import { useState, useEffect } from "react"
import Papa from "papaparse"
import zipcodes from "zipcodes"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Navigation } from "lucide-react"
import facilitiesData from "@/data/facilities.csv?raw"

interface Facility {
  CEWID: string
  ParticipantName: string
  DBA: string
  ParticipantRole: string
  ParticipantStatus: string
  EffectiveDate: string
  PhysicalAddress: string
  PhysicalCity: string
  PhysicalState: string
  PhysicalZipcode: string
  PhysicalCounty: string
  MailingAddress: string
  MailingCity: string
  MailingState: string
  MailingZipcode: string
  PhoneNumber: string
  PrimaryContact: string
  PrimaryContactEmail: string
  distance?: number
}

export function FacilityFinder() {
  const [facilities, setFacilities] = useState<Facility[]>([])
  const [zipCode, setZipCode] = useState("")
  const [results, setResults] = useState<Facility[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    Papa.parse<Facility>(facilitiesData, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setFacilities(results.data)
        setLoading(false)
      },
      error: (err: Error) => {
        console.error("Error parsing CSV:", err)
        setLoading(false)
      }
    })
  }, [])

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 3959 // Radius of the earth in miles
    const dLat = deg2rad(lat2 - lat1)
    const dLon = deg2rad(lon2 - lon1)
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const d = R * c // Distance in miles
    return d
  }

  const deg2rad = (deg: number) => {
    return deg * (Math.PI / 180)
  }

  const handleSearch = () => {
    setError("")
    if (!zipCode || zipCode.length < 5) {
      setError("Please enter a valid zip code")
      return
    }

    const userLocation = zipcodes.lookup(zipCode)
    
    if (!userLocation) {
      setError("Zip code not found. Please try another one.")
      return
    }

    const facilitiesWithDistance = facilities.map(facility => {
      // Clean zip code (remove extension if present)
      const cleanZip = facility.PhysicalZipcode.split('-')[0].trim()
      const facilityLocation = zipcodes.lookup(cleanZip)

      if (!facilityLocation) {
        return { ...facility, distance: Infinity }
      }

      const dist = calculateDistance(
        userLocation.latitude,
        userLocation.longitude,
        facilityLocation.latitude,
        facilityLocation.longitude
      )

      return { ...facility, distance: dist }
    })
    .filter(f => f.distance !== Infinity)
    .sort((a, b) => (a.distance || 0) - (b.distance || 0))
    .slice(0, 10) // Top 10 results

    setResults(facilitiesWithDistance)
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col items-center text-center space-y-4 mb-10">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          E-Waste Facility Finder
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Enter your zip code to find the nearest e-waste recycling facilities.
        </p>
        
        <div className="flex w-full max-w-sm items-center space-x-2 mt-6">
          <Input 
            type="text" 
            placeholder="Enter Zip Code" 
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <Button onClick={handleSearch}>Find</Button>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>

      {loading ? (
        <div className="text-center">Loading facilities data...</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((facility, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="line-clamp-2 text-lg">
                  {facility.ParticipantName}
                </CardTitle>
                {facility.DBA && (
                  <p className="text-sm text-muted-foreground line-clamp-1">{facility.DBA}</p>
                )}
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <div className="flex items-start space-x-2 text-sm">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground" />
                  <div>
                    <p>{facility.PhysicalAddress}</p>
                    <p>{facility.PhysicalCity}, {facility.PhysicalState} {facility.PhysicalZipcode}</p>
                    {facility.distance !== undefined && (
                      <p className="font-semibold text-primary mt-1">
                        {facility.distance.toFixed(1)} miles away
                      </p>
                    )}
                  </div>
                </div>

                {facility.PhoneNumber && (
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <a href={`tel:${facility.PhoneNumber}`} className="hover:underline">
                      {facility.PhoneNumber}
                    </a>
                  </div>
                )}
                
                {facility.PrimaryContactEmail && (
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <a href={`mailto:${facility.PrimaryContactEmail}`} className="hover:underline truncate">
                      Email Contact
                    </a>
                  </div>
                )}

                <Button variant="outline" className="w-full mt-auto" asChild>
                  <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                      `${facility.PhysicalAddress}, ${facility.PhysicalCity}, ${facility.PhysicalState} ${facility.PhysicalZipcode}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

