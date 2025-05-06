'use client'

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const blogPosts = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Post Title ${i + 1}`,
    summary: `This is a short preview of blog post number ${i + 1}.`,
    fullText: `This is the full content of blog post number ${i + 1}. Here we can elaborate on the topic and provide more insights, data, and value.`,
}));

export default function Page() {
    const [visibleCount, setVisibleCount] = useState(6);
    const [expanded, setExpanded] = useState<number | null>(null);

    const handleShowMore = () => setVisibleCount((prev) => prev + 3);
    const handleShowLess = () => setVisibleCount((prev) => Math.max(6, prev - 3));
    const handleToggleExpand = (id: number) => {
        setExpanded((prev) => (prev === id ? null : id));
    };

    return (
        <main className="bg-[#0A0F1C] min-h-screen relative">
            <nav className="w-full flex justify-between items-center px-6 py-4 bg-[#0A0F1C] text-white mb-20">
                <div className="text-xl font-bold text-orange-500 ">OWODEX</div>
                <div className="hidden md:flex gap-6">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="/Products" className="hover:underline">Products</Link>
                    <Link href="/RateCalculator" className="hover:underline">Rate Calculator</Link>
                    <Link href="/Blog" className="hover:underline">Blog</Link>
                    <Link href="/Support" className="hover:underline">Support</Link>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="text-orange-500 border-white">Log In</Button>
                    <Button variant="default" className="bg-orange-500 hover:bg-orange-600">Sign Up</Button>
                </div>
            </nav>
            <h1 className="text-3xl text-center text-orange-500 font-bold mb-8">Latest Blog Posts</h1>
            <div className="grid md:grid-cols-3 gap-6">
                {blogPosts.slice(0, visibleCount).map((post) => (
                    <Card key={post.id} className="shadow-md">
                        <CardContent className="p-6">
                            <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
                            <p className="text-gray-600 text-sm mb-2">
                                {expanded === post.id ? post.fullText : post.summary}
                            </p>
                            <Button
                                variant="link"
                                className="text-orange-600 p-0"
                                onClick={() => handleToggleExpand(post.id)}
                            >
                                {expanded === post.id ? "View Less" : "View More"}
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="text-center mt-8 space-x-4">
                {visibleCount < blogPosts.length && (
                    <Button className="bg-orange-500 hover:bg-orange-600" onClick={handleShowMore}>
                        Show More
                    </Button>
                )}
                {visibleCount > 6 && (
                    <Button variant="outline" onClick={handleShowLess}>
                        Show Less
                    </Button>
                )}
            </div>
            <footer className=" text-white text-center py-6 text-sm mt-20">
                &copy; {new Date().getFullYear()} Owodex. All rights reserved.
            </footer>
        </main>
    );
}
