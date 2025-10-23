export default function StudioIntro() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <div className="md:col-span-3">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-wide leading-tight" data-testid="text-intro-title">
              WHERE VISION MEETS TECHNICAL EXCELLENCE
            </h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-base sm:text-lg text-white/90 leading-relaxed" data-testid="text-intro-description">
              Red Ark Cinema is your complete partner for professional film production and post-production. From pre-production planning to final distribution, we provide state-of-the-art equipment and expert services for films, documentaries, music albums, and short films.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
