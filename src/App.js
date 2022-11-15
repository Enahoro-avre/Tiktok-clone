
import { useEffect, useState } from 'react';
import './App.css';
import Video from './Video';
import db from './firebase';
import { collection, getDocs } from 'firebase/firestore';

function App() {

  const [ videos , setVideos ] = useState([])

  useEffect(()=>{
    async function getVideos(db){
      // const videoCol = collection(db , 'videos')
      const videoDocs = getDocs(collection(db , 'videos'))
      const videoList = setVideos(videoDocs.forEach(doc => doc.data()))
      return videoList
    }

    getVideos(db)

  },[])
  console.log(videos)
  
  return (
    <div className="app">

      <div className='app__videos'>
        {videos.map(({ url , channel , description , song , likes , messages})=>(
          <Video
          url={url}
          channel ={channel}
          description={description}
          song={song}
          likes={likes}
          messages={messages}
          />
        ))}
        
      </div>
    </div>
  );
}

export default App;
