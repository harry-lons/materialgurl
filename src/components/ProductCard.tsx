import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

interface ProductCardProps {
  id: string
  name: string
  category: string
  description: string
  recyclingRate: string
}

export function ProductCard({ id, name, category, description, recyclingRate }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary">{category}</Badge>
        </div>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* Placeholder for product image */}
        <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-4">
          <span className="text-4xl opacity-50">📱</span>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            <strong>Recycling Rate:</strong> {recyclingRate}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/product/${id}`} className="w-full">
          <Button className="w-full" variant="default">
            View Materials
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

