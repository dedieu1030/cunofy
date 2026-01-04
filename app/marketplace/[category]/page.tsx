import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { mockProducts } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function MarketplacePage() {
    return (
        <main className="min-h-screen">
            {/* Breadcrumb */}
            <div className="border-b">
                <div className="container mx-auto py-4">
                    <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Link href="/" className="hover:text-foreground">
                            Home
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/marketplace" className="hover:text-foreground">
                            Marketplace
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-foreground">Notes Apps</span>
                    </nav>
                </div>
            </div>

            {/* Page Header */}
            <section className="border-b py-6">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold mb-2">Notes Apps</h1>
                    <p className="text-muted-foreground">
                        Showing {mockProducts.length} products
                    </p>
                </div>
            </section>

            {/* Main Content with Sidebar */}
            <section className="py-8">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-[250px_1fr] gap-8">
                        {/* Filter Sidebar */}
                        <aside className="space-y-6">
                            {/* Price Filters */}
                            <div>
                                <h3 className="font-semibold mb-3">Price</h3>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                                        <Checkbox />
                                        <span>Free</span>
                                    </label>
                                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                                        <Checkbox />
                                        <span>Freemium</span>
                                    </label>
                                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                                        <Checkbox />
                                        <span>Paid</span>
                                    </label>
                                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                                        <Checkbox />
                                        <span>Subscription</span>
                                    </label>
                                </div>
                            </div>

                            {/* Platform Filters */}
                            <div>
                                <h3 className="font-semibold mb-3">Platform</h3>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                                        <Checkbox />
                                        <span>iOS</span>
                                    </label>
                                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                                        <Checkbox />
                                        <span>Android</span>
                                    </label>
                                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                                        <Checkbox />
                                        <span>Web</span>
                                    </label>
                                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                                        <Checkbox />
                                        <span>Desktop</span>
                                    </label>
                                </div>
                            </div>

                            {/* Features Filters */}
                            <div>
                                <h3 className="font-semibold mb-3">Features</h3>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                                        <Checkbox />
                                        <span>Offline Mode</span>
                                    </label>
                                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                                        <Checkbox />
                                        <span>Collaboration</span>
                                    </label>
                                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                                        <Checkbox />
                                        <span>API Access</span>
                                    </label>
                                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                                        <Checkbox />
                                        <span>Markdown Support</span>
                                    </label>
                                </div>
                            </div>

                            {/* Rating Filters */}
                            <div>
                                <h3 className="font-semibold mb-3">Rating</h3>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                                        <Checkbox />
                                        <span>4+ stars</span>
                                    </label>
                                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                                        <Checkbox />
                                        <span>3+ stars</span>
                                    </label>
                                </div>
                            </div>
                        </aside>

                        {/* Product Table */}
                        <div className="space-y-4">
                            {/* Toolbar */}
                            <div className="flex items-center justify-between pb-4 border-b">
                                <div className="flex items-center gap-2">
                                    <Button variant="outline" size="sm">
                                        Table
                                    </Button>
                                    <Button variant="ghost" size="sm">
                                        Grid
                                    </Button>
                                </div>
                                <select className="border rounded-md px-3 py-1.5 text-sm">
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Rating</option>
                                    <option>Popularity</option>
                                    <option>Name</option>
                                </select>
                            </div>

                            {/* Table Header */}
                            <div className="hidden lg:grid lg:grid-cols-[2fr_1fr_1fr_1fr_1fr_auto] gap-4 pb-3 border-b font-semibold text-sm">
                                <div>Product</div>
                                <div>Price</div>
                                <div>Platform</div>
                                <div>Rating</div>
                                <div>Features</div>
                                <div></div>
                            </div>

                            {/* Product Rows */}
                            <div className="space-y-4">
                                {mockProducts.map((product) => (
                                    <div
                                        key={product.id}
                                        className="grid lg:grid-cols-[2fr_1fr_1fr_1fr_1fr_auto] gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow"
                                    >
                                        {/* Product Cell */}
                                        <div className="flex gap-4">
                                            <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded bg-secondary">
                                                <Image
                                                    src={product.imageUrl}
                                                    alt={product.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <Link
                                                    href={`/product/${product.slug}`}
                                                    className="font-semibold hover:underline"
                                                >
                                                    {product.name}
                                                </Link>
                                                <p className="text-sm text-muted-foreground line-clamp-1">
                                                    {product.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Price Cell */}
                                        <div className="flex flex-col justify-center">
                                            <div className="font-semibold">Free - $8/mo</div>
                                            <div className="text-xs text-muted-foreground">Freemium</div>
                                        </div>

                                        {/* Platform Cell */}
                                        <div className="flex flex-wrap gap-1 items-center">
                                            <Badge variant="secondary" className="text-xs">iOS</Badge>
                                            <Badge variant="secondary" className="text-xs">Web</Badge>
                                        </div>

                                        {/* Rating Cell */}
                                        <div className="flex items-center gap-1">
                                            <span className="text-yellow-500">★★★★☆</span>
                                            <span className="text-sm text-muted-foreground">(247)</span>
                                        </div>

                                        {/* Features Cell */}
                                        <div className="flex flex-wrap gap-1 text-xs text-muted-foreground">
                                            <span>Offline</span>
                                            <span>•</span>
                                            <span>API</span>
                                            <span>•</span>
                                            <span>Markdown</span>
                                        </div>

                                        {/* Action Cell */}
                                        <div className="flex items-center">
                                            <Link href={`/product/${product.slug}`}>
                                                <Button size="sm">View Details</Button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="flex items-center justify-center gap-2 pt-8">
                                <Button variant="outline" size="sm" disabled>
                                    Previous
                                </Button>
                                <Button variant="outline" size="sm">
                                    1
                                </Button>
                                <Button variant="ghost" size="sm">
                                    2
                                </Button>
                                <Button variant="ghost" size="sm">
                                    3
                                </Button>
                                <Button variant="outline" size="sm">
                                    Next
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
