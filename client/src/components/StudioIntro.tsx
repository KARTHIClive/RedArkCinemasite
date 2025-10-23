export default function StudioIntro() {
  return (
    <section className="py-20 md:py-24 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 tracking-wide" data-testid="text-intro-title">
              WHERE VISION MEETS TECHNICAL EXCELLENCE
            </h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-intro-description">
              Red Ark Cinema is your complete partner for professional film production and post-production. From pre-production planning to final distribution, we provide state-of-the-art equipment and expert services for films, documentaries, music albums, and short films.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
