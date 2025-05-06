import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BadgePercent, Gift, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MotionWrapper from "./utils/MotionWrapper";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      {/* Navbar */}
      <MotionWrapper>
        <nav className="w-full flex justify-between items-center px-6 py-4 bg-[#0A0F1C] text-white">
          <div className="text-4xl font-bold text-orange-500">OWODEX</div>
          <div className="hidden md:flex gap-6">
            <Link href="#" className="hover:underline">Home</Link>
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
      </MotionWrapper>

      {/* Hero Section */}
      <MotionWrapper>
        <section className="bg-[#0A0F1C] text-white py-16 px-6 md:px-24 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sell Gift Cards at Best Rates.</h1>
            <p className="mb-6">Redeem your Gift cards for Naira and get the best rates.</p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600">Get Started</Button>
              <Button variant="outline" className="text-orange-600 border-white">Contact Support</Button>
            </div>
            <p className="mt-4 text-sm">🎁 Get ₦2,000 signup bonus</p>
          </div>
          <Image
            src="/images/phone.jpg"
            width={300}
            height={500}
            alt="Phone mockup"
            className="w-72 md:w-96"
          />
        </section>
      </MotionWrapper>

      {/* Trusted By */}
      <MotionWrapper>
        <section className="bg-white py-8 px-6 md:px-24 flex flex-wrap justify-center gap-12">
          <Image src="/images/paystack_Logo.png" alt="paystack" width={300} height={500} className="h-12 object-contain" />
          <Image src="/images/visa-card-logo.png" width={300} height={500} alt="visa" className="h-12 object-contain" />
          <Image src="/images/MasterCard.png" width={300} height={500} alt="mastercard" className="h-12 object-contain" />
          <Image src="/images/amazon-png.png" width={300} height={500} alt="amazon" className="h-12 object-contain" />
          <Image src="/images/coinbase-logo.png" width={300} height={500} alt="coinbase" className="h-12 object-contain" />
        </section>
      </MotionWrapper>

      {/* Offerings */}
      <MotionWrapper>
        <section className="bg-[#F9FBFD] py-16 px-6 md:px-24 grid md:grid-cols-3 gap-8 text-center">
          <Card className="shadow-md">
            <CardContent className="py-6">
              <Gift className="mx-auto mb-4 h-10 w-10 text-orange-500" />
              <h3 className="font-semibold text-lg mb-2">Gift Cards</h3>
              <p className="text-sm text-gray-600">Enjoy the highest rates in Nigeria on all Gift Cards you sell to us.</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="py-6">
              <Wallet className="mx-auto mb-4 h-10 w-10 text-orange-500" />
              <h3 className="font-semibold text-lg mb-2">Bills Payment</h3>
              <p className="text-sm text-gray-600">Pay Cable TV, Airtime, Data, and other bills easily.</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="py-6">
              <BadgePercent className="mx-auto mb-4 h-10 w-10 text-orange-500" />
              <h3 className="font-semibold text-lg mb-2">Bonus/Rewards</h3>
              <p className="text-sm text-gray-600">Earn unlimited bonuses and rewards when you complete tasks.</p>
            </CardContent>
          </Card>
        </section>
      </MotionWrapper>

      {/* Why Choose Us */}
      <MotionWrapper>
        <section className="bg-[#0A0F1C] text-white py-16 px-6 md:px-24 flex flex-col md:flex-row items-center gap-12">
          <Image
            src="/images/phone.jpg"
            width={300}
            height={500}
            alt="Phone mockup"
            className="w-72 md:w-96"
          />
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Reasons to Choose Owodex</h2>
            <ul className="space-y-4">
              <li><strong>⭐ Best Rates:</strong> We offer the most competitive rates for gift cards and bills payment in Nigeria.</li>
              <li><strong>⚡ Fast Transactions:</strong> Our transactions are swift and efficient, ensuring you get your money quickly.</li>
              <li><strong>🔐 Secure Platform:</strong> We use advanced encryption to protect your transactions.</li>
            </ul>
          </div>
        </section>
      </MotionWrapper>

      {/* Welcome Section */}
      <MotionWrapper>
        <section className="bg-white py-16 px-6 md:px-24 text-center">
          <h2 className="text-2xl font-bold mb-4">Welcome to Owodex</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-700">
            Owodex offers a wide array of gift cards from popular brands. Our platform is fast, secure, and optimized for lightning-fast transactions.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <Image src="/images/amazon-png.png" alt="amazon card" width={300} height={300} className="h-24 w-40 object-contain" />
            <Image src="/images/itunes.jpeg" alt="itunes card" width={300} height={300} className="h-24 w-40 object-contain" />
            <Image src="/images/Google_Play-Logo.png" alt="googleplay card" width={300} height={300} className="h-24 w-40 object-contain" />
            <Image src="/images/Ebay-Logo.png" alt="ebay card" width={300} height={300} className="h-24 w-40 object-contain" />
          </div>
          <div className="text-lg font-semibold mb-4">10 Mins of Loading Time | 82 Popular Gift Cards</div>
          <Button className="bg-orange-500 hover:bg-orange-600">Start Trading Now</Button>
        </section>
      </MotionWrapper>

      {/* Promo Section */}
      <MotionWrapper>
        <section className="bg-[#0A0F1C] text-white py-16 px-6 md:px-24 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold mb-2">Get ₦2,000 Signup Bonus</h2>
            <p className="mb-4">Zero Hidden Fees + Super Fast Transactions - Our guaranteed winning combo at Owodex.</p>
            <Button className="bg-orange-500 hover:bg-orange-600">Get Started</Button>
          </div>
          <Image
            src="/images/smile.jpg"
            width={300}
            height={500}
            alt="Phone mockup"
            className="w-72 md:w-96"
          />
        </section>
      </MotionWrapper>

      {/* Footer */}
      <MotionWrapper>
        <footer className="bg-[#0A0F1C] text-white text-center py-6 text-sm">
          &copy; {new Date().getFullYear()} Owodex. All rights reserved.
        </footer>
      </MotionWrapper>
    </main>
  );
}
