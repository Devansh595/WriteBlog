import React from 'react'


function Logo({width = '90px'}) {
  return (
    <div>
      <img width={width} className='border-2 border-red-950 rounded-3xl'
      src={'src/assets/logo.png'} alt="logo" />
    </div>
  )
}

export default Logo