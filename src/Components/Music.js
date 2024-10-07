import musicplay from "../assets/musicplay.svg";
import previous from "../assets/previous.svg";
import next from "../assets/next.svg";
import { useEffect, useRef, useState } from "react";
import pause from "../assets/pause.svg";
import { Millis_To_MinSec } from "../utils/constants";
import usePlayMusic from "../Hooks/useplaymusic";

const Music = ({ url, songname }) => {
  const refaudio = useRef(null); // Ref for the audio element
  const [isPlaying, setIsPlaying] = useState(false); // State for play/pause
  const [duration, setDuration] = useState(0); // Total duration of the audio
  const [currentTime, setCurrentTime] = useState(0); // Current time of the audio

  useEffect(() => {
    // Pause and reset the previous audio instance if it exists
    if (refaudio.current) {
      refaudio.current.pause();
      refaudio.current.currentTime = 0; // Reset the previous audio's currentTime to 0
    }

    // Create a new Audio instance
    refaudio.current = new Audio(url);

    // Load metadata (to get the duration)
    const handleLoadedMetadata = () => {
      setDuration(refaudio.current.duration * 1000); // Set the duration in milliseconds
    };

    // Update the current time during playback
    const handleTimeUpdate = () => {
      setCurrentTime(refaudio.current.currentTime * 1000); // Set current time in milliseconds
    };

    // Attach event listeners
    refaudio.current.addEventListener("loadedmetadata", handleLoadedMetadata);
    refaudio.current.addEventListener("timeupdate", handleTimeUpdate);

    // Cleanup the event listeners and pause the audio when switching tracks or unmounting
    return () => {
      if (refaudio.current) {
        refaudio.current.pause();
        refaudio.current.removeEventListener("loadedmetadata", handleLoadedMetadata);
        refaudio.current.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, [url]); // Effect runs whenever the URL changes
  // Handle play/pause toggle
  const ToggleMusic = () => {
    if (isPlaying)
    refaudio.current.pause();
    else
    refaudio.current.play();

    setIsPlaying(!isPlaying); // Toggle the play state
  };

  const HandlePrevious = ()=>{
    refaudio.current.currentTime = 0;
  }

  const HandleNext = ()=>{
    refaudio.current.currentTime = refaudio.current.duration;
  }

  return (
    <div className="flex justify-between items-center bg-slate-300 mx-4 px-5 py-3 my-4 rounded-lg">
      <div className="w-[30vw] text-xl">
        <p>{songname}</p>
      </div>
      <div className="flex gap-x-5 mx-auto w-[30vw]">
        <img className="w-[40px]" src={previous} alt="previous" onClick={HandlePrevious}/>
        {isPlaying ? (
          <img
            className="w-[45px]"
            src={pause}
            alt="pause"
            onClick={ToggleMusic}
          />
        ) : (
          <img
            className="w-[45px]"
            src={musicplay}
            alt="play"
            onClick={ToggleMusic}
          />
        )}
        <img className="w-[40px]" src={next} alt="next" onClick={HandleNext}/>
      </div>
      <div className="text-xl">
        {/* Display the current time and total duration */}
        <p>{Millis_To_MinSec(currentTime)} / {Millis_To_MinSec(duration)}</p>
      </div>
    </div>
  );
};

export default Music;
