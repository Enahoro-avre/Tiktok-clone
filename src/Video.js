import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'



function Video({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares
}) {

  const [playing , setPlaying ] = useState(false)
  const VideoRef = useRef(null)

  const onVideoPress = () => {
    if(playing) {
      VideoRef.current.pause()
      setPlaying(false)
    } else {
      VideoRef.current.play()
      setPlaying(true)
    }
  
  }

  return (
    <div className='video'>
      <video className='video__player'
      loop
      onClick={onVideoPress}
      ref={VideoRef}
      src={url} alt="addison rea">

        </video>
      <VideoFooter channel={channel} description={description} song={song} />
        <VideoSidebar likes={likes} shares={shares} messages={messages} />

    </div>

    
  )
}

export default Video


  