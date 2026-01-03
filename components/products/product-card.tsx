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
                {/* Image - 3:2 ratio like Wirecutter, forced horizontal */}
                <div className="relative w-full aspect-[3/2] overflow-hidden rounded-card bg-secondary mb-4">
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform group-hover:scale-105"
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
