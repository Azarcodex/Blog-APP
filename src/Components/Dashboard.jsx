import React, { useState } from 'react'
import axios from 'axios'
const Dashboard = () => {
const [value,setValue]=useState([])
axios.get("https://jsonplaceholder.typicode.com/posts")
.then((response)=>{
  setValue(response.data)
})
  return (
    <div className='grid grid-cols-5 gap-4 items-center my-10'>
      {value.map((val)=>{
        return(
      <div className='bg-amber-400 px-6 py-6 border-2 border-black h-96 rounded-2xl'>
        <div className='p-3 bg-amber-100 border-none rounded-2xl'>
        <h3 className='text-blue-800 font-semibold uppercase text-center '>Blog-<span className='text-black font-bold '>{val.id}</span></h3>
        </div>
        <h2 className='text-center text-fuchsia-900 font-bold m-1.5 underline'>{val.title}</h2>
        <p className='font-bold text-center text-white'>{val.body}</p>
      </div>
     );
      })}
    </div>
  )
}

export default Dashboard
