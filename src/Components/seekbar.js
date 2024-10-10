const Seekbar = ({ currentTime, duration, onSeek }) => {
  // Calculate the percentage of the song that has been played
  const percentagePlayed = (currentTime / duration) * 100 || 0;

  // Handle manual seeking
  const handleSeek = (e) => {
    const seekPosition = e.nativeEvent.offsetX / e.currentTarget.offsetWidth;
    console.log(seekPosition)
    const newTime = seekPosition * duration;
    onSeek(newTime); // Pass the new time to the parent component
  };

  return (
    <div className="mx-8">
      <div
        className="h-[3px] rounded-lg border border-x-2 border-black relative cursor-pointer"
        onClick={handleSeek}
      >
        <div
          className="h-[9px] w-[9px] rounded-full bg-black absolute -top-[4px]"
          style={{ left: `${percentagePlayed}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Seekbar;
