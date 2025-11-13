"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

function Hero() {
  const images = [
    "/photo-1.jpg",
    "/my-photo.jpg",
    "/photo-3.jpg",
    // "/photo-4.jpg",
    "/photo-5.jpg",
  ];

  return (
    <section
      className="
        relative overflow-hidden 
        bg-gradient-to-br from-white via-blue-50 to-indigo-100 
        min-h-screen flex flex-col justify-center 
        pt-[120px]
      "
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* === LEFT: TEXT === */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
              Explore the World with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Safarnama With Sakib
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-gray-700 text-base sm:text-lg md:text-xl mb-8 leading-relaxed"
            >
              From serene mountains to hidden cities, experience the magic of travel through my
              lens. Discover stories, adventures, and unforgettable moments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              <a
                href={'https://www.youtube.com/@SafarnamaWithSakib'}
                className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-3 text-sm md:text-base font-semibold text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                Subscribe Now
              </a>
              <a
                href="https://www.youtube.com/@SafarnamaWithSakib/videos"
                className="inline-block rounded-full border border-gray-400 px-8 py-3 text-sm md:text-base font-semibold text-gray-700 hover:bg-white/60 transition-all"
              >
                Watch Videos
              </a>
            </motion.div>
          </motion.div>

          {/* === RIGHT: IMAGE CAROUSEL === */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="flex justify-center md:justify-end"
          >
            <div
              className="
      relative rounded-3xl overflow-hidden
      border-2 border-dotted border-gray-400/40
      shadow-[0_10px_40px_rgba(0,0,0,0.15)]
      hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]
      hover:border-gray-500/50
      transition-all duration-500 ease-out
      w-[90%] sm:w-[80%] md:w-[85%] lg:w-[600px]
      backdrop-blur-md bg-white/20
    "
            >
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                speed={1000}
                pagination={{
                  clickable: true,
                }}
                className="mySwiper"
              >
                {images.map((src, i) => (
                  <SwiperSlide key={i}>
                    <Image
                      src={src}
                      alt={`Slide ${i + 1}`}
                      width={1200}
                      height={800}
                      className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
                      priority={i === 0}
                      unoptimized
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Pagination positioning */}
              <div className="absolute bottom-2 left-0 right-0 z-10 flex justify-center">
                <div className="swiper-pagination !relative !bottom-0"></div>
              </div>

              {/* Soft gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
