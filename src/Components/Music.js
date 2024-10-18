import { useEffect, useRef, useState } from "react";
import musicplay from "../assets/musicplay.svg";
import previous from "../assets/previous.svg";
import next from "../assets/next.svg";
import pause from "../assets/pause.svg";
import { Millis_To_MinSec } from "../utils/constants";
import Seekbar from "./seekbar";
import Volume from "../assets/volume.svg";
import Mute from "../assets/mute.svg";

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

  const ToggleVolume = ()=>{
  }

  return (
    <div className="flex flex-col bg-slate-300 mx-4 px-5 py-3 my-4 rounded-lg">
      <div className="flex sm:flex-row flex-col justify-between items-center sm:items-start">
        <div className="w-[80vw] sm:w-[30vw] overflow-x-auto whitespace-nowrap scrollar-none text-md sm:text-lg lg:text-xl">
          <marquee>{songname}</marquee>
        </div>
        <div className="flex gap-x-5 mx-auto sm:w-[30vw] w-[80vw] items-center sm:items-start justify-center sm:justify-start">
          <img className="w-[30px] sm:w-[40px]" src={previous} alt="previous" onClick={HandlePrevious} />
          {isPlaying ? (
            <img className="w-[35px] sm:w-[45px]" src={pause} alt="pause" onClick={ToggleMusic} />
          ) : (
            <img className="w-[35px] sm:w-[45px]" src={musicplay} alt="play" onClick={ToggleMusic} />
          )}
          <img className="w-[30px] sm:w-[40px]" src={next} alt="next" onClick={HandleNext} />
        </div>
        <div className="text-md sm:text-lg lg:text-xl">
          <p>{Millis_To_MinSec(currentTime)} / {Millis_To_MinSec(duration)}</p>
        </div>
      </div>
      <div className=" mt-3">
      <Seekbar currentTime={currentTime} duration={duration} onSeek={handleSeek} />
        <div className="text-right mt-3 flex items-center justify-center sm:justify-normal">
          <label htmlFor="volume"><img src={volume != 0 ? Volume : Mute} className="px-3 w-[40px] sm:w-auto" alt="volume" onClick={ToggleVolume} /></label>
          <input
            id="volume"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-[100px]"
          />
          <span className="px-3">{Math.round(volume * 100)}</span>
        </div>
      </div>
    </div>
  );
};

export default Music;
