"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Home";
import AboutUs from "@/components/About";
import Particles from "@/components/ui/particles";
import { useTheme } from "@/components/ui/theme-provider";

export default function Main() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const scrollToHash = () => {
         try {
         const el = document.querySelector(hash);
         if (el) {
           el.scrollIntoView({ behavior: "smooth" });
         }
       } catch (error) {
         console.warn(`Failed to scroll to element with hash: ${hash}`, error);
       }
      };
      setTimeout(scrollToHash, 100); // 100ms should be enough
    }
  }, []);

  if (!mounted) return null;

  const particleColor = theme === "dark" ? "#ffffff" : "#000000";

  return (
    <div className="relative bg-white dark:bg-black text-black dark:text-white">
      {/* Render particles only in content area */}
      <div className="relative z-0">
        <Particles
          quantity={400}
          className="absolute inset-0"
          color={particleColor}
        />
        <div className="relative z-10">
          <HeroSection />
          <AboutUs />
        </div>
      </div>

      {/* No particles here */}
      <footer className="bg-black text-white py-4 px-2">
        <div className="w-full">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
