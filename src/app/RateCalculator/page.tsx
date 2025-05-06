'use client'
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const cardTypes = [
    { label: "Amazon", rate: 750, image: "/images/amazon-png.png" },
    { label: "iTunes", rate: 720, image: "/images/itunes.jpeg" },
    { label: "Google Play", rate: 700, image: "/images/Google_Play-Logo.png" },
    { label: "eBay", rate: 730, image: "/images/Ebay-Logo.png" },
  ];
  


export default function Page() {
    const [amount, setAmount] = useState(0);
    const [selectedCard, setSelectedCard] = useState(cardTypes[0]);
    const [resultVisible, setResultVisible] = useState(false);

    const naira = amount * selectedCard.rate;

    const handleCalculate = () => {
        setResultVisible(true);
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
            <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-8 text-center text-orange-500"
            >
                Gift Card Rate Calculator
            </motion.h1>

            <motion.div
                className="max-w-md mx-auto space-y-6 bg-white shadow-md rounded-2xl p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Select Gift Card Type
                    </label>
                    <select
                        className="w-full border rounded px-4 py-2 text-sm"
                        value={selectedCard.label}
                        onChange={(e) => {
                            const selected = cardTypes.find((c) => c.label === e.target.value);
                            if (selected) setSelectedCard(selected);
                        }}
                    >
                        {cardTypes.map((card) => (
                            <option key={card.label} value={card.label}>
                                {card.label} (₦{card.rate}/$)
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Enter Amount in USD
                    </label>
                    <Input
                        type="number"
                        placeholder="e.g. 100"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                    />
                </div>

                <Button
                    className="w-full bg-orange-500 hover:bg-orange-600"
                    onClick={handleCalculate}
                >
                    Calculate
                </Button>

                {resultVisible && (
                    <motion.div
                        className="text-center text-lg font-medium text-green-700 mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        Estimated Amount in Naira: <strong>₦{naira.toLocaleString()}</strong>
                    </motion.div>
                )}
            </motion.div>

            <section className="mt-16">
                <h2 className="text-2xl font-bold text-center mb-6 text-orange-500">Popular Exchange Rates</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {cardTypes.map((card) => (
            <Card key={card.label} className="shadow-sm text-center">
              <CardContent className="p-4">
                <Image
                  src={card.image}
                  alt={card.label}
                  width={80}
                  height={50}
                  className="mx-auto mb-2 object-contain"
                />
                <h3 className="font-bold text-lg text-orange-500">{card.label}</h3>
                <p className="text-sm text-gray-600">₦{card.rate}/$</p>
              </CardContent>
            </Card>
          ))}
                </div>
            </section>

            <footer className=" text-white text-center py-6 text-sm mt-20">
                &copy; {new Date().getFullYear()} Owodex. All rights reserved.
            </footer>
        </main>
    );
}
