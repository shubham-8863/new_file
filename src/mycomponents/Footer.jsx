import React from 'react'

export const Footer = () => {

    let footerstyle = {
        position:"relative",
        top:"200px"
    }
  return (
    <div>
        <footer className='bg-secondary text-light py-4 text-center h-24 ' style={footerstyle}>
            Copyright © Shubham | Image Style Transfer | 2025 | All rights reserved.
        </footer>
</div>
  )
}
