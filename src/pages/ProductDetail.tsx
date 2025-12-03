import { useParams, Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
// import { ArrowLeft, Recycle, AlertCircle, DollarSign } from "lucide-react"
import { ArrowLeft, Recycle, AlertCircle } from "lucide-react"
import electronicsData from "@/data/electronics.json"

export function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const product = electronicsData.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link to="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    )
  }

  // const recyclableMaterials = product.materials.filter((m) => m.recyclable)
  // const totalRecyclablePercentage = recyclableMaterials.reduce((sum, m) => sum + m.percentage, 0)
  
  // Calculate recoverable market value (only recyclable materials)
  // const recyclableValue = recyclableMaterials.reduce((sum, m) => {
  //   const value = parseFloat(String(m.valuePerDevice || '0').replace('$', ''))
  //   return sum + value
  // }, 0)

  // Sort materials by percentage in descending order
  const sortedMaterials = [...product.materials].sort((a, b) => b.percentage - a.percentage)

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Link to="/">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>
      </Link>

      {/* Product Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
            <Badge variant="secondary" className="text-base">
              {product.category}
            </Badge>
          </div>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl">{product.description}</p>
      </div>

      {/* Product Image */}
      <div className="mb-8">
        <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center overflow-hidden">
          {product.image ? (
            <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
          ) : (
            <span className="text-8xl opacity-50">📱</span>
          )}
        </div>
      </div>

      <Separator className="my-8" />

      {/* Key Stats */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Annual E-Waste</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{product.annualWaste}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Current Recycling Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{product.recyclingRate}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Recycle className="h-5 w-5 text-green-600" />
              Recyclable Materials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-600">{totalRecyclablePercentage}%</p>
            <p className="text-xs text-muted-foreground mt-1">by weight</p>
          </CardContent>
        </Card>
        <Card className="border-primary/50 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              Recoverable Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-primary">${recyclableValue.toFixed(2)}</p>
            <p className="text-xs text-muted-foreground mt-1">per device recycled</p>
          </CardContent>
        </Card>
      </div> */}

      {/* Material Composition */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Material Composition</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sortedMaterials.map((material, index) => (
            <Card 
              key={index} 
              className={material.recyclable ? "border-green-500/50" : "border-orange-500/50"}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg flex items-center gap-2">
                      {material.recyclable ? (
                        <Recycle className="h-4 w-4 text-green-600" />
                      ) : (
                        <AlertCircle className="h-4 w-4 text-orange-600" />
                      )}
                      {material.name}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {material.description}
                    </CardDescription>
                  </div>
                  <div className="ml-4 text-right space-y-2">
                    <div>
                      <div className="text-2xl font-bold">{material.percentage}%</div>
                      <div className="text-sm font-semibold text-primary">{material.valuePerDevice}</div>
                    </div>
                    <Badge 
                      variant={material.recyclable ? "default" : "secondary"}
                      className="mt-1"
                    >
                      {material.recyclable ? "Recyclable" : "Difficult"}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Material Breakdown Visualization */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Material Breakdown</h3>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {sortedMaterials.map((material, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{material.name}</span>
                    <span className="text-sm text-muted-foreground">{material.percentage}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3">
                    <div
                      className={`h-3 rounded-full ${
                        material.recyclable ? "bg-green-600" : "bg-orange-600"
                      }`}
                      style={{ width: `${material.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-600 rounded"></div>
                <span>Recyclable</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-600 rounded"></div>
                <span>Difficult to Recycle</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl">What Can You Do?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Find certified e-waste recycling centers in your area</li>
            <li>• Consider repairing or refurbishing instead of replacing</li>
            <li>• Donate working devices to extend their lifecycle</li>
            <li>• Support companies with take-back programs</li>
            <li>• Educate others about the importance of proper e-waste disposal</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

