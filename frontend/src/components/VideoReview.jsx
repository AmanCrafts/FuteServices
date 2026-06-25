import { useState } from 'react';
import SectionBlock from './SectionBlock';

const POSTER =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&h=800&fit=crop';
const SAMPLE_VIDEO =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4';

const VideoReview = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-white pb-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBlock number="03" title="Video Review" id="video-review" showDivider={false}>
          <div className="video-frame-shell relative max-w-4xl">
            {/* Top-left tab */}
            <div
              className="absolute -top-3 left-14 sm:left-20 w-20 sm:w-28 h-5 sm:h-6 bg-white rounded-t-2xl z-10 pointer-events-none"
              aria-hidden="true"
            />
            {/* Bottom-right tab */}
            <div
              className="absolute -bottom-3 right-14 sm:right-20 w-20 sm:w-28 h-5 sm:h-6 bg-white rounded-b-2xl z-10 pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative rounded-[2rem] overflow-hidden aspect-[16/10] bg-slate-100">
              {playing ? (
                <video
                  src={SAMPLE_VIDEO}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                  onEnded={() => setPlaying(false)}
                >
                  <track kind="captions" />
                </video>
              ) : (
                <>
                  <img
                    src={POSTER}
                    alt="Sky Heights Avenue property preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    aria-label="Play video review"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold tracking-widest text-brand-dark">
                      PLAY
                    </span>
                  </button>
                </>
              )}
            </div>
          </div>
        </SectionBlock>
      </div>
    </section>
  );
};

export default VideoReview;
