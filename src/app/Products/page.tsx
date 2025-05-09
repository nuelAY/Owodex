'use client';

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/Products" },
    { label: "Rate Calculator", href: "/RateCalculator" },
    { label: "Blog", href: "/Blog" },
    { label: "Support", href: "/Support" },
  ];

  const handleShowMore = () => setVisibleCount((prev) => prev + 3);
  const handleShowLess = () => setVisibleCount((prev) => Math.max(6, prev - 3));
  const handleToggleExpand = (id: number) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <main className="bg-[#0A0F1C] min-h-screen text-white">
      <nav className="w-full bg-[#0A0F1C] shadow-md z-50 relative">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="text-4xl font-bold text-orange-500">OWODEX</div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6">
            {links.map((link) => (
              <Link key={link.label} href={link.href} className="hover:underline">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex gap-4">
            <Button variant="outline" className="text-orange-500 border-white">Log In</Button>
            <Button className="bg-orange-500 hover:bg-orange-600">Sign Up</Button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden flex flex-col px-6 pb-4 gap-4 bg-[#0A0F1C] border-t border-white/10"
            >
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white hover:underline"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="outline" className="text-orange-500 border-white">Log In</Button>
                <Button className="bg-orange-500 hover:bg-orange-600">Sign Up</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <h1 className="text-3xl font-bold mb-8 text-center text-orange-500 mt-10">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
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
                  className="object-contain mx-auto h-20 sm:h-24"
                />
                <h2 className="text-lg font-semibold text-center">{product.title}</h2>
                <p className="text-xs text-gray-500 italic text-center">Category: {product.category}</p>
                <p className="text-sm text-gray-700 text-center">
                  {expanded === product.id
                    ? product.description
                    : `${product.description.slice(0, 50)}...`}
                </p>
                <div className="text-center">
                  <Button
                    variant="link"
                    className="text-orange-600 p-0"
                    onClick={() => handleToggleExpand(product.id)}
                  >
                    {expanded === product.id ? "View Less" : "View More"}
                  </Button>
                </div>
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
          <Button className="text-black" variant="outline" onClick={handleShowLess}>
            Show Less
          </Button>
        )}
      </div>

      <footer className="text-white text-center py-6 text-sm mt-20">
        &copy; {new Date().getFullYear()} Owodex. All rights reserved.
      </footer>
    </main>
  );
}
