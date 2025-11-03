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
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground">Learn about:</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

