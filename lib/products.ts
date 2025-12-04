export interface Product {
  id: number
  slug: string
  name: string
  category: string
  price: number
  ecoRating: number
  image: string
  images: string[]
  description: string
  shortDescription: string
  techSpecs: { label: string; value: string }[]
  fieldApplication: string[]
  sustainabilityScore: {
    rating: number
    details: string
  }
  reviews: {
    author: string
    rating: number
    comment: string
    date: string
  }[]
  amazonUrl: string
}

export const products: Product[] = [
  {
    id: 1,
    slug: "ai-forager-lens-pro",
    name: "AI Forager Lens Pro",
    category: "identification",
    price: 299,
    ecoRating: 4,
    image: "/futuristic-ai-plant-scanner-lens-device-with-green.jpg",
    images: [
      "/futuristic-ai-plant-scanner-lens-device-with-green.jpg",
      "/ai-lens-in-use-scanning-plant.jpg",
      "/ai-lens-display-screen-results.jpg",
      "/ai-lens-size-comparison-hand.jpg",
    ],
    description:
      "The AI Forager Lens Pro represents the pinnacle of plant identification technology. Using advanced machine learning algorithms trained on over 10,000 plant species, this compact device delivers instant, accurate identification in any lighting condition. Simply point, scan, and discover the botanical world around you.",
    shortDescription: "Real-time plant identification with 99% accuracy",
    techSpecs: [
      { label: "Accuracy", value: "99.2%" },
      { label: "Species Database", value: "10,000+" },
      { label: "Battery Life", value: "12 hours continuous" },
      { label: "Weight", value: "85g" },
      { label: "Connectivity", value: "Bluetooth 5.0, WiFi" },
      { label: "Display", value: '2.4" OLED touchscreen' },
    ],
    fieldApplication: [
      "Urban park exploration and foraging",
      "Educational botanical walks",
      "Safety verification for wild edibles",
      "Building personal plant databases",
      "Community science projects",
    ],
    sustainabilityScore: {
      rating: 85,
      details:
        "Made with 60% recycled materials. Rechargeable battery rated for 1000+ cycles. Carbon-neutral shipping available.",
    },
    reviews: [
      {
        author: "Marcus Chen",
        rating: 5,
        comment: "Game changer for urban foraging. Identified plants I've walked past for years without knowing.",
        date: "2024-11-15",
      },
      {
        author: "Elena Rodriguez",
        rating: 5,
        comment: "The accuracy is incredible. Even works on partial leaves and seedlings.",
        date: "2024-10-28",
      },
      {
        author: "David Park",
        rating: 4,
        comment: "Great device, wish the battery lasted a bit longer on cold days.",
        date: "2024-09-12",
      },
    ],
    amazonUrl: "#",
  },
  {
    id: 2,
    slug: "pocket-microscope-x50",
    name: "Pocket Microscope X50",
    category: "identification",
    price: 89,
    ecoRating: 5,
    image: "/compact-digital-microscope-for-plant-identificatio.jpg",
    images: [
      "/compact-digital-microscope-for-plant-identificatio.jpg",
      "/pocket-microscope-examining-leaf.jpg",
      "/microscope-detail-view-cells.jpg",
    ],
    description:
      "See the invisible world of plant biology with the Pocket Microscope X50. This ultra-portable digital microscope offers 50x magnification with LED illumination, perfect for examining leaf structures, spores, and tiny identifying features that distinguish edible plants from toxic look-alikes.",
    shortDescription: "50x magnification in your pocket",
    techSpecs: [
      { label: "Magnification", value: "10x - 50x" },
      { label: "Resolution", value: "2MP camera" },
      { label: "Illumination", value: "8 LED ring light" },
      { label: "Weight", value: "45g" },
      { label: "Power", value: "USB-C rechargeable" },
    ],
    fieldApplication: [
      "Examining leaf vein patterns",
      "Identifying fungal characteristics",
      "Studying seed structures",
      "Educational demonstrations",
    ],
    sustainabilityScore: {
      rating: 92,
      details:
        "Aluminum body made from 100% recycled materials. Plastic-free packaging. 5-year warranty reduces waste.",
    },
    reviews: [
      {
        author: "Sophie Turner",
        rating: 5,
        comment: "Essential for mushroom identification. The detail is amazing.",
        date: "2024-11-02",
      },
      {
        author: "James Liu",
        rating: 4,
        comment: "Compact and powerful. Great addition to my foraging kit.",
        date: "2024-10-15",
      },
    ],
    amazonUrl: "#",
  },
  {
    id: 3,
    slug: "urban-explorer-kit",
    name: "Urban Explorer Kit",
    category: "urban",
    price: 149,
    ecoRating: 4,
    image: "/urban-foraging-toolkit-with-gloves-scissors-contai.jpg",
    images: [
      "/urban-foraging-toolkit-with-gloves-scissors-contai.jpg",
      "/foraging-kit-contents-spread-out.jpg",
      "/foraging-kit-being-used-outdoors.jpg",
    ],
    description:
      "Everything you need to start urban foraging, thoughtfully curated in one premium kit. Includes harvesting scissors, collection bags, gloves, field guide, and labeling system. Designed for city environments where discretion and efficiency matter.",
    shortDescription: "Everything you need for city foraging",
    techSpecs: [
      { label: "Kit Contents", value: "12 items" },
      { label: "Bag Material", value: "Organic cotton" },
      { label: "Scissors", value: "Stainless steel, foldable" },
      { label: "Case", value: "Water-resistant nylon" },
    ],
    fieldApplication: [
      "First-time foragers starting out",
      "Urban harvesting expeditions",
      "Collecting samples for identification",
      "Organized specimen storage",
    ],
    sustainabilityScore: {
      rating: 78,
      details:
        "Organic and recycled materials throughout. Refill packs available to reduce waste. Local manufacturing.",
    },
    reviews: [
      {
        author: "Amanda White",
        rating: 5,
        comment: "Perfect starter kit. Everything I needed in one purchase.",
        date: "2024-11-20",
      },
      {
        author: "Robert Kim",
        rating: 4,
        comment: "High quality tools. The scissors are particularly excellent.",
        date: "2024-10-30",
      },
    ],
    amazonUrl: "#",
  },
  {
    id: 4,
    slug: "solar-plant-scanner",
    name: "Solar Plant Scanner",
    category: "solar",
    price: 199,
    ecoRating: 5,
    image: "/solar-powered-plant-scanner-device-eco-friendly-gr.jpg",
    images: [
      "/solar-powered-plant-scanner-device-eco-friendly-gr.jpg",
      "/solar-scanner-charging-in-sun.jpg",
      "/solar-scanner-display-plant-info.jpg",
    ],
    description:
      "Never run out of battery in the field with our solar-powered plant scanner. Features a high-efficiency solar panel that provides unlimited runtime in daylight conditions. Built for extended expeditions and eco-conscious foragers.",
    shortDescription: "Never run out of battery in the field",
    techSpecs: [
      { label: "Solar Panel", value: "5W monocrystalline" },
      { label: "Battery Backup", value: "8 hours" },
      { label: "Charge Time", value: "2 hours full sun" },
      { label: "Species Database", value: "5,000+" },
      { label: "Weight", value: "120g" },
    ],
    fieldApplication: [
      "Multi-day foraging expeditions",
      "Off-grid locations",
      "Sustainable practice demonstrations",
      "Emergency backup identification",
    ],
    sustainabilityScore: {
      rating: 95,
      details: "Solar-powered operation. Housing made from ocean-recovered plastic. Carbon-negative product lifecycle.",
    },
    reviews: [
      {
        author: "Nina Patel",
        rating: 5,
        comment: "Love the sustainability angle. Works great on cloudy days too.",
        date: "2024-11-10",
      },
      {
        author: "Tom Anderson",
        rating: 5,
        comment: "Took it on a week-long trip. Never needed to charge from grid.",
        date: "2024-09-25",
      },
    ],
    amazonUrl: "#",
  },
  {
    id: 5,
    slug: "collapsible-sample-kit",
    name: "Collapsible Sample Kit",
    category: "field",
    price: 79,
    ecoRating: 4,
    image: "/collapsible-field-sample-collection-kit-botanical-.jpg",
    images: [
      "/collapsible-field-sample-collection-kit-botanical-.jpg",
      "/sample-kit-collapsed-compact.jpg",
      "/sample-containers-with-plants.jpg",
    ],
    description:
      "Professional-grade specimen collection that fits in your pocket when collapsed. Includes airtight containers, pressing sheets, and moisture-control packs. Ideal for bringing samples home for further identification.",
    shortDescription: "Lightweight specimen collection",
    techSpecs: [
      { label: "Containers", value: "6 airtight tubes" },
      { label: "Pressing Sheets", value: "12 included" },
      { label: "Collapsed Size", value: "10cm x 5cm" },
      { label: "Weight", value: "95g" },
    ],
    fieldApplication: [
      "Collecting samples for later ID",
      "Preserving specimens",
      "Herbarium building",
      "Scientific documentation",
    ],
    sustainabilityScore: {
      rating: 80,
      details: "Reusable containers. Biodegradable pressing papers. Compact design reduces shipping emissions.",
    },
    reviews: [
      {
        author: "Lisa Green",
        rating: 4,
        comment: "So compact! I keep it in my jacket pocket at all times.",
        date: "2024-11-05",
      },
    ],
    amazonUrl: "#",
  },
  {
    id: 6,
    slug: "gps-plant-mapper",
    name: "GPS Plant Mapper",
    category: "urban",
    price: 249,
    ecoRating: 3,
    image: "/gps-device-for-mapping-plant-locations-in-urban-ar.jpg",
    images: [
      "/gps-device-for-mapping-plant-locations-in-urban-ar.jpg",
      "/gps-device-showing-plant-map.jpg",
      "/hand-holding-gps-in-park.jpg",
    ],
    description:
      "Map your discoveries and share with the community. This dedicated GPS device lets you mark plant locations, track seasonal patterns, and sync with our online database. Create your personal foraging map of the city.",
    shortDescription: "Map your discoveries across the city",
    techSpecs: [
      { label: "GPS Accuracy", value: "±2 meters" },
      { label: "Storage", value: "10,000 waypoints" },
      { label: "Display", value: '3" color touchscreen' },
      { label: "Battery", value: "20 hours" },
      { label: "Connectivity", value: "WiFi sync" },
    ],
    fieldApplication: [
      "Building personal foraging maps",
      "Tracking seasonal plant availability",
      "Community data sharing",
      "Return visit planning",
    ],
    sustainabilityScore: {
      rating: 70,
      details: "Rechargeable battery. Trade-in program for older units. E-waste responsible recycling.",
    },
    reviews: [
      {
        author: "Mike Johnson",
        rating: 5,
        comment: "Revolutionary for planning foraging routes. The community feature is great.",
        date: "2024-10-20",
      },
      {
        author: "Sarah Lee",
        rating: 4,
        comment: "Wish it had better integration with phone apps, but solid device.",
        date: "2024-09-15",
      },
    ],
    amazonUrl: "#",
  },
  {
    id: 7,
    slug: "microclimate-sensor",
    name: "Microclimate Sensor",
    category: "solar",
    price: 129,
    ecoRating: 4,
    image: "/environmental-sensor-for-measuring-humidity-temper.jpg",
    images: [
      "/environmental-sensor-for-measuring-humidity-temper.jpg",
      "/sensor-displaying-temperature-humidity.jpg",
      "/sensor-attached-to-tree-bark.jpg",
    ],
    description:
      "Understand the hidden microclimates that determine where plants thrive. This compact sensor measures temperature, humidity, light levels, and soil moisture. Perfect for finding ideal foraging spots and understanding local ecosystems.",
    shortDescription: "Understand your local ecosystem",
    techSpecs: [
      { label: "Sensors", value: "Temp, humidity, light, soil" },
      { label: "Accuracy", value: "±0.5°C, ±2% RH" },
      { label: "Data Logging", value: "30 days" },
      { label: "Battery", value: "6 months (solar assist)" },
    ],
    fieldApplication: [
      "Finding optimal growing conditions",
      "Understanding plant habitats",
      "Long-term location monitoring",
      "Climate pattern analysis",
    ],
    sustainabilityScore: {
      rating: 88,
      details: "Solar-assisted power. Low-energy Bluetooth. Biodegradable outer casing option.",
    },
    reviews: [
      {
        author: "Chris Morgan",
        rating: 4,
        comment: "Great data insights. Helped me understand why certain spots are better.",
        date: "2024-11-01",
      },
    ],
    amazonUrl: "#",
  },
  {
    id: 8,
    slug: "night-vision-forager",
    name: "Night Vision Forager",
    category: "field",
    price: 349,
    ecoRating: 3,
    image: "/night-vision-monocular-for-nighttime-plant-observa.jpg",
    images: [
      "/night-vision-monocular-for-nighttime-plant-observa.jpg",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    description:
      "Explore the nocturnal world of urban nature. This compact night vision monocular reveals the hidden life that emerges after dark. See plants in their nighttime state and discover the wildlife that interacts with them.",
    shortDescription: "Explore after dark safely",
    techSpecs: [
      { label: "Night Vision", value: "Gen 2+ equivalent" },
      { label: "Magnification", value: "4x" },
      { label: "Range", value: "200m in starlight" },
      { label: "Battery", value: "40 hours" },
      { label: "Weight", value: "280g" },
    ],
    fieldApplication: [
      "Nighttime plant observation",
      "Wildlife interaction studies",
      "Safe after-dark exploration",
      "Nocturnal mushroom hunting",
    ],
    sustainabilityScore: {
      rating: 65,
      details: "Long-lasting build quality. Repair service available. Battery recycling program.",
    },
    reviews: [
      {
        author: "Rachel Stone",
        rating: 5,
        comment: "Opens up a whole new world. Night foraging is incredible.",
        date: "2024-10-10",
      },
      {
        author: "Kevin Wu",
        rating: 4,
        comment: "High quality optics. Pricey but worth it for serious foragers.",
        date: "2024-08-20",
      },
    ],
    amazonUrl: "#",
  },
  {
    id: 9,
    slug: "portable-lab-station",
    name: "Portable Lab Station",
    category: "identification",
    price: 449,
    ecoRating: 4,
    image: "/portable-field-laboratory-for-plant-analysis-compa.jpg",
    images: [
      "/portable-field-laboratory-for-plant-analysis-compa.jpg",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    description:
      "Full laboratory capabilities in a portable case. Includes pH testing, toxicity indicators, nutrient analysis, and microscopy. The ultimate tool for serious foragers who need certainty in the field.",
    shortDescription: "Full analysis capabilities anywhere",
    techSpecs: [
      { label: "Tests Included", value: "pH, toxins, nutrients" },
      { label: "Microscope", value: "100x digital" },
      { label: "Results Time", value: "2-5 minutes" },
      { label: "Test Strips", value: "50 included" },
      { label: "Case", value: "Waterproof, shockproof" },
    ],
    fieldApplication: [
      "Definitive plant identification",
      "Toxicity screening",
      "Educational workshops",
      "Scientific research",
    ],
    sustainabilityScore: {
      rating: 75,
      details: "Refillable test supplies. Durable lifetime build. Supports citizen science projects.",
    },
    reviews: [
      {
        author: "Dr. Amy Foster",
        rating: 5,
        comment: "Professional quality at consumer price. Use it for field classes.",
        date: "2024-11-12",
      },
      {
        author: "Jason Park",
        rating: 5,
        comment: "Peace of mind when foraging. The toxicity tests are invaluable.",
        date: "2024-10-05",
      },
    ],
    amazonUrl: "#",
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id)
}
