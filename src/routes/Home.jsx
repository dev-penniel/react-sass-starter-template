import React from 'react'
import { images } from '../constants'

function Home() {
  return (
    <div>
        <h1>Home Page</h1>
        <img src={images.image} alt="" />
    </div>
  )
}

export default Home