import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { mockProducts } from "@/lib/mock-data";
import { ScoreBreakdown } from "@/components/products/score-breakdown";
import { RelatedProducts } from "@/components/products/related-products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { generateInsights, getRecommendationLevel } from "@/lib/scoring";
import { ExternalLink, ArrowLeft } from "lucide-react";

interface ProductPageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return mockProducts.map((product) => ({
        slug: product.slug,
    }));
}

export default function ProductPage({ params }: ProductPageProps) {
    const product = mockProducts.find((p) => p.slug === params.slug);

    if (!product) {
        notFound();
    }

    const insights = generateInsights(product);
    const recommendation = getRecommendationLevel(product.score.final);

    return (
        <main className="min-h-screen">
            {/* Back Button */}
            <section className="border-b">
                <div className="container mx-auto py-4">
                    <Link href="/">
                        <Button variant="ghost" size="sm" className="rounded-full">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to all products
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Hero Section */}
            <section className="border-b bg-secondary/30">
                <div className="container mx-auto py-12">
                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* Left: Image */}
                        <div className="relative aspect-[3/2] overflow-hidden rounded-card bg-secondary">
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Right: Info */}
                        <div className="flex flex-col justify-center space-y-6">
                            {/* Category */}
                            <div>
                                <Badge variant="secondary" className="rounded-full">
                                    {product.category}
                                </Badge>
                            </div>

                            {/* Title */}
                            <div>
                                <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
                                <p className="text-lg text-muted-foreground">
                                    {product.description}
                                </p>
                            </div>

                            {/* Score Badge */}
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-3">
                                    <Badge className="bg-foreground text-background rounded-full text-2xl px-6 py-3">
                                        {product.score.final}/100
                                    </Badge>
                                    <div>
                                        <div className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${recommendation.color}`}>
                                            {recommendation.label}
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            {recommendation.description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Insights */}
                            {insights.length > 0 && (
                                <div className="space-y-2">
                                    {insights.map((insight, index) => (
                                        <div key={index} className="flex items-center gap-2 text-sm">
                                            <span>{insight}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* CTA */}
                            <div className="flex gap-3">
                                <Button size="lg" className="rounded-full">
                                    <ExternalLink className="h-4 w-4 mr-2" />
                                    Visit Website
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-full">
                                    View on Amazon
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-12">
                <div className="container mx-auto space-y-12">
                    {/* Score Breakdown */}
                    <ScoreBreakdown product={product} />

                    {/* Product Details */}
                    <Card className="rounded-card">
                        <CardContent className="p-8">
                            <h2 className="text-2xl font-bold mb-4">About {product.name}</h2>
                            <div className="prose prose-stone max-w-none">
                                <p className="text-muted-foreground leading-relaxed">
                                    {product.description}
                                </p>

                                {/* Placeholder for more details */}
                                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <h3 className="font-semibold mb-2">Key Features</h3>
                                        <ul className="space-y-1 text-sm text-muted-foreground">
                                            <li>• Feature 1</li>
                                            <li>• Feature 2</li>
                                            <li>• Feature 3</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">Best For</h3>
                                        <ul className="space-y-1 text-sm text-muted-foreground">
                                            <li>• Use case 1</li>
                                            <li>• Use case 2</li>
                                            <li>• Use case 3</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Related Products */}
                    <RelatedProducts currentProduct={product} />
                </div>
            </section>
        </main>
    );
}
