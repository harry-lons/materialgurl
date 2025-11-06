import { ProductCard } from "@/components/ProductCard"
import electronicsData from "@/data/electronics.json"
import { Separator } from "@/components/ui/separator"

export function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section with Poster */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Poster Image */}
          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/poster.png" 
                alt="MaterialGurl E-waste Awareness" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              MaterialGurl
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Discover what's inside your electronics and learn about the materials that can be recovered through proper e-waste recycling.
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-12" />

      {/* Products Section */}
      <section>
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-3">Explore Electronics</h2>
          <p className="text-muted-foreground text-lg">
            Click on any device to learn about its material composition and recycling potential.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {electronicsData.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              category={product.category}
              description={product.description}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-16 bg-muted/50 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">E-Waste By The Numbers (2022)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
          {/* Source: https://www.itu.int/en/ITU-D/Environment/Pages/Publications/The-Global-E-waste-Monitor-2024.aspx */}
            <div className="text-4xl font-bold text-primary mb-2">60M+</div>
            <p className="text-muted-foreground">Metric tons of e-waste generated annually</p>
          </div>
          <div>
            {/* Source: https://www.itu.int/en/ITU-D/Environment/Pages/Publications/The-Global-E-waste-Monitor-2024.aspx */}
            <div className="text-4xl font-bold text-primary mb-2">22.3%</div>
            <p className="text-muted-foreground">Global e-waste recycling rate</p>
          </div>
          <div>
            {/* source: https://dowelldogood.com/e-waste-how-to-stop-the-tsunami-of-discarded-electronics-rolling-out-over-the-world/ */}
            <div className="text-4xl font-bold text-primary mb-2">$57B</div>
            <p className="text-muted-foreground">Worth of recoverable materials in e-waste</p>
          </div>
        </div>
      </section>
    </div>
  )
}

