"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const categories = [
    { name: "Latest apps", slug: "" },
    { name: "Business", slug: "business" },
    { name: "Design", slug: "design" },
    { name: "Dev Tools", slug: "dev-tools" },
    { name: "Education", slug: "education" },
    { name: "Finance", slug: "finance" },
    { name: "Health", slug: "health" },
    { name: "Lifestyle", slug: "lifestyle" },
    { name: "Music", slug: "music" },
    { name: "Photo & Video", slug: "photo-video" },
    { name: "Productivity", slug: "productivity" },
    { name: "Social", slug: "social" },
    { name: "Utilities", slug: "utilities" },
];

export function CategoryNav() {
    const pathname = usePathname();

    return (
        <section className="border-b">
            <div className="container px-6">
                <div className="hide-scrollbar flex gap-2 overflow-x-auto py-4">
                    {categories.map((category) => {
                        const href = category.slug ? `/category/${category.slug}` : "/";
                        const isActive = category.slug
                            ? pathname === href
                            : pathname === "/";

                        return (
                            <Link
                                key={category.slug || "latest"}
                                href={href}
                                className={cn(
                                    "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-secondary text-foreground"
                                        : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                                )}
                            >
                                {category.name}
                            </Link>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
}
