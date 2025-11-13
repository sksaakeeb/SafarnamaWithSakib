"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiMail } from "react-icons/fi";

export default function AboutMe() {
      return (
            <section
                  id="AboutMe"
                  className="
        relative py-24 px-6 sm:px-10
        bg-gradient-to-br from-white via-blue-50 to-indigo-100
        flex justify-center items-center
      "
            >
                  <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="
          max-w-6xl mx-auto
          rounded-3xl p-8 sm:p-12 md:p-16
          bg-white/40 backdrop-blur-xl border border-white/20
          shadow-[0_20px_60px_rgba(0,0,0,0.12)]
        "
                  >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                              {/* === LEFT: IMAGE === */}
                              <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="flex justify-center md:justify-start"
                              >
                                    <div className="relative group">
                                          {/* Glowing ring */}
                                          <div
                                                className="
                  absolute -inset-2 rounded-full 
                  bg-gradient-to-br from-blue-500/30 to-indigo-500/30
                  blur-2xl opacity-0 group-hover:opacity-70 
                  transition-all duration-500
                "
                                          ></div>

                                          {/* Image container */}
                                          <div
                                                className="
                  relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 
                  rounded-full overflow-hidden 
                  border-4 border-white/60 shadow-xl 
                "
                                          >
                                                <Image
                                                      src="/my-photo.jpg"
                                                      alt="Sakib"
                                                      fill
                                                      className="object-cover"
                                                />
                                          </div>
                                    </div>
                              </motion.div>

                              {/* === RIGHT: TEXT === */}
                              <motion.div
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                              >
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                                          About{" "}
                                          <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                                                Me
                                          </span>
                                    </h2>

                                    <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
                                          Hey, I’m <span className="font-semibold text-gray-900">Sakib</span> —
                                          the face behind{" "}
                                          <span className="text-indigo-600 font-semibold">
                                                Safarnama With Sakib
                                          </span>
                                          . I’m a traveler, a storyteller, and someone who believes
                                          every journey carries a piece of magic worth sharing.
                                    </p>

                                    <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
                                          From mountains kissed by clouds to cities glowing with culture —
                                          I explore places with a camera in hand and curiosity in my heart.
                                          My goal is simple:  <br />
                                          <span className="text-indigo-700 font-semibold">
                                                Capture raw beauty & make you feel the journey with me.
                                          </span>
                                    </p>

                                    {/* CTA Button */}
                                    <a
                                          href="mailto:safarnamasakib@gmail.com"
                                          className="
                inline-flex items-center gap-3
                rounded-full bg-gradient-to-r from-blue-600 to-indigo-700
                text-white px-8 py-3 font-semibold shadow-lg
                hover:shadow-xl hover:scale-105 transition-all
              "
                                    >
                                          <FiMail size={20} />
                                          Let's Connect
                                    </a>
                              </motion.div>
                        </div>
                  </motion.div>
            </section>
      );
}
