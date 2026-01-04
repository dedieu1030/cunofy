import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { mockProducts } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";

// Mock data for the review article
const reviewArticle = {
    title: "The Best Note-Taking Apps",
    slug: "best-note-apps",
    byline: "Cunofy Team",
    updatedDate: "January 3, 2026",
    intro: "After spending hundreds of hours testing 25 different note-taking apps, we've found the best options for capturing ideas, organizing information, and boosting your productivity. Whether you need a simple notepad or a powerful knowledge management system, we have recommendations for every use case.",
    ourPick: {
        product: mockProducts[0],
        reason: "Best for most people",
        review: "Notion stands out as our top pick because it combines powerful features with an intuitive interface. It's perfect for everything from simple note-taking to complex project management. The free tier is generous, and the collaboration features are excellent.",
    },
    runnerUp: {
        product: mockProducts[1],
        reason: "Best for markdown lovers",
        review: "If you prefer working in markdown and want complete control over your data, Obsidian is an excellent choice. It stores notes as plain text files on your device, giving you full ownership. The plugin ecosystem is incredibly rich.",
    },
    alsoGreat: [
        {
            product: mockProducts[2],
            reason: "Best for Apple users",
            review: "Apple Notes has come a long way and is now a genuinely capable note-taking app. If you're deep in the Apple ecosystem, it's hard to beat the seamless integration and iCloud sync.",
        },
        {
            product: mockProducts[3],
            reason: "Best for teams",
            review: "For team collaboration, Notion's workspace features make it the clear winner. Real-time editing, comments, and permissions make it ideal for shared knowledge bases.",
        },
    ],
};

export default function ReviewArticlePage() {
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
                        <Link href="/" className="hover:text-foreground">
                            Reviews
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-foreground">{reviewArticle.title}</span>
                    </nav>
                </div>
            </div>

            {/* Article Header */}
            <section className="border-b py-8">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        {reviewArticle.title}
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>By {reviewArticle.byline}</span>
                        <span>•</span>
                        <time>Updated {reviewArticle.updatedDate}</time>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-12">
                <div className="container mx-auto max-w-4xl">
                    {/* Introduction */}
                    <div className="prose prose-lg max-w-none mb-12">
                        <p className="text-lg leading-relaxed">
                            {reviewArticle.intro}
                        </p>
                    </div>

                    {/* Our Pick */}
                    <section className="mb-16">
                        <div className="mb-6">
                            <Badge className="mb-2">OUR PICK</Badge>
                            <h2 className="text-3xl font-bold mb-2">
                                {reviewArticle.ourPick.product.name}
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                {reviewArticle.ourPick.reason}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-6">
                            {/* Product Image */}
                            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary">
                                <Image
                                    src={reviewArticle.ourPick.product.imageUrl}
                                    alt={reviewArticle.ourPick.product.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Product Info */}
                            <div className="flex flex-col justify-center">
                                <h3 className="text-xl font-semibold mb-3">
                                    {reviewArticle.ourPick.product.name}
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    {reviewArticle.ourPick.product.description}
                                </p>
                                <div className="flex gap-3">
                                    <Link
                                        href={`/product/${reviewArticle.ourPick.product.slug}`}
                                        className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                                    >
                                        View Details
                                    </Link>
                                    <a
                                        href={reviewArticle.ourPick.product.affiliateLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                                    >
                                        Visit Website
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p>{reviewArticle.ourPick.review}</p>
                        </div>
                    </section>

                    {/* Runner-up */}
                    <section className="mb-16">
                        <div className="mb-6">
                            <Badge variant="outline" className="mb-2">RUNNER-UP</Badge>
                            <h2 className="text-3xl font-bold mb-2">
                                {reviewArticle.runnerUp.product.name}
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                {reviewArticle.runnerUp.reason}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-6">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary">
                                <Image
                                    src={reviewArticle.runnerUp.product.imageUrl}
                                    alt={reviewArticle.runnerUp.product.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex flex-col justify-center">
                                <h3 className="text-xl font-semibold mb-3">
                                    {reviewArticle.runnerUp.product.name}
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    {reviewArticle.runnerUp.product.description}
                                </p>
                                <div className="flex gap-3">
                                    <Link
                                        href={`/product/${reviewArticle.runnerUp.product.slug}`}
                                        className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                                    >
                                        View Details
                                    </Link>
                                    <a
                                        href={reviewArticle.runnerUp.product.affiliateLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                                    >
                                        Visit Website
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p>{reviewArticle.runnerUp.review}</p>
                        </div>
                    </section>

                    {/* Also Great */}
                    {reviewArticle.alsoGreat.map((item, index) => (
                        <section key={index} className="mb-16">
                            <div className="mb-6">
                                <Badge variant="outline" className="mb-2">ALSO GREAT</Badge>
                                <h2 className="text-3xl font-bold mb-2">
                                    {item.product.name}
                                </h2>
                                <p className="text-lg text-muted-foreground">
                                    {item.reason}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 mb-6">
                                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary">
                                    <Image
                                        src={item.product.imageUrl}
                                        alt={item.product.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-col justify-center">
                                    <h3 className="text-xl font-semibold mb-3">
                                        {item.product.name}
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        {item.product.description}
                                    </p>
                                    <div className="flex gap-3">
                                        <Link
                                            href={`/product/${item.product.slug}`}
                                            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                                        >
                                            View Details
                                        </Link>
                                        <a
                                            href={item.product.affiliateLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                                        >
                                            Visit Website
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none">
                                <p>{item.review}</p>
                            </div>
                        </section>
                    ))}

                    {/* Back to Home */}
                    <div className="pt-8 border-t">
                        <Link
                            href="/"
                            className="inline-flex items-center text-sm font-medium hover:underline"
                        >
                            ← Back to all reviews
                        </Link>
                    </div>
                </div>
            </article>
        </main>
    );
}
