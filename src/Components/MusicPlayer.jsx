import React, { useState } from "react";
import { IoIosPause, IoMdPlay } from "react-icons/io";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { TbArrowsShuffle } from "react-icons/tb";
import { TfiLoop } from "react-icons/tfi";
import { RefreshCwOff, Repeat1 } from "lucide-react";
import Draggable from "react-draggable";

  // Format time from seconds to "minutes:seconds" format
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };



const MusicPlayer = ({
  isPlaying,
  playSound,
  pauseSound,
  nextSong,
  previousSong,
  currentSong,
  currentTime,
  duration,
  seekTime,
  loopMode,
  setLoopMode,
}) => {
  const [clickedIcon, setClickedIcon] = useState(null);
  // const [isLooping, setIsLooping] = useState(false);
  // const [loopMode, setLoopMode] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);


  // Helper function to handle click and set the active icon
  const handleClick = (icon) => {
    setClickedIcon(icon);
    setTimeout(() => setClickedIcon(null), 200); // Reset after 200ms for the effect to disappear
  };

   // Toggle loop mode
   const toggleLoopMode = () => {
    // setIsLooping(!isLooping);
    setLoopMode((prevMode) => (prevMode + 1) % 3);
  };

  // Toggle shuffle mode
  const toggleShuffle = () => {
    setIsShuffling(!isShuffling);
  };

  // Handle progress bar click to seek
  const handleProgressClick = (event) => {
    const progressBar = event.currentTarget;
    const clickPosition = event.nativeEvent.offsetX;
    const progressBarWidth = progressBar.clientWidth;
    const newTime = (clickPosition / progressBarWidth) * duration;
    seekTime(newTime); // Call the seekTime function from props
  };

  return (
     
    <Draggable>
    <div className="music_player rounded-lg w-[284px] h-[376px] absolute bottom-4 right-3 py-2 flex flex-col justify-between bg-[#6B0000]  bg-opacity-50 backdrop-blur-lg z-0">
      <p className="now text-center text-white font-semibold">Now Playing</p>

       {/* Song Image */}
       <div className="flex justify-center mb-2">
        <img
          src={currentSong.image}
          alt={currentSong.title}
          className="w-60 h-48 object-cover rounded-lg"
        />
      </div>

      {/* Song Info */}
      <div className="text-center text-white mb-2">
        <p className="font-bold">{currentSong.title}</p>
        <p>{currentSong.artist}</p>
      </div>

       {/* Timer and Duration */}
       <div className="text-white flex justify-between items-center px-4 mb-2">
        <div>{formatTime(currentTime)}</div>
        <div
          className="relative flex-1 h-1 mx-2 cursor-pointer bg-gray-600 rounded"
          onClick={handleProgressClick}
        >
          <div
            className="absolute top-0 left-0 h-full bg-red-500 rounded"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>
        <div>{formatTime(duration)}</div>
      </div>

      {/* controls */}
      <div className="flex items-center justify-between px-4">
        {/* loop icon */}

<div onClick={() => { handleClick("loop"); toggleLoopMode(); }} className="cursor-pointer">
          {loopMode === 0 && <RefreshCwOff className="text-white w-7 h-7 px-1 rounded"  />} {/* no loop */}
          {loopMode === 1 && <Repeat1 className="text-white w-7 h-7 px-1 rounded" />} {/* Loop one */}
          {loopMode === 2 && <TfiLoop className=" text-white w-7 h-7 px-1  rounded" />} {/* Loop all */}
        </div>


        {/* previous icon */}
        <MdSkipPrevious
          onClick={() => {
            handleClick("previous");
            previousSong();
          }}
          className={`text-white w-8 h-8 cursor-pointer px-1 ${
            clickedIcon === "previous" ? "bg-[#480000] rounded" : ""
          }`}
        />

        {isPlaying ? (
          // pause icon
          <IoIosPause
            onClick={() => {
              handleClick("pause");
              pauseSound();
            }}
            className={`text-white w-8 h-8 cursor-pointer px-1 ${
              clickedIcon === "pause" ? "bg-[#480000] rounded" : ""
            }`}
          />
        ) : (
          // play icon
          <IoMdPlay
            onClick={() => {
              handleClick("play");
              playSound();
            }}
            className={`text-white w-8 h-8 cursor-pointer px-1 ${
              clickedIcon === "play" ? "bg-[#480000] rounded" : ""
            }`}
          />
        )}
        {/* next icon */}
        <MdSkipNext
          onClick={() => {
            handleClick("next");
            nextSong();
          }}
          className={`text-white w-8 h-8 cursor-pointer px-1 ${
            clickedIcon === "next" ? "bg-[#480000] rounded" : ""
          }`}
        />
        {/* shuffle icon */}
        <TbArrowsShuffle
           onClick={() => {
            handleClick("shuffle");
            toggleShuffle();
          }}
          className={`text-white w-7 h-7 px-1 cursor-pointer ${
            isShuffling ? "bg-[#480000] rounded" : ""
          }`}
        />
      </div>
    </div>
    </Draggable>
   
  );
};

export default MusicPlayer;
