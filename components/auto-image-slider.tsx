"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

type AutoImageSliderProps = {
  images: Slide[];
  className?: string;
  imageClassName?: string;
  intervalMs?: number;
};

const fallbackImage =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'><rect width='1200' height='800' fill='%23dbeafe'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%231d4ed8' font-family='Arial' font-size='42'>CompactSoft Preview</text></svg>";

export function AutoImageSlider({
  images,
  className = "",
  imageClassName = "object-cover",
  intervalMs = 2000
}: AutoImageSliderProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const safeImages = images.length
    ? images.map((image) => ({
        ...image,
        src: failedImages[image.src] ? fallbackImage : image.src
      }))
    : [{ src: fallbackImage, alt: "Placeholder image" }];

  useEffect(() => {
    if (paused || safeImages.length <= 1) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % safeImages.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [safeImages.length, intervalMs, paused]);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={safeImages[index]?.src}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.99 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            fill
            src={safeImages[index]?.src ?? fallbackImage}
            alt={safeImages[index]?.alt ?? "Placeholder image"}
            className={imageClassName}
            onError={() =>
              setFailedImages((current) => ({
                ...current,
                [images[index]?.src ?? ""]: true
              }))
            }
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {safeImages.map((image, imageIndex) => (
          <motion.button
            key={image.src}
            type="button"
            onClick={() => setIndex(imageIndex)}
            className={`theme-transition h-2.5 rounded-full ${
              imageIndex === index ? "w-8 bg-[var(--surface-strong)]" : "w-2.5 bg-[color:var(--surface-strong)]/50"
            }`}
            aria-label={`Show slide ${imageIndex + 1}`}
            whileHover={{ scale: 1.18 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 320, damping: 20 }}
          />
        ))}
      </div>
    </div>
  );
}
