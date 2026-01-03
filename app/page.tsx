import { ProductCard } from "@/components/products/product-card";
import { mockProducts } from "@/lib/mock-data";

export default function HomePage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-foreground text-background py-12">
                <div className="container mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-2 text-sm mb-4">
                        <span className="font-medium text-background">This week</span>'s update
                    </div>
                    <h1 className="text-5xl font-bold mb-4">
                        Discover the best mobile apps, all in one place.
                    </h1>
                    <p className="text-lg text-background/50 max-w-2xl mx-auto">
                        A curated directory of beautifully designed apps to help you work smarter, create faster, and stay inspired.
                    </p>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-3xl font-bold">All</h2>
                            <p className="text-muted-foreground">{mockProducts.length} products</p>
                        </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {mockProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
