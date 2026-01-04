import { ProductCard } from "@/components/products/product-card";
import { mockProducts } from "@/lib/mock-data";
import Link from "next/link";
import Image from "next/image";

// Product groups data - chaque groupe représente un article "Best of"
const productGroups = [
    {
        id: "best-note-apps",
        title: "Best Note-Taking Apps",
        slug: "best-note-apps",
        description: "We tested 25 note-taking apps to find the ones that help you capture ideas, organize information, and boost productivity.",
        products: mockProducts.slice(0, 6), // Top 6 produits du groupe
        updatedDate: "January 3, 2026",
    },
    {
        id: "best-task-managers",
        title: "Best Task Management Apps",
        slug: "best-task-managers",
        description: "After testing dozens of to-do apps, these are our top picks for staying organized and getting things done.",
        products: mockProducts.slice(6, 12),
        updatedDate: "January 2, 2026",
    },
    {
        id: "best-calendar-apps",
        title: "Best Calendar Apps",
        slug: "best-calendar-apps",
        description: "The best calendar apps for managing your schedule, setting reminders, and coordinating with your team.",
        products: mockProducts.slice(0, 6),
        updatedDate: "December 28, 2025",
    },
];

export default function HomePage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section - Wirecutter style */}
            <section className="border-b">
                <div className="container mx-auto py-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl">
                        Reviews you can trust.
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        We spend thousands of hours testing apps so you don't have to. Our expert recommendations help you find the best tools for your needs.
                    </p>
                </div>
            </section>

            {/* Product Group Sections - Style Wirecutter */}
            {productGroups.map((group, index) => (
                <section key={group.id} className="border-b py-12">
                    <div className="container mx-auto">
                        {/* Group Header */}
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold mb-3">
                                <Link href={`/reviews/${group.slug}`} className="hover:underline">
                                    {group.title}
                                </Link>
                            </h2>
                            <p className="text-muted-foreground mb-2 max-w-3xl">
                                {group.description}
                            </p>
                            <time className="text-sm text-muted-foreground">
                                Updated {group.updatedDate}
                            </time>
                        </div>

                        {/* Products Grid - 2 colonnes sur desktop */}
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
                            {group.products.map((product, productIndex) => (
                                <Link
                                    key={product.id}
                                    href={`/product/${product.slug}`}
                                    className="group block"
                                >
                                    {/* Product Image */}
                                    <div className="relative aspect-[3/2] overflow-hidden rounded-lg bg-secondary mb-3">
                                        <Image
                                            src={product.imageUrl}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Product Info */}
                                    <div>
                                        {productIndex === 0 && (
                                            <div className="text-xs font-semibold text-primary mb-1">
                                                OUR PICK
                                            </div>
                                        )}
                                        {productIndex === 1 && (
                                            <div className="text-xs font-semibold text-muted-foreground mb-1">
                                                RUNNER-UP
                                            </div>
                                        )}
                                        {productIndex === 2 && (
                                            <div className="text-xs font-semibold text-muted-foreground mb-1">
                                                ALSO GREAT
                                            </div>
                                        )}
                                        <h3 className="font-bold text-lg mb-1 group-hover:underline">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground line-clamp-2">
                                            {product.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Read Full Review Link */}
                        <div>
                            <Link
                                href={`/reviews/${group.slug}`}
                                className="inline-flex items-center text-sm font-medium hover:underline"
                            >
                                Read the full review
                                <svg
                                    className="ml-1 w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>
            ))}

            {/* The Latest Section */}
            <section className="border-b py-12">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-6">The latest</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {mockProducts.slice(0, 6).map((product) => (
                            <Link
                                key={product.id}
                                href={`/product/${product.slug}`}
                                className="group flex gap-4"
                            >
                                <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded bg-secondary">
                                    <Image
                                        src={product.imageUrl}
                                        alt={product.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold mb-1 group-hover:underline line-clamp-2">
                                        {product.name}
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                        Updated yesterday
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
