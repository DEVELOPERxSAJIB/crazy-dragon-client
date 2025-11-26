import { useRef, useState } from "react";
import { Play, Pause, CirclePlay } from "lucide-react";

const VideoSlide = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div
      className="relative w-full mt-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* VIDEO */}
      <video
        ref={videoRef}
        src={src}
        style={{
          height: "470px",
          width: "100vw",
          objectFit: "cover",
        }}
        loop
        muted
        playsInline
      ></video>

      {/* OVERLAY - Visible only when NOT playing */}
      {!isPlaying && <div className="absolute inset-0 bg-black/40 z-20"></div>}

      {/* PLAY BUTTON (Shown when not playing) */}
      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 z-30 mx-auto my-auto flex flex-col gap-5 items-center justify-center text-white font-bold text-2xl cursor-pointer"
        >
          <CirclePlay size={80} className="drop-shadow-xl" />
          <h2 className="block">SEE HOW WE PREPARE YOUR MEAL</h2>
        </button>
      )}

      {/* PAUSE BUTTON (ONLY on hover while playing) */}
      {isPlaying && isHovered && (
        <button
          onClick={handlePause}
          className="absolute inline z-30 bottom-0 top-0 right-0 left-0 p-3 text-white"
        >
          <Pause size={60} className="absolute cursor-pointer mx-auto left-0 right-0 p-4 bg-black/60 rounded-full" />
        </button>
      )}
    </div>
  );
};

export default VideoSlide;
