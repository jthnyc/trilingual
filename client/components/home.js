import React from 'react'
// import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <div className="intro-video">
        <iframe
          src="https://player.vimeo.com/video/247915382?loop=1&title=0&byline=0&portrait=0"
          width="1690"
          height="1080"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default Home

//before loop
// autoplay=1&
