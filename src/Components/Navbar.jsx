import React, { useState } from 'react'
import '../active.css'
import blog_img from '../images/blog.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
 const [isActive,Makeactive]=useState("btn1")
 const Active=(para)=>{
  Makeactive(para)
 }
  return (
    <div>
      <header className='w-full flex items-center justify-between bg-emerald-300' >
       <div className='max-w-[200px] w-full flex items-center justify-between'>
             <img src={blog_img} alt="blog-img" width="80px" />
             <h2 className='font-poppins font-bold text-2xl'>Blog-<span className='text-blue-950 font-bold'>App</span></h2>
             </div>
            <div className=''>
              <ul className=''>
                <Link to={'/'}>
                     <li className={`inline-block m-10 text-xl text-amber-50 font-black cursor-pointer transition duration-300 ease-in  hover:text-black ${isActive==="btn1"?"text-black":"text-amber-50"}`} onClick={()=>Active("btn1")}>Home</li>
                     </Link>
                     <Link to={'addblog'}>
                     <li className={`inline-block m-10 text-xl text-amber-50 font-black cursor-pointer transition duration-300 ease-in hover:text-black ${isActive==="btn2"?"text-black":"text-amber-50"}`} onClick={()=>Active("btn2")}>add blog</li>
                     </Link>
              </ul>
            </div>
      </header>
    </div>
  )
}

export default Navbar
