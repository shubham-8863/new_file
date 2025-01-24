import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  let logostyle = {
    "margin-left":"15px"}
  return (
    <div>
        <div className=" bg-slate-100 w-full h-16">
            <ul className='flex flex-row py-3 '>
        <div className="">
        <img src="https://media-hosting.imagekit.io//e819ccb21aa64f50/IST_logo.jpg?Expires=1832272979&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=dnSLhmTOylkLybujAHjr5y6iyluYosT8Pf8TMRxa19DglPvpcfEhmU0QBkJvo8HRtdP3XOyDWJHKFAxyTUneVaMNA7VK-ybENU0PX32H45~0BVpN5zvvAD1cn06~~IGHfVhZpxg-uPW7c64vHehuJgLxEQBMaxYuWzxPKCnnM6yrkAf2QpZB~U9Jeq7kO19SiHNtrsuDs7M7kV-AC-dcciPlXG12a3zqvW0GmRie4FgWTmMwVX5VbcDJe86NWsCJj-dy1ThIniogF-ywLRX3pA-Axx9EQhqXimNYLaKR1hVOvDsA00eY6u84ihEgLoXUpRzsYMb3nfc6ETInbzuIHQ__" alt="Logo" width="30" height="30" className="h-9 w-9 " style={logostyle}/> </div>
             <Link className="font-extrabold font size-52 mx-2 text-primary-emphasis hover:text-blue-500" to="#">
        Image Style Transfer
            </Link>
                <li>
                    <Link  className="my-3 mx-6  text-black hover:bg-blue-100" to="/"> Home</Link>
                </li>
                <li>
                    <Link   className="my-3 mx-6  text-black  hover:bg-blue-100" to="/about"> About </Link>
                </li>
                
            </ul>
        </div>
        </div>
  )
}