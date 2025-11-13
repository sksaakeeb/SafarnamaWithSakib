"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        relative mt-20
        bg-linear-to-br from-white/60 via-blue-50/40 to-indigo-100/50
        backdrop-blur-md border-t border-white/40
        py-10 sm:py-14
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left"
      >
        {/* === LEFT: BRAND INFO === */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-gray-900">
            Safarnama With{" "}
            <span className="bg-linear-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              Sakib
            </span>
          </h3>
          <p className="text-gray-600 text-sm max-w-sm">
            Discover the world through my lens — one story, one adventure, one destination at a time.
          </p>
        </div>

        {/* === CENTER: NAV LINKS === */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-700 text-sm font-medium">
          <a href="/" className="hover:text-indigo-600 transition-colors">
            Home
          </a>
          <a href="#AboutMe" className="hover:text-indigo-600 transition-colors">
            About
          </a>
          <a href="/videos" className="hover:text-indigo-600 transition-colors">
            Videos
          </a>
          <a href="#Contact Me" className="hover:text-indigo-600 transition-colors">
            Contact
          </a>
        </div>

        {/* === RIGHT: SOCIAL ICONS === */}
        <div className="flex justify-center md:justify-end gap-5 text-gray-700">
          <a
            href="https://youtube.com/@SafarnamaWithSakib"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-transform transform hover:scale-110"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://instagram.com/safarnamawithsakib"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-transform transform hover:scale-110"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://facebook.com/safarnamawithsakib"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-transform transform hover:scale-110"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="mailto:safarnamawithsakib@gmail.com"
            className="hover:text-indigo-500 transition-transform transform hover:scale-110"
          >
            <FaEnvelope size={22} />
          </a>
        </div>
      </motion.div>

      {/* === COPYRIGHT LINE === */}
      <div className="mt-10 text-center text-gray-500 text-sm border-t border-white/30 pt-6">
        © {new Date().getFullYear()} Safarnama With Sakib. All rights reserved.
      </div>

      {/* === Decorative glowing gradient === */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-indigo-600 to-pink-500 opacity-40"></div>
    </footer>
  );
}
