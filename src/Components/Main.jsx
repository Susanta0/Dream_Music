import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar/Navbar";
import AllRoutes from "../Routes/AllRoutes";
import MusicPlayer from "./MusicPlayer";
import { initialSongs } from "../db/dbStore";

import { Howl, Howler } from "howler";

const Main = () => {



  const [songs, setSongs] = useState(initialSongs);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loopMode, setLoopMode] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const soundRef = useRef(null);


  // Handle reordering of the songs list
  const onDragEnd = (result) => {
    if (!result.destination) return; // If dropped outside the list

    const reorderedSongs = Array.from(songs);
    const [movedSong] = reorderedSongs.splice(result.source.index, 1);
    reorderedSongs.splice(result.destination.index, 0, movedSong);

    setSongs(reorderedSongs);
    // setSongs([...reorderedSongs]);

    // Update the currentIndex if the dragged song was the current song
    const newIndex = reorderedSongs.findIndex((song) => song.id === songs[currentIndex].id);
    setCurrentIndex(newIndex);
  };



  // Create or update the Howl instance only when currentIndex changes
  useEffect(() => {
    if (soundRef.current) {
      soundRef.current.unload(); // Unload the previous sound
    }

    soundRef.current = new Howl({
      src: [songs[currentIndex].src],
      onend: () => handleNextSong(),
      onload: () => {
        setDuration(soundRef.current.duration()); // Set song duration
      },
    });

    // Automatically play the song only when isAutoPlay is true
    if (isAutoPlay) {
      soundRef.current.play();
      setIsPlaying(true);
      setIsAutoPlay(false); // Reset auto-play flag after starting playback
    }

    setCurrentTime(0);

    // Cleanup on component unmount
    return () => {
      soundRef.current.unload();
    };
  }, [currentIndex]);



  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => setCurrentTime(soundRef.current.seek()), 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const playSound = () => {
    soundRef.current.play();
    setIsPlaying(true);
  };
  const pauseSound = () => {
    soundRef.current.pause();
    setIsPlaying(false);
  };


  // Set up interval to update currentTime  
  // useEffect(() => {
  //   let interval = null;

  //   if (isPlaying) {
  //     interval = setInterval(() => {
  //       setCurrentTime(soundRef.current.seek());
  //     }, 1000);
  //   } else if (!isPlaying && interval) {
  //     clearInterval(interval);
  //   }

  //   return () => clearInterval(interval);
  // }, [isPlaying]);

  // Play song
  // const playSound = () => {
  //   if (!isPlaying) {
  //     soundRef.current.play();
  //     setIsPlaying(true);
  //   }
  // };

  // // Pause song
  // const pauseSound = () => {
  //   if (isPlaying) {
  //     soundRef.current.pause();
  //     setIsPlaying(false);
  //   }
  // };


  const handleNextSong = () => {
    setIsAutoPlay(true);
    if (loopMode === 1) {
      // Loop one - replay the same song
      soundRef.current.stop();
      soundRef.current.play();
    } else if (loopMode === 2) {
      // Loop all - go to next song in the list, or loop back to the start
      setCurrentIndex((currentIndex + 1) % songs.length);
    } else {
      // No loop - go to next song, or stop if at the end
      if (currentIndex < songs.length - 1) {  
        setCurrentIndex(currentIndex + 1);
      } else {
        setIsPlaying(false); // Stop if it's the last song
      }
    }
  };

  // Navigate to the previous song
  const handlePreviousSong = () => {
    setIsAutoPlay(true);
    setCurrentIndex((currentIndex - 1 + songs.length) % songs.length);
    // setCurrentTime(0);
  };

   // Function to seek to a specific time
   const seekTime = (newTime) => {
    if (soundRef.current) {
      soundRef.current.seek(newTime);
      setCurrentTime(newTime);
    }
  };

   // Handle song selection
   const handleSongSelect = (index) => {
    setCurrentIndex(index); // Update currentIndex to the selected song
    setIsPlaying(true); // Play the selected song
    setIsAutoPlay(true) // Trigger autoplay after selection
  };

  return (
    <div id="backgroud" className="w-3/4 pt-8 ">
      <Navbar />

      <div className="max-w-[52em] mt-8">
        <AllRoutes
        currentSong={songs[currentIndex]} 
        songs={songs} 
        onSongSelect={handleSongSelect}
        onDragEnd={onDragEnd}
        />
      </div>

      <MusicPlayer
        isPlaying={isPlaying}
        playSound={playSound}
        pauseSound={pauseSound}
        nextSong={handleNextSong}
        previousSong={handlePreviousSong}
        currentSong={songs[currentIndex]}
        currentTime={currentTime}
        duration={duration}
        seekTime={seekTime}
        loopMode={loopMode}
        setLoopMode={setLoopMode}
      />
    </div>
  );
};

export default Main;

  