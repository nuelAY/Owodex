'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const blogPosts = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Post Title ${i + 1}`,
  summary: `This is a short preview of blog post number ${i + 1}.`,
  fullText: `This is the full content of blog post number ${i + 1}. Here we can elaborate on the topic and provide more insights, data, and value.`,
}));

export default function BlogPage() {
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
      {/* Navbar */}
      <nav className="w-full bg-[#0A0F1C] text-white shadow-md z-50 relative">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="text-3xl font-bold text-orange-500">OWODEX</div>

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

          {/* Mobile Menu Button */}
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

      {/* Blog Section */}
      <section className="px-4 md:px-16 py-12">
        <h1 className="text-3xl md:text-4xl text-center text-orange-500 font-bold mb-10">
          Latest Blog Posts
        </h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, visibleCount).map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: post.id * 0.03 }}
            >
              <Card className="bg-white text-black hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-700 text-sm mb-3">
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
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10 space-x-4">
          {visibleCount < blogPosts.length && (
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
      </section>

      {/* Footer */}
      <footer className="text-white text-center py-6 text-sm mt-16 border-t border-white/10">
        &copy; {new Date().getFullYear()} Owodex. All rights reserved.
      </footer>
    </main>
  );
}
