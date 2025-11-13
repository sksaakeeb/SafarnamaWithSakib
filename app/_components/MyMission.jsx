"use client";
import React from "react";
import { motion } from "framer-motion";
import { HiGlobeAsiaAustralia, HiCamera, HiHeart } from "react-icons/hi2";

export default function MyMission() {
      return (
            <section
                  id="MyMission"
                  className="
        relative py-28 px-6 sm:px-10
        bg-gradient-to-br from-white via-blue-50 to-indigo-100
        flex justify-center
      "
            >
                  <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="
          max-w-6xl mx-auto w-full
          bg-white/40 backdrop-blur-xl border border-white/20
          rounded-3xl p-10 sm:p-14 md:p-20
          shadow-[0_20px_70px_rgba(0,0,0,0.12)]
        "
                  >
                        {/* === LEFT TOP TITLE === */}
                        <div className="mb-10">
                              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-left">
                                    My{" "}
                                    <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                                          Mission
                                    </span>
                              </h2>
                        </div>

                        {/* === DESCRIPTION === */}
                        <p className="text-gray-700 text-2xl sm:text-xl md:text-2xl leading-relaxed mb-14 max-w-4xl">
                              My mission is simple — to travel deeper, discover the unseen  corners of the world, and {" "}
                              <span className="font-semibold text-indigo-700">
                                    make people feel the journey
                              </span>{" "}
                              through pure storytelling and honest visuals.
                              I want my audience to experience the raw beauty, culture, and emotion behind every destination.
                        </p>

                        {/* === MISSION POINTS === */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-10">

                              {/* Card 1 */}
                              <motion.div
                                    whileHover={{ scale: 1.06 }}
                                    className="
              bg-white/50 backdrop-blur-md border border-white/30
              p-8 rounded-2xl shadow-md hover:shadow-xl transition-all
              flex flex-col items-center text-center 
            "
                              >
                                    <HiGlobeAsiaAustralia size={50} className="text-indigo-600 mb-5" />
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                          Explore Deeply
                                    </h3>
                                    <p className="text-gray-600 text-sm sm:text-base">
                                          I search for real stories—not crowded tourist spots. I explore
                                          untouched beauty, hidden trails, and forgotten cultures.
                                    </p>
                              </motion.div>

                              {/* Card 2 */}
                              <motion.div
                                    whileHover={{ scale: 1.06 }}
                                    className="
              bg-white/50 backdrop-blur-md border border-white/30
              p-8 rounded-2xl shadow-md hover:shadow-xl transition-all
              flex flex-col items-center text-center 
            "
                              >
                                    <HiCamera size={50} className="text-indigo-600 mb-5" />
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                          Capture Reality
                                    </h3>
                                    <p className="text-gray-600 text-sm sm:text-base">
                                          Zero filters. Zero fakeness. I record journeys exactly how they feel—
                                          raw, emotional, and human.
                                    </p>
                              </motion.div>

                              {/* Card 3 */}
                              <motion.div
                                    whileHover={{ scale: 1.06 }}
                                    className="
              bg-white/50 backdrop-blur-md border border-white/30
              p-8 rounded-2xl shadow-md hover:shadow-xl transition-all
              flex flex-col items-center text-center 
            "
                              >
                                    <HiHeart size={50} className="text-indigo-600 mb-5" />
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                          Inspire People
                                    </h3>
                                    <p className="text-gray-600 text-sm sm:text-base">
                                          My ultimate goal is to inspire others to explore, feel nature,
                                          and create their own travel stories.
                                    </p>
                              </motion.div>

                        </div>
                  </motion.div>
            </section>
      );
}
