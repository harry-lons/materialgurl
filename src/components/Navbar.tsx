import { Button } from "@/components/ui/button"
import { Sun, Moon, Sparkles, ChevronDown } from "lucide-react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

type Theme = "light" | "dark" | "barbie"

export function Navbar() {
  const [theme, setTheme] = useState<Theme>("light")
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const applyTheme = (newTheme: Theme) => {
    // Remove all theme classes
    document.documentElement.classList.remove('dark', 'barbie')
    
    // Add the selected theme class (except for light which is default)
    if (newTheme !== 'light') {
      document.documentElement.classList.add(newTheme)
    }
    
    setTheme(newTheme)
    setIsOpen(false)
  }

  const getThemeIcon = () => {
    switch (theme) {
      case "dark":
        return <Moon className="h-5 w-5" />
      case "barbie":
        return <Sparkles className="h-5 w-5" />
      default:
        return <Sun className="h-5 w-5" />
    }
  }

  const getThemeLabel = () => {
    switch (theme) {
      case "dark":
        return "Dark"
      case "barbie":
        return "Barbie"
      default:
        return "Light"
    }
  }

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center px-4">
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">MaterialGurl</span>
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-2">
            <Link to="/">
              <Button 
                variant={isActive('/') ? "default" : "ghost"} 
                size="sm"
              >
                Home
              </Button>
            </Link>
          </nav>
          
          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Select theme"
                className="gap-2"
              >
                {getThemeIcon()}
                <span className="hidden sm:inline">{getThemeLabel()}</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
              {isOpen && (
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => applyTheme("light")}>
                    <Sun className="h-4 w-4 mr-2" />
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => applyTheme("dark")}>
                    <Moon className="h-4 w-4 mr-2" />
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => applyTheme("barbie")}>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Barbie Pink
                  </DropdownMenuItem>
                </DropdownMenuContent>
              )}
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}
