"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function VideosPage() {
  const videos = [
  {
    id: "swedSQR7Sr0",
    title: "I Went to Sundarbans | World's LARGEST Mangrove Forest 🌳",
    thumbnail: "/thumb-1.jpg",
  },

  // ⭐ Your new Sundarbans vlog
  {
    id: "dgz-LxduKBk",
    title: "My New Adventure VlogSundarbans Day 2 🌴",
    thumbnail: "/videos/thumb-sundarban2.jpg",
  },
  {
    id: "rBJTJEZr5wY&t",
    title: "My New Adventure Vlog  Sundarbans Day 2 🌴",
    thumbnail: "/videos/thumb-sundarban2.jpg",
  },

  
];


  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <section
      className="
        min-h-screen py-24 px-6 sm:px-10 
        bg-gradient-to-br from-white via-blue-50 to-indigo-100
      "
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-14"
      >
        Watch My  
        <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent"> Videos</span>
      </motion.h2>

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        
        {/* === MAIN PLAYER === */}
        <motion.div
          key={activeVideo.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="
            lg:col-span-2 w-full h-[260px] sm:h-[360px] md:h-[450px] lg:h-[500px]
            rounded-3xl overflow-hidden
            bg-white/40 backdrop-blur-lg border border-white/40
            shadow-[0_10px_40px_rgba(0,0,0,0.15)]
          "
        >
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0&modestbranding=1&color=white`}
            title="Video Player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </motion.div>

        {/* === PLAYLIST === */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="
            bg-white/40 backdrop-blur-lg border border-white/40 
            rounded-3xl p-6 h-fit
            shadow-[0_10px_40px_rgba(0,0,0,0.1)]
          "
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Playlist</h3>

          <div className="space-y-5">
            {videos.map((video) => (
              <div
                key={video.id}
                className={`
                  flex items-center gap-4 cursor-pointer 
                  rounded-xl p-3 transition-all
                  ${activeVideo.id === video.id ? "bg-white/60 scale-[1.02]" : "hover:bg-white/30"}
                `}
                onClick={() => setActiveVideo(video)}
              >
                <div className="relative w-24 h-16 rounded-lg overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-gray-800 text-sm font-medium">{video.title}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
