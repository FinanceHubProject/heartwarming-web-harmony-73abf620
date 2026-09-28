import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CarouselImage {
  src: string;
  alt: string;
  position?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  label: string;
  className?: string;
  imageClassName?: string;
  intervalMs?: number;
  priority?: boolean;
}

export default function ImageCarousel({
  images,
  label,
  className,
  imageClassName,
  intervalMs = 5000,
  priority = false,
}: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (
      paused ||
      images.length < 2 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timer = window.setInterval(showNext, intervalMs);
    return () => window.clearInterval(timer);
  }, [images.length, intervalMs, paused, showNext]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div
      className={cn("group relative overflow-hidden", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {images.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt={index === activeIndex ? image.alt : ""}
          aria-hidden={index !== activeIndex}
          loading={priority && index === 0 ? "eager" : "lazy"}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            imageClassName,
            image.position,
            index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0",
          )}
        />
      ))}

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-plum-900/70 text-white opacity-100 shadow-lg backdrop-blur-sm transition hover:bg-plum-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:opacity-0 sm:focus-visible:opacity-100 sm:group-hover:opacity-100"
            aria-label="Show previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={showNext}
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-plum-900/70 text-white opacity-100 shadow-lg backdrop-blur-sm transition hover:bg-plum-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:opacity-0 sm:focus-visible:opacity-100 sm:group-hover:opacity-100"
            aria-label="Show next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-plum-900/65 px-3 py-2 backdrop-blur-sm">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition",
                  index === activeIndex ? "bg-white" : "bg-white/45 hover:bg-white/75",
                )}
                aria-label={`Show image ${index + 1} of ${images.length}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
