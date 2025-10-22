# MaterialGurl - E-Waste Awareness Platform

A React web application built to raise awareness about electronic waste (e-waste) and the valuable materials contained in everyday electronics. MaterialGurl helps users understand what's inside their devices and why proper recycling matters.

## 🌍 Mission

Electronic waste is the fastest-growing waste stream in the world, with over 50 million metric tons generated annually. MaterialGurl aims to educate people about:

- Material composition of common electronics
- Recyclability of different components
- Environmental and economic impact of e-waste
- Steps individuals can take to reduce e-waste

## ✨ Features

- **Interactive Product Cards** - Browse common electronics like smartphones, laptops, tablets, and more
- **Detailed Material Breakdown** - See percentage composition and recyclability of each material
- **Visual Data Representation** - Progress bars and stats showing material distribution
- **Educational Content** - Learn about the e-waste crisis and what you can do
- **Dark Mode** - Toggle between light and dark themes
- **Responsive Design** - Works beautifully on desktop, tablet, and mobile

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **TailwindCSS** - Utility-first styling
- **shadcn/ui** - Beautiful, accessible components
- **Lucide React** - Icon library

## 📦 Components

### UI Components (shadcn/ui)
- Button, Card, Input, Label, Badge, Separator

### Custom Components
- **Navbar** - Navigation with Home/About tabs and dark mode toggle
- **ProductCard** - Displays electronics with preview info
- **Home Page** - Landing page with poster and product grid
- **ProductDetail Page** - Detailed material composition and statistics
- **About Page** - E-waste awareness information and mission

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start dev server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
# Build optimized bundle
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
materialgurl/
├── public/
│   └── poster.png              # Hero image
├── src/
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── Navbar.tsx          # Navigation component
│   │   └── ProductCard.tsx     # Product card component
│   ├── data/
│   │   └── electronics.json    # Product and material data
│   ├── pages/
│   │   ├── Home.tsx            # Home page
│   │   ├── ProductDetail.tsx   # Product detail page
│   │   └── About.tsx           # About page
│   ├── lib/
│   │   └── utils.ts            # Utility functions
│   ├── App.tsx                 # Main app with routing
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## 📊 Data Structure

Electronics data is stored in `src/data/electronics.json`. Each product includes:

- Basic info (name, category, description)
- Material composition array with:
  - Material name
  - Percentage by weight
  - Recyclability status
  - Description
- Annual waste statistics
- Recycling rate information

## 🎨 Customization

### Adding New Electronics

Edit `src/data/electronics.json` and add a new object following the existing schema:

```json
{
  "id": "unique-id",
  "name": "Device Name",
  "category": "Category",
  "description": "Device description",
  "materials": [...],
  "annualWaste": "Statistics",
  "recyclingRate": "Percentage"
}
```

### Adding Product Images

Replace the placeholder emoji in `ProductCard.tsx` and `ProductDetail.tsx` with:

```tsx
<img src={`/products/${id}.png`} alt={name} />
```

Then add images to `public/products/` directory.

### Styling

- Theme colors are defined in `src/index.css` using CSS variables
- Tailwind classes can be customized in `tailwind.config.js`
- shadcn/ui components can be modified in `src/components/ui/`

## 🌙 Dark Mode

Dark mode is implemented via the Navbar component. It toggles the `dark` class on the document root, which activates dark theme CSS variables.

## 🔗 Navigation

The app uses React Router with three main routes:

- `/` - Home page with all products
- `/product/:id` - Individual product detail page
- `/about` - About page with e-waste information

## 📚 Learn More

- [Global E-waste Statistics](https://www.itu.int/en/ITU-D/Environment/Pages/Spotlight/Global-Ewaste-Monitor-2020.aspx)
- [EPA E-waste Information](https://www.epa.gov/international-cooperation/cleaning-electronic-waste-e-waste)
- [Find E-waste Recyclers](https://www.epa.gov/recycle/electronics-donation-and-recycling)

## 🤝 Contributing

This is an educational prototype. To extend it:

1. Add more electronics to the data file
2. Include real product images
3. Add more detailed recycling information
4. Implement recycling center locator
5. Add data visualizations and charts

## 📄 License

MIT License - Built for educational purposes to raise awareness about e-waste.

## 🙏 Acknowledgments

Material composition data compiled from industry teardowns, manufacturer disclosures, and academic research on electronic waste. E-waste statistics sourced from UN Global E-waste Monitor and EPA reports.

---

**MaterialGurl** - *Know what's inside. Recycle responsibly.* ♻️
