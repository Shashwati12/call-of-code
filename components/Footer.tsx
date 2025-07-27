"use client";

import React, { useState } from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import localFont from "next/font/local";
import { motion, AnimatePresence } from "framer-motion";

const pressStart2P = localFont({
  src: "../app/fonts/PressStart2P-Regular.ttf",
  display: "swap",
  variable: "--font-press-start",
});

const Footer = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cards = [
    {
      title: "About Us",
      content: (
        <p className="text-[10px] sm:text-xs leading-relaxed text-left text-gray-700 dark:text-gray-300 dark:hover:text-gray-100">
          Call Of Code is your go-to platform for coding tutorials,<br />
          challenges, and resources. Join us to explore the world<br />
          of programming and technology.
        </p>
      ),
    },
    {
      title: "Quick Links",
      content: (
        <ul className="space-y-3 text-[11px] sm:text-xs text-left">
          {[
            { href: "/about", text: "About Us" },
            { href: "/resources", text: "Projects" },
            { href: "https://mail.google.com/mail/?view=cm&fs=1&to=callofcode07@gmail.com", text: "Contact" },
            { href: "/privacy", text: "Privacy Policy" },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-gray-600 hover:text-black dark:hover:text-gray-300 transition-colors duration-300"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "Follow Us",
      content: (
        <div className="grid grid-cols-2 gap-x-16 gap-y-4 mt-4">
  {[
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/pvpitprogrammingclub?igsh=MWswZ2kxcHpiaXF2dA==",
      label: "Instagram",
    },
    {
      Icon: FaGithub,
      href: "https://github.com/call-0f-code",
      label: "GitHub",
    },
    {
      Icon: FaLinkedin,
      href: "https://www.linkedin.com/company/callofcode/",
      label: "LinkedIn",
    },
    {
      Icon: FaTwitter,
      href: "https://x.com/call_0f_code?t=pBGojoV9Hw5LkDD7-1u0UA&s=09",
      label: "Twitter",
    },
  ].map(({ Icon, href, label }, index) => (
    <a
      key={href}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`text-gray-600 hover:text-black dark:hover:text-gray-300 transition-all duration-300 hover:scale-110 text-3xl sm:text-4xl ${
        index % 2 === 0 ? "justify-self-end" : "justify-self-start"
      }`}
    >
      <Icon />
    </a>
  ))}
</div>

      ),
    },
  ];

  return (
    <footer
      className={`${pressStart2P.className} w-full min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex-grow flex flex-col justify-evenly py-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="whitespace-nowrap text-[1.25rem] sm:text-3xl md:text-5xl lg:text-6xl leading-relaxed">
            &lt;CALL OF CODE /&gt;
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-4 transition-all duration-300">
            A platform where coders unite to learn, build, and collaborate.
          </p>
        </div>

        {/* Cards */}
        <div className="relative grid gap-8 sm:grid-cols-2 md:grid-cols-3 z-10">
          {cards.map((card, idx) => (
  <div
    key={idx}
    onMouseEnter={() => setHoveredIndex(idx)}
    onMouseLeave={() => setHoveredIndex(null)}
    className="relative group transition-all duration-300"
  >
    {/*glow behind card */}
    <AnimatePresence>
      {hoveredIndex === idx && (
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     w-[150%] h-[150%] pointer-events-none z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-full h-full rounded-3xl bg-black/50 dark:bg-white/25 blur-[60px]" />
        </motion.div>
      )}
    </AnimatePresence>
    {/* Cards */}
    <div className="relative z-10 h-full min-h-[180px] p-6 flex flex-col justify-start 
                    border border-gray-300 dark:border-gray-600 rounded-2xl 
                    bg-white dark:bg-[#111111] text-black dark:text-white 
                    transition-all duration-300 shadow-lg hover:shadow-xl">
      <h2 className="text-lg font-semibold mb-3">{card.title}</h2>
      {card.content}
    </div>
  </div>
))}
                  </div>
                  
                  {/* Bottom */}
                  <div className="opacity-90 flex items-center justify-center gap-2 text-sm">
                    <span>Made with</span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/heart.png" alt="heart" className="w-6 h-6" />
                    <span>by Call of Code</span>
                  </div>
        </div>
      </footer>
  );
};

export default Footer;
