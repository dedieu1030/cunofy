```typescript
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { mockProducts } from "@/lib/mock-data";
import { RelatedProducts } from "@/components/products/related-products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
                                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            {/* CTA Buttons */}
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

            {/* Product Details */}
            <section className="py-12">
                <div className="container mx-auto space-y-12">
                    <Card className="rounded-card">
                        <CardContent className="p-8">
                            <h2 className="text-2xl font-bold mb-6">About {product.name}</h2>
                            <div className="prose prose-stone max-w-none">
                                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                                    {product.description}
                                </p>
                                
                                {/* Product Details Grid */}
                                <div className="grid gap-8 sm:grid-cols-2">
                                  <div>
                                    <h3 className="font-semibold text-lg mb-4">Key Features</h3>
                                    <ul className="space-y-2 text-muted-foreground">
                                      <li className="flex items-start gap-2">
                                        <span className="text-foreground">•</span>
                                        <span>Intuitive and easy-to-use interface</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <span className="text-foreground">•</span>
                                        <span>Powerful features for productivity</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <span className="text-foreground">•</span>
                                        <span>Seamless integration with your workflow</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <span className="text-foreground">•</span>
                                        <span>Regular updates and improvements</span>
                                      </li>
                                    </ul>
                                  </div>
                                  <div>
                                    <h3 className="font-semibold text-lg mb-4">Perfect For</h3>
                                    <ul className="space-y-2 text-muted-foreground">
                                      <li className="flex items-start gap-2">
                                        <span className="text-foreground">•</span>
                                        <span>Professionals looking to boost productivity</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <span className="text-foreground">•</span>
                                        <span>Teams collaborating on projects</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <span className="text-foreground">•</span>
                                        <span>Anyone seeking better organization</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                        <span className="text-foreground">•</span>
                                        <span>Users who value quality and reliability</span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>

                                {/* CTA Section */}
                                <div className="mt-10 p-6 bg-secondary/50 rounded-card">
                                  <h3 className="font-semibold text-lg mb-3">Ready to get started?</h3>
                                  <p className="text-muted-foreground mb-4">
                                    Discover why thousands of users trust {product.name} for their daily needs.
                                  </p>
                                  <div className="flex gap-3">
                                    <Button size="lg" className="rounded-full">
                                      <ExternalLink className="h-4 w-4 mr-2" />
                                      Visit Official Website
                                    </Button>
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
```
