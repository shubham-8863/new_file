/* import React from 'react'

export const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-secondary-subtle w-full m-0">
  <div className="container-fluid">
  <img src="https://media-hosting.imagekit.io//e819ccb21aa64f50/IST_logo.jpg?Expires=1832272979&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=dnSLhmTOylkLybujAHjr5y6iyluYosT8Pf8TMRxa19DglPvpcfEhmU0QBkJvo8HRtdP3XOyDWJHKFAxyTUneVaMNA7VK-ybENU0PX32H45~0BVpN5zvvAD1cn06~~IGHfVhZpxg-uPW7c64vHehuJgLxEQBMaxYuWzxPKCnnM6yrkAf2QpZB~U9Jeq7kO19SiHNtrsuDs7M7kV-AC-dcciPlXG12a3zqvW0GmRie4FgWTmMwVX5VbcDJe86NWsCJj-dy1ThIniogF-ywLRX3pA-Axx9EQhqXimNYLaKR1hVOvDsA00eY6u84ihEgLoXUpRzsYMb3nfc6ETInbzuIHQ__" alt="Logo" width="30" height="30" className="d-inline-block align-text-top "/>
    <a className="navbar-brand mx-3 text-primary-emphasis" href="#">
        Image Style Transfer
        </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
       </ul> 
          
           <div className=" bg-slate-100 w-full h-16">
            <ul className='flex flex-row-reverse py-3 '>
                <li>
                <a className="my-3 mx-9 hover:text-blue-600" href="https://www.linkedin.com/in/shubham-saini-2203472b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkedin</a>
                </li>
                <li>
                    <a   className="my-3 mx-6 hover:text-blue-600" href="/grid">Grid</a>
                </li>
                <li>
                    <a  className="my-3 mx-6 hover:text-blue-600" href="/">Home</a>
                </li>
            </ul>
        </div>

           <ul className='font-extrabold'>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About </a>
            </li>
           </ul>
          
      
    </div>
  </div>
</nav>
    </div>
  )
}
 */




import React from 'react'
import { Link } from 'react-router'

export const Header = () => {
  return (
    <div>
        <div className=" bg-slate-100 w-full h-16">
            <ul className='flex flex-row py-3 '>
        <div className="">
        <img src="https://media-hosting.imagekit.io//e819ccb21aa64f50/IST_logo.jpg?Expires=1832272979&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=dnSLhmTOylkLybujAHjr5y6iyluYosT8Pf8TMRxa19DglPvpcfEhmU0QBkJvo8HRtdP3XOyDWJHKFAxyTUneVaMNA7VK-ybENU0PX32H45~0BVpN5zvvAD1cn06~~IGHfVhZpxg-uPW7c64vHehuJgLxEQBMaxYuWzxPKCnnM6yrkAf2QpZB~U9Jeq7kO19SiHNtrsuDs7M7kV-AC-dcciPlXG12a3zqvW0GmRie4FgWTmMwVX5VbcDJe86NWsCJj-dy1ThIniogF-ywLRX3pA-Axx9EQhqXimNYLaKR1hVOvDsA00eY6u84ihEgLoXUpRzsYMb3nfc6ETInbzuIHQ__" alt="Logo" width="30" height="30" className=" "/> </div>
             <a className="navbar-brand mx-3 text-primary-emphasis" href="#">
        Image Style Transfer
            </a>
                <li>
                    <a   className="my-3 mx-6 font-bold text-black  hover:bg-blue-300" href="/about"> About </a>
                </li>
                <li>
                    <a  className="my-3 mx-6 font-bold text-black hover:bg-blue-300" href="/"> Home</a>
                </li>
                
            </ul>
        </div>
        </div>
  )
}