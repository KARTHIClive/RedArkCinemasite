import { useRef, useEffect, useState } from "react";

export default function ShowreelVideo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ambientRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && videoRef.current && ambientRef.current) {
      videoRef.current.load();
      ambientRef.current.load();
      videoRef.current.play().catch(() => {});
      ambientRef.current.play().catch(() => {});
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-black overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide" data-testid="text-showreel-title">
            SHOW REELS
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Experience the cinematic excellence of Red Ark Cinema
          </p>
        </div>
        <div className="relative rounded-md">
          {isVisible && (
            <video
              ref={ambientRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-hidden="true"
              className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] object-cover blur-3xl opacity-60 scale-105 pointer-events-none"
              data-testid="video-ambient"
            >
              <source src="/videos/showreel.mp4" type="video/mp4" />
            </video>
          )}
          <div className="relative rounded-md overflow-hidden z-10">
            {isVisible && (
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-auto object-cover"
                data-testid="video-showreel"
              >
                <source src="/videos/showreel.mp4" type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
