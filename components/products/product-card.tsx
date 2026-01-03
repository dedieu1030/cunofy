import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/mock-data";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <article className="group">
            <Link href={`/product/${product.slug}`} className="block">
                {/* Image - 3:2 ratio like Wirecutter */}
                <div className="relative w-full overflow-hidden rounded-card bg-secondary mb-4">
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={345}
                        height={230}
                        className="w-full h-auto object-cover transition-transform group-hover:scale-105"
                    />
                </div>

                {/* Title */}
                <h2 className="text-base font-medium text-foreground group-hover:underline line-clamp-2">
                    {product.name}
                </h2>
            </Link>
        </article>
    );
}
