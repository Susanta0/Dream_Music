import React from 'react'
import { PiMusicNotesSimpleFill } from 'react-icons/pi'
import musicBet from "../assets/music_bet_animation.gif"
import musicBet2 from "../assets/icons8-audio-wave -Photoroom.png"
import { Droppable, Draggable, DragDropContext } from "react-beautiful-dnd";
import { TbDragDrop2 } from 'react-icons/tb';

const Home = ({currentSong, songs, onSongSelect, onDragEnd}) => {
  const style2={
    background: "linear-gradient(90deg, rgba(202,0,0,1) .5%, rgba(82,0,0,1) .5%)"
  }

  return (
    <>
    <div className='flex justify-center'>
   <img className='w-[650px] h-60 bg-cover rounded-3xl b_i' src={currentSong.image} alt="" />
  </div>
  <div className="mt-10">
    <div className='px-24 flex justify-between items-center p_s'>
      <p className='text-white font-medium'>Popular</p>
      <p className='text-white font-medium'>See All</p>
    </div>
    
<DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId="songs">
    {(provided) => (
  <table className="w-full" ref={provided.innerRef} {...provided.droppableProps}>
          <thead className=''>
            <tr className="flex justify-between p-2 pl-24 text-white">
              <th className="w-8 text-left">#</th>
              <th className="w-24 text-left"></th>
              <th className="flex-1 text-left">TITLE</th>
              <th className="w-20 text-left">PLAYING</th>
              <th className="w-20 text-left">TIME</th>
              <th className="w-40 text-left">ALBUM</th>
            </tr>
          </thead>
          <div className=" t_b_h hide-scrollbar overflow-auto max-h-[279px]">

          <tbody>
            {songs.map((song, index) => (
              <Draggable key={song.id} draggableId={String(song.id)} index={index}>
                    {(provided) => (
              <tr
              ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
              key={index}
              className=" song-item cursor-pointer flex justify-between items-center p-2 pl-24 text-white" 
              onClick={() => onSongSelect(index)}
              style={currentSong === song ? style2 : {}}
              >
                {/* <TbDragDrop2 {...provided.dragHandleProps}/> */}
                <td className="w-8"> {currentSong === song ? <PiMusicNotesSimpleFill/> : index + 1}</td>
                <td className="w-24">
                  <img src={song.image} alt={song.title} className="w-12 h-12 object-cover" />
                </td>
                <td className="flex-1">{song.title}</td>
                <td className="w-20">
                  {currentSong === song ? <img className='w-6 h-6' src={musicBet} alt="music_bet_gif" /> : <img className='w-6 h-6' src={musicBet2} alt="music_bet_gif" />}
                </td>
                <td className="w-20">{song.time}</td> 
                <td className="w-40">{song.artist}</td>
              </tr>
              )}
              </Draggable>
            ))}
            {provided.placeholder}
          </tbody>
           </div>
        </table>
          )}
        </Droppable>
        </DragDropContext>
    </div>
    </>
  )
}

export default Home


