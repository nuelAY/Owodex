'use client'
import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";


const productList = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: ["Amazon", "iTunes", "Google Play", "eBay"][i % 4],
    category: ["Gift Card", "Entertainment", "Digital", "Shopping"][i % 4],
    image: `/images/${["amazon-png", "Paystack_Logo", "Google_Play-Logo", "Ebay-Logo"][i % 4]}.png`,
    description: `This is a brief description of product ${i + 1}. Includes benefits, usage, and availability.`,
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
            <h1 className="text-3xl font-bold mb-8 text-center text-orange-500">Our Products</h1>
            <div className="grid md:grid-cols-3 gap-6">
                {productList.slice(0, visibleCount).map((product) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Card className="shadow-md">
                            <CardContent className="p-4 space-y-3">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={300}
                                    height={200}
                                    className="object-contain mx-auto h-24"
                                />
                                <h2 className="text-lg font-semibold">{product.title}</h2>
                                <p className="text-xs text-gray-500 italic">Category: {product.category}</p>
                                <p className="text-sm text-gray-600">
                                    {expanded === product.id ? product.description : `${product.description.slice(0, 50)}...`}
                                </p>
                                <Button
                                    variant="link"
                                    className="text-orange-600 p-0"
                                    onClick={() => handleToggleExpand(product.id)}
                                >
                                    {expanded === product.id ? "View Less" : "View More"}
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
            <div className="text-center mt-8 space-x-4">
                {visibleCount < productList.length && (
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