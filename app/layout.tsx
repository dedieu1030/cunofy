import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { CategoryNav } from "@/components/layout/category-nav";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Cunofy - Discover the Best Tech Products",
    description: "A curated directory of the best tools, software, and tech equipment—organized, searchable, and easy to explore.",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} font-sans antialiased`}>
                <Header />
                <CategoryNav />
                {children}
                <Footer />
            </body>
        </html>
    );
}
