import React, { useState } from 'react'
import './VideoSidebar.css'
import Favourite from '@mui/icons-material/Favorite'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Message from '@mui/icons-material/Message'
import Share from '@mui/icons-material/Share'

function VideoSidebar({likes , shares , messages}) {

    const [ liked , setLiked] = useState(true)



  return (
    <div className='videoSidebar'>
       <div className='videoSidebar__button'>
        {liked ? <Favourite fontSize='large' onClick={(e)=> setLiked(false)}/>:<FavoriteBorder onClick={(e)=> setLiked(true)}/>}
        <p>{liked ? likes + 1 : likes}</p>
       </div>

       <div  className='videoSidebar__button'>
        <Message/>
        <p>{messages}</p>
       </div>

       <div className='videoSidebar__button'>
        <Share/>
        <p>{shares}</p>
       </div>
    </div>
  )
}

export default VideoSidebar