import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background">
            <div className="container mx-auto">
                <nav className="flex h-16 items-center justify-between">
                    {/* Left: Logo + Navigation */}
                    <div className="flex items-center gap-8">
                        {/* Logo - Black square matching Framer */}
                        <Link href="/" className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-lg bg-foreground" />
                        </Link>

                        {/* Navigation Links */}
                        <div className="hidden items-center gap-1 md:flex">
                            <Link href="/about">
                                <Button variant="ghost" size="sm" className="rounded-full">
                                    About
                                </Button>
                            </Link>
                            <Link href="/sponsor">
                                <Button variant="ghost" size="sm" className="rounded-full">
                                    Sponsor
                                </Button>
                            </Link>
                            <Link href="/submit">
                                <Button variant="ghost" size="sm" className="rounded-full">
                                    Submit
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Center: Search */}
                    <div className="hidden flex-1 max-w-md mx-8 lg:flex">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search apps"
                                className="w-full rounded-full bg-secondary pl-10 pr-16 border-0"
                            />
                            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                                S
                            </kbd>
                        </div>
                    </div>

                    {/* Right: CTA Buttons */}
                    <div className="flex items-center gap-2">
                        <Link href="/support">
                            <Button variant="outline" size="sm" className="rounded-full">
                                Support
                            </Button>
                        </Link>
                        <Link href="/subscribe">
                            <Button size="sm" className="rounded-full">
                                Subscribe
                            </Button>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
