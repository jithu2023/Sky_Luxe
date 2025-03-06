import React from 'react'
import gridImage from '../../assets/gridImage.png'

function Support() {
  return (
    <div className='support container section'>

      <div className="sectionContainer">
        <div className="tittlesDiv">
        <small>
          travel support
        </small>
        <h2>plan your travel with confidence
        </h2>
        <p>Find help with booking and travel plans, see what to expect along the journey</p>
        </div>
        <div className="infoDiv grid">
          <div className="textDiv grid">

            <div className="singleInfo">
              <span className='number'>1</span>
              <h4>Travel requirement for Dubai</h4>
              <p>Find help with booking and travel plans, see what to expect along the journey to your Fav Destinaion!</p>
              </div>
            <div className="singleInfo ">
              <span className='number colorOne'>2</span>
              <h4>Chaffeur service's at your arrival</h4>
              <p>Find help with booking and travel plans, see what to expect along the journey to your Fav Destinaion!</p>
              </div>
            <div className="singleInfo ">
              <span className='number colorTwo'>3</span>
              <h4>Multi-Risk travel Insurance</h4>
              <p>Find help with booking and travel plans, see what to expect along the journey to your Fav Destinaion!</p>
              </div>
      


          </div>
           <div className="imgDiv">
            <img src={gridImage}/>
           </div>

        </div>
      </div>
    </div>
  )
}

export default Support