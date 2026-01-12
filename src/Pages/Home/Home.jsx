import React from 'react'
import '../Home/Home.css'
import Button from '../../components/Button/Button'

const Home = () => {

  return (
    <div className='contein-home'>
      <div className="circle-5"></div>
      <div >
        <div className="circle-3"></div>
        <div className="circle-4"></div>
        <img className='img-home' src="./public/images/landing-page-girl.png" alt="Icon Home" />
      </div>
      <div className='text-home'> 
        <p className='title-home'>Feel The Music</p>
        <p>Stream over 20 thousand songs with one click</p>
        <Button fullWidth={false} />
      </div>
    </div>
  )
}

export default Home