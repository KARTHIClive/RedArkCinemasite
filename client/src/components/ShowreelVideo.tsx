import { useRef, useState } from "react";
import { Play, Volume2, VolumeX, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import showreelVideo from "@assets/RED_ARK_CINEMA_COLOUR_GRADE_1771307716023.mp4";

export default function ShowreelVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handlePlayWithAudio = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.play();
    setIsMuted(false);
    setIsPlaying(true);
    setHasInteracted(true);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
    setHasInteracted(true);
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-black overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide" data-testid="text-showreel-title">
            OUR COLOUR GRADING
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Experience the cinematic excellence of Red Ark Cinema
          </p>
        </div>
        <div className="relative rounded-md overflow-hidden group">
          <video
            ref={videoRef}
            src={showreelVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-auto object-cover"
            data-testid="video-showreel"
          />

          {!hasInteracted && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <button
                onClick={handlePlayWithAudio}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary/90 flex items-center justify-center transition-transform hover:scale-110"
                data-testid="button-play-audio"
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" />
              </button>
            </div>
          )}

          {hasInteracted && (
            <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                size="icon"
                variant="ghost"
                onClick={togglePlay}
                className="bg-black/50 backdrop-blur-sm text-white hover:bg-black/70"
                data-testid="button-toggle-play"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={toggleMute}
                className="bg-black/50 backdrop-blur-sm text-white hover:bg-black/70"
                data-testid="button-toggle-mute"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
