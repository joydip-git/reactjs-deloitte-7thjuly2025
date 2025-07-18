import { useRef } from "react"
import VideoPlayer from "./VideoPlayer"
import videojs from "video.js"
import './App.css'

const App = () => {

  const playerRef = useRef(null)
  const videoSrc = "http://localhost:3000/public/videos/785cef4d-f615-4baa-9853-1891bc1eb235/output.m3u8"

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: videoSrc,
      type: 'application/x-mpegURL'
    }]
  }

  const handlerPlayerReady = (player) => {
    playerRef.current = player

    playerRef.current.on('waiting', () => {
      videojs.log('player is waiting..')
    })

    playerRef.current.on('dispose', () => {
      videojs.log('player will be disposed')
    })
  }
  return (
    <div>
      <VideoPlayer options={videoJsOptions} onReady={handlerPlayerReady} />
    </div>
  )
}

export default App