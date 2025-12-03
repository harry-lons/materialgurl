import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Recycle, AlertTriangle, Globe, TrendingUp, ExternalLink } from "lucide-react"

export function About() {
  const SourceLink = ({ href }: { href: string }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="inline-flex items-center ml-1 text-muted-foreground/60 hover:text-primary transition-colors"
      title="View Source"
    >
      <ExternalLink className="h-3 w-3" />
      <span className="sr-only">Source</span>
    </a>
  )

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          About MaterialGurl
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Empowering people to make informed decisions about electronic waste through education and awareness.
        </p>
      </div>

      <Separator className="my-12" />

      {/* Mission Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              MaterialGurl exists to raise awareness about electronic waste (e-waste) and the valuable 
              materials trapped in discarded electronics. By making information about material composition 
              accessible and understandable, we aim to inspire responsible recycling practices and reduce 
              the environmental impact of our digital age.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* The E-Waste Crisis */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">The E-Waste Crisis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                Growing Problem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • 50+ million metric tons of e-waste generated annually 
                  <SourceLink href="https://ewastemonitor.info/gem-2020/" />
                </li>
                <li>
                  • E-waste is the fastest-growing waste stream globally
                  <SourceLink href="https://ewastemonitor.info/gem-2020/" />
                </li>
                <li>
                  • Only 17.4% is properly documented as recycled
                  <SourceLink href="https://ewastemonitor.info/gem-2020/" />
                </li>
                <li>
                  • Expected to reach 74 million metric tons by 2030
                  <SourceLink href="https://ewastemonitor.info/gem-2020/" />
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-blue-600" />
                Environmental Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Toxic materials contaminate soil and water</li>
                <li>• Greenhouse gas emissions from improper disposal</li>
                <li>• Loss of valuable finite resources</li>
                <li>• Harm to communities near dumping sites</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Recycle className="h-5 w-5 text-green-600" />
                Recycling Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Recover precious metals like gold, silver, and copper</li>
                <li>• Reduce mining of virgin materials</li>
                <li>• Lower carbon footprint of electronics production</li>
                <li>• Create green jobs in the circular economy</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Economic Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • $57 billion worth of materials in annual e-waste
                  <SourceLink href="https://ewastemonitor.info/gem-2020/" />
                </li>
                <li>
                  • More gold in e-waste than in gold mines
                  <SourceLink href="https://www.unep.org/news-and-stories/press-release/un-report-time-seize-opportunity-tackle-challenge-e-waste" />
                </li>
                <li>
                  • Recycling more cost-effective than mining
                  <SourceLink href="https://www.unep.org/news-and-stories/press-release/un-report-time-seize-opportunity-tackle-challenge-e-waste" />
                </li>
                <li>• Job creation in recycling and refurbishment</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-12" />

      {/* What You Can Do */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">What You Can Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-primary/5">
            <CardHeader>
              <CardTitle>1. Extend Lifecycle</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Keep devices longer, repair when possible, and buy refurbished. The longest-lasting 
                device is the one that doesn't need to be replaced.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-primary/5">
            <CardHeader>
              <CardTitle>2. Recycle Responsibly</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Find certified e-waste recyclers (e-Stewards or R2 certified). Never throw electronics 
                in regular trash. Many retailers offer free recycling programs.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-primary/5">
            <CardHeader>
              <CardTitle>3. Spread Awareness</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Share what you've learned with friends and family. Support policies that promote 
                right-to-repair and extended producer responsibility.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About the Data */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">About Our Data</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground leading-relaxed mb-4">
              The material composition data presented on MaterialGurl is compiled from industry 
              teardowns, manufacturer disclosures, and academic research on electronic waste. 
              Percentages are approximate and can vary by manufacturer, model, and year.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our goal is to provide educational insights into the complex material composition 
              of modern electronics and highlight the importance of recovering these materials 
              through proper recycling channels.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
          <CardContent className="pt-6 pb-6">
            <h3 className="text-2xl font-bold mb-4">Together We Can Make a Difference</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every device properly recycled is a step toward a more sustainable future. 
              Start exploring the electronics on our home page to learn more about what's 
              inside your devices.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
