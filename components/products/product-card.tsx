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
                {/* Screenshot Preview */}
                <div className="relative aspect-[9/16] overflow-hidden rounded-t-card bg-secondary">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                            src={product.imageUrl}
                            alt={product.name}
                            width={295}
                            height={639}
                            className="h-full w-auto object-cover"
                        />
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-secondary to-transparent" />

                    {/* Score Badge - Framer style with rounded-full */}
                    <div className="absolute top-4 right-4">
                        <Badge className="bg-foreground text-background font-semibold rounded-full px-3 py-1">
                            {product.score.final}/100
                        </Badge>
                    </div>
                </div>

                <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                        {/* App Icon - 12px radius like Framer */}
                        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl">
                            <Image
                                src={product.iconUrl}
                                alt={`${product.name} icon`}
                                width={48}
                                height={48}
                                className="object-cover"
                            />
                        </div>

                        {/* Details */}
                        <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                                <h3 className="font-medium text-foreground truncate">
                                    {product.name}
                                </h3>
                                <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                                <span className="text-sm text-muted-foreground">
                                    {product.category}
                                </span>
                            </div>
                            <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                                {product.description}
                            </p>
                        </div>
                    </div>

                    {/* Hover State: Open Button */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-2 text-sm text-foreground">
                            <ExternalLink className="h-4 w-4" />
                            <span>View details</span>
                        </div>
                    </div>
                </CardContent>
            </Link>
        </Card>
    );
}
