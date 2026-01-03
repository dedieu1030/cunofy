import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/mock-data";
import { ExternalLink } from "lucide-react";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <Card className="group relative overflow-hidden border-border/50 transition-all hover:shadow-lg rounded-card">
            <Link href={`/product/${product.slug}`} className="block">
                {/* Screenshot Preview - 3:2 aspect ratio matching card.html */}
                <div className="relative aspect-[3/2] overflow-hidden rounded-t-card bg-secondary">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                            src={product.imageUrl}
                            alt={product.name}
                            width={300}
                            height={400}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-secondary to-transparent" />
                </div>

                <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                        {/* App Icon - 12px radius like Framer */}
                        <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-xl">
                            <Image
                                src={product.iconUrl}
                                alt={`${product.name} icon`}
                                width={40}
                                height={40}
                                className="object-cover"
                            />
                        </div>

                        {/* Details */}
                        <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                                <h3 className="font-medium text-foreground truncate text-sm">
                                    {product.name}
                                </h3>
                                <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                                <span className="text-xs text-muted-foreground">
                                    {product.category}
                                </span>
                            </div>
                            <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                                {product.description}
                            </p>
                        </div>
                    </div>

                    {/* Hover State: Open Button */}
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-2 text-xs text-foreground">
                            <ExternalLink className="h-3 w-3" />
                            <span>View details</span>
                        </div>
                    </div>
                </CardContent>
            </Link>
        </Card>
    );
}
