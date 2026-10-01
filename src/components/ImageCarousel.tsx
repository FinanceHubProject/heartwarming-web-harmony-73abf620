import { useCallback, useEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";
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
  const pointerStartX = useRef<number | null>(null);

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

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if ((event.target as Element).closest("button")) {
      return;
    }

    pointerStartX.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
    setPaused(true);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const startX = pointerStartX.current;
    pointerStartX.current = null;
    setPaused(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (startX === null) {
      return;
    }

    const distance = event.clientX - startX;
    if (Math.abs(distance) < 40) {
      return;
    }

    if (distance > 0) {
      showPrevious();
    } else {
      showNext();
    }
  };

  return (
    <div
      className={cn("group relative touch-pan-y overflow-hidden", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => {
        pointerStartX.current = null;
        setPaused(false);
      }}
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
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-plum-900/70 text-white opacity-100 shadow-lg backdrop-blur-sm transition hover:bg-plum-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:opacity-0 sm:focus-visible:opacity-100 sm:group-hover:opacity-100"
            aria-label="Show previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={showNext}
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-plum-900/70 text-white opacity-100 shadow-lg backdrop-blur-sm transition hover:bg-plum-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:opacity-0 sm:focus-visible:opacity-100 sm:group-hover:opacity-100"
            aria-label="Show next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1 rounded-full bg-plum-900/65 px-2 py-1 backdrop-blur-sm sm:bottom-4">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                )}
                aria-label={`Show image ${index + 1} of ${images.length}`}
                aria-current={index === activeIndex ? "true" : undefined}
              >
                <span
                  className={cn(
                    "h-2.5 w-2.5 rounded-full transition",
                    index === activeIndex ? "bg-white" : "bg-white/45 hover:bg-white/75",
                  )}
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
