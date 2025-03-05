import React from 'react';
import aeroplane from '../../assets/aeroplane.png';
import video from '../../assets/video.webm';

function Home() {
  return (
    <div className='home flex container'>
      <div className="mainText">
        <h1>Create Ever-lasting Memories With Us</h1>
      </div>
      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video'></video>
        </div>
        <img src={aeroplane} className='plane' alt="aeroplane" />
      </div>
    </div>
  );
}

export default Home;