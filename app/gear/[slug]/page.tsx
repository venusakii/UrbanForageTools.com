import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LivingVeinBackground } from "@/components/living-vein-background"
import { ProductDetail } from "@/components/gear/product-detail"
import { products, getProductBySlug } from "@/lib/products"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return { title: "Product Not Found - UrbanForageTools" }
  }

  return {
    title: `${product.name} - UrbanForageTools`,
    description: product.shortDescription,
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="relative min-h-screen">
      <LivingVeinBackground />
      <Header />
      <main className="pt-24 pb-16">
        <ProductDetail product={product} />
      </main>
      <Footer />
    </div>
  )
}
