import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Trends from '../Pages/Trends'
import Library from '../Pages/Library'
import Discover from '../Pages/Discover'
import Music from '../Pages/Music'
import Podcast from '../Pages/Podcast'
import Live from '../Pages/Live'
import Radio from '../Pages/Radio'

const AllRoutes = ({currentSong, songs, onSongSelect, onDragEnd}) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home currentSong={currentSong} songs={songs} onSongSelect={onSongSelect} onDragEnd={onDragEnd}/>}/>
        <Route path='/trends' element={<Trends/>}/>
        <Route path='/library' element={<Library/>}/>
        <Route path='/discover' element={<Discover/>}/>
        <Route path='/music' element={<Music/>}/>
        <Route path='/podcast' element={<Podcast/>}/>
        <Route path='/live' element={<Live/>}/>
        <Route path='/radio' element={<Radio/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes