import React from 'react'
import './Discover.css'

const Discover = () => {
  return (
    <div className='discover-contein'>
      <div>
        <h2>Discover new music</h2>
        <div className='logos-discover'>
          <div>
          <img src="../../public/images/microphone.svg" alt="" />
          <h4>Charts</h4>
          </div>
          <div>
          <img src="../../public/images/albums.svg" alt="logo-more" />
          <h4>Albums</h4>
          </div>
          <div>
          <img src="../../public/images/more.svg" alt="" />
          <h4>More</h4>
          </div>
        </div>
        <p>By joining you can benefit by listening to the latest albums released.</p>
      </div>
      <div className='img-discover'>
        <img src="../../public/images/covers.jpg" alt="logo-discover" />
      </div>
    </div>
  )
}

export default Discover