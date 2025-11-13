"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
      const [open, setOpen] = useState(false);
      const [scrolled, setScrolled] = useState(false);

      useEffect(() => {
            const onScroll = () => setScrolled(window.scrollY > 10);
            onScroll();
            window.addEventListener("scroll", onScroll);
            return () => window.removeEventListener("scroll", onScroll);
      }, []);

      // Close menu on link click
      const handleLinkClick = () => setOpen(false);

      return (
            <motion.header
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`fixed top-6 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "scale-[0.98] opacity-95" : "scale-100 opacity-100"
                        }`}
            >
                  {/* Outer wrapper */}
                  <div className="mx-4 md:mx-8 overflow-hidden rounded-3xl">
                        <nav
                              className={`mx-auto max-w-6xl border border-white/10 
          bg-white/30 dark:bg-gray-900/30 backdrop-blur-md
          p-3 transition-all duration-300 rounded-3xl
          ${scrolled ? "shadow-md shadow-black/10" : "shadow-sm shadow-black/5"}`}
                              aria-label="main-navigation"
                        >
                              <div className="flex items-center justify-between gap-4">
                                    {/* === Logo === */}
                                    <Link href="/" className="flex items-center gap-3" onClick={handleLinkClick}>
                                          <div className="h-10 w-10 rounded-xl overflow-hidden flex items-center justify-center">
                                                <Image
                                                      src="/logo_header.jpg"
                                                      alt="Safarnama With Sakib"
                                                      width={40}
                                                      height={40}
                                                      className="object-cover"
                                                />
                                          </div>
                                          <div className="text-sm font-semibold cursor-pointer">
                                                Safarnama With Sakib
                                          </div>
                                    </Link>

                                    {/* === Desktop Links === */}
                                    <div className="hidden md:flex items-center gap-6">
                                          <a href="#" className="text-sm font-medium hover:underline">
                                                Home
                                          </a>
                                          <Link href="/videos" className="text-sm font-medium hover:underline">
                                                Videos
                                          </Link>
                                          <a href="#AboutMe" className="text-sm font-medium hover:underline">
                                                About Me
                                          </a>
                                          <a href="mailto:safarnamawithsakib@gmail.com" className="text-sm font-medium hover:underline">
                                                Contact Me
                                          </a>
                                          <Link href="https://www.youtube.com/@SafarnamaWithSakib" target="_blank">
                                                <button className="ml-2 rounded-lg px-3 py-1 text-sm font-semibold ring-1 ring-white/20 backdrop-blur-sm text-red-600 hover:scale-110 transition-all cursor-pointer">
                                                      Subscribe
                                                </button>
                                          </Link>
                                    </div>

                                    {/* === Mobile Toggle === */}
                                    <div className="md:hidden">
                                          <button
                                                onClick={() => setOpen((s) => !s)}
                                                aria-expanded={open}
                                                aria-label="Open menu"
                                                className="rounded-lg p-2 ring-1 ring-white/10"
                                          >
                                                <svg
                                                      className="h-6 w-6"
                                                      fill="none"
                                                      viewBox="0 0 24 24"
                                                      stroke="currentColor"
                                                      strokeWidth={2}
                                                >
                                                      {open ? (
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                      ) : (
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                                      )}
                                                </svg>
                                          </button>
                                    </div>
                              </div>

                              {/* === Mobile Menu === */}
                              <AnimatePresence>
                                    {open && (
                                          <motion.div
                                                key="mobile-menu"
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                                className="mt-3 flex flex-col gap-2 rounded-lg border-t border-white/10 pt-3 md:hidden"
                                          >
                                                <a href="#" onClick={handleLinkClick} className="px-2 py-2 text-sm font-medium">
                                                      Home
                                                </a>
                                                <Link href="/videos" onClick={handleLinkClick} className="px-2 py-2 text-sm font-medium">
                                                      Videos
                                                </Link>
                                                <a href="#AboutMe" onClick={handleLinkClick} className="px-2 py-2 text-sm font-medium">
                                                      About Me
                                                </a>
                                                <a href="mailto:safarnamawithsakib@gmail.com" onClick={handleLinkClick} className="px-2 py-2 text-sm font-medium">
                                                      Contact Me
                                                </a>
                                                <Link href="https://www.youtube.com/@SafarnamaWithSakib" target="_blank" onClick={handleLinkClick}>
                                                      <button className="mt-1 rounded-lg px-3 py-2 text-sm font-semibold ring-1 ring-white/20 text-red-600">
                                                            Subscribe
                                                      </button>
                                                </Link>
                                          </motion.div>
                                    )}
                              </AnimatePresence>
                        </nav>
                  </div>
            </motion.header>
      );
}
