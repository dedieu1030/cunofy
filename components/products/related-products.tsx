import { Product, mockProducts } from "@/lib/mock-data";
import { ProductCard } from "./product-card";

interface RelatedProductsProps {
    currentProduct: Product;
    limit?: number;
}

export function RelatedProducts({ currentProduct, limit = 4 }: RelatedProductsProps) {
    // Trouver des produits similaires (même catégorie, score similaire)
    const relatedProducts = mockProducts
        .filter((p) =>
            p.id !== currentProduct.id &&
            p.category === currentProduct.category
        )
        .sort((a, b) => {
            // Trier par proximité de score
            const scoreDiffA = Math.abs(a.score.final - currentProduct.score.final);
            const scoreDiffB = Math.abs(b.score.final - currentProduct.score.final);
            return scoreDiffA - scoreDiffB;
        })
        .slice(0, limit);

    if (relatedProducts.length === 0) {
        return null;
    }

    return (
        <section className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold">Related Products</h2>
                <p className="text-muted-foreground">
                    Similar products in {currentProduct.category}
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
