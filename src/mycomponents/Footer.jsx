import React from 'react'

export const Footer = () => {

    let footerstyle = {
        position:"relative",
        top:"550px"
    }
  return (
    <div>
        <footer className='bg-secondary text-light py-2  ' style={footerstyle}>
            Copyright © Shubham | Image Style Transfer | 2025 | All rights reserved.
        </footer>
</div>
  )
}
