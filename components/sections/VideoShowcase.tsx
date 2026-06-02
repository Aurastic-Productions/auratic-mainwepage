export default function VideoShowcase() {
  return (
    <section className="section-y">
      <div className="wrap">
        <div className="relative aspect-video overflow-hidden border border-white/[0.22] bg-deep rounded-[24px]">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            // @ts-ignore iOS
            webkit-playsinline="true"
            preload="none"
          >
            <source src="/videos/AU_INTRO_EXTREME.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
