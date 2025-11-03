import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center px-4">
        <div className="mr-4 flex">
          <span className="font-bold text-xl">MaterialGurl</span>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </nav>
  )
}
