import Link from "next/link";

export function Footer() {
    const categories = [
        "Business",
        "Design",
        "Dev Tools",
        "Education",
        "Finance",
        "Health",
        "Lifestyle",
        "Music",
        "Photo & Video",
        "Productivity",
        "Social",
        "Utilities",
    ];

    const pages = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Sponsor", href: "/sponsor" },
        { name: "Support", href: "/support" },
        { name: "Submit app", href: "/submit" },
    ];

    return (
        <footer className="bg-foreground text-background">
            <div className="container mx-auto px-6 py-16">
                <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
                    {/* Left: Branding */}
                    <div className="rounded-3xl bg-background/10 p-8">
                        <div className="flex items-start gap-4">
                            <div className="h-12 w-12 rounded-lg bg-background" />
                            <div>
                                <h3 className="font-medium text-background">Cunofy</h3>
                                <p className="mt-2 text-sm text-background/50">
                                    Find beautifully designed products and software, curated weekly.
                                </p>
                            </div>
                        </div>
                        <p className="mt-8 text-xs text-background/50">
                            © Cunofy 2024–2025. All rights reserved.
                        </p>
                    </div>

                    {/* Right: Links */}
                    <div className="grid gap-8 sm:grid-cols-2">
                        {/* Categories */}
                        <div>
                            <h4 className="mb-4 text-sm text-background/50">Categories</h4>
                            <div className="h-px bg-background/15 mb-4" />
                            <ul className="space-y-3">
                                {categories.map((category) => (
                                    <li key={category}>
                                        <Link
                                            href={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                                            className="text-sm text-foreground hover:text-background transition-colors"
                                        >
                                            {category}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Pages */}
                        <div>
                            <h4 className="mb-4 text-sm text-background/50">Pages</h4>
                            <div className="h-px bg-background/15 mb-4" />
                            <ul className="space-y-3">
                                {pages.map((page) => (
                                    <li key={page.name}>
                                        <Link
                                            href={page.href}
                                            className="text-sm text-background hover:text-background/80 transition-colors"
                                        >
                                            {page.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
