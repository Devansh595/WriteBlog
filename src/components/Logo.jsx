import React from 'react'
import  Blog from '/src/assets/Blog.png'


function Logo({width = '90px'}) {
  return (
    <div>
      <img width={width} className='border-2 border-red-950 rounded-3xl'
      src={Blog} alt="logo" />
    </div>
  )
}

export default Logo