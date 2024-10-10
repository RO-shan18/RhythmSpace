import { useEffect, useRef, useState } from "react";
import musicplay from "../assets/musicplay.svg";
import previous from "../assets/previous.svg";
import next from "../assets/next.svg";
import pause from "../assets/pause.svg";
import { Millis_To_MinSec } from "../utils/constants";
import Seekbar from "./seekbar";

const Music = ({ url, songname }) => {
  const refaudio = useRef(null); // Ref for the audio element
  const [isPlaying, setIsPlaying] = useState(false); // State for play/pause
  const [duration, setDuration] = useState(0); // Total duration of the audio in ms
  const [currentTime, setCurrentTime] = useState(0); // Current time of the audio in ms
  const [volume, setVolume] = useState(1); // Volume state (default is 100%)

  useEffect(() => {
    if (refaudio.current) {
      refaudio.current.pause();
      refaudio.current.currentTime = 0; // Reset the previous audio's currentTime to 0
    }

    refaudio.current = new Audio(url);

    const handleLoadedMetadata = () => {
      setDuration(refaudio.current.duration * 1000); // Set duration in milliseconds
    };

    const handleTimeUpdate = () => {
      setCurrentTime(refaudio.current.currentTime * 1000); // Set current time in milliseconds
    };

    refaudio.current.addEventListener("loadedmetadata", handleLoadedMetadata);
    refaudio.current.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      if (refaudio.current) {
        refaudio.current.pause();
        refaudio.current.removeEventListener("loadedmetadata", handleLoadedMetadata);
        refaudio.current.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, [url]);

  const ToggleMusic = () => {
    if (isPlaying) refaudio.current.pause();
    else refaudio.current.play();
    setIsPlaying(!isPlaying);
  };

  const HandlePrevious = () => {
    refaudio.current.currentTime = 0; // Reset audio to start
  };

  const HandleNext = () => {
    refaudio.current.currentTime = refaudio.current.duration; // Jump to the end of the song
  };

  // Handle manual seeking
  const handleSeek = (newTime) => {
    refaudio.current.currentTime = newTime / 1000; // Set new time in seconds
    setCurrentTime(newTime); // Update the current time state
  };

  // Handle volume change
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume); // Update volume state
    refaudio.current.volume = newVolume; // Set the audio element's volume
  };

  return (
    <div>
      <div className="flex justify-between items-center bg-slate-300 mx-4 px-5 py-3 my-4 rounded-lg">
        <div className="w-[30vw] text-xl">
          <p>{songname}</p>
        </div>
        <div className="flex gap-x-5 mx-auto w-[30vw]">
          <img className="w-[40px]" src={previous} alt="previous" onClick={HandlePrevious} />
          {isPlaying ? (
            <img className="w-[45px]" src={pause} alt="pause" onClick={ToggleMusic} />
          ) : (
            <img className="w-[45px]" src={musicplay} alt="play" onClick={ToggleMusic} />
          )}
          <img className="w-[40px]" src={next} alt="next" onClick={HandleNext} />
        </div>
        <div className="text-xl">
          <p>{Millis_To_MinSec(currentTime)} / {Millis_To_MinSec(duration)}</p>
        </div>
      </div>

      {/* Seekbar for progress */}
      <Seekbar currentTime={currentTime} duration={duration} onSeek={handleSeek} />

      {/* Volume control slider */}
      <div className="flex items-center gap-2 mt-4">
        <label htmlFor="volume">Volume: </label>
        <input
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-[200px]"
        />
        <span>{Math.round(volume * 100)}%</span>
      </div>
    </div>
  );
};

export default Music;
