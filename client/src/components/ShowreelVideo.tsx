import showreelVideo from "@assets/RED_ARK_CINEMA_COLOUR_GRADE_1771307716023.mp4";

export default function ShowreelVideo() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide" data-testid="text-showreel-title">
            OUR COLOUR GRADING
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Experience the cinematic excellence of Red Ark Cinema
          </p>
        </div>
        <div className="relative rounded-md overflow-hidden aspect-video">
          <video
            src={showreelVideo}
            controls
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            data-testid="video-showreel"
          />
        </div>
      </div>
    </section>
  );
}
