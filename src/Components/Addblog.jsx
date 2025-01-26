import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Addblog = () => {
  return (
    <div className='w-screen flex items-center justify-center flex-col p-2.5 bg-transparent rounded-2xl'>
       <div className='max-w-[600px] w-full bg-amber-100  p-5 rounded-2xl border-2 border-amber-950'>
              <h1 className='text-center font-bold text-black text-3xl capitalize m-2'>add blog</h1>
      <TextField id="outlined-basic" label="Blog_Name" variant="outlined" className=' w-full bg-white border-none '  sx={{ marginBottom: 4 }}/>
      <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          className='w-full bg-white border-none'
          sx={{ marginBottom: 4}}
        />
      <TextField id="outlined-basic" label="Author-Name" variant="outlined" className=' w-full bg-white border-none'  sx={{ marginBottom: 4 }}  />
      <Button variant="outlined" className='flex items-center w-full justify-center font-bold' sx={{'&:hover': {
          backgroundColor: '#f59e0b', // amber-500 color
        },}}>Add blog</Button>
      </div>
    </div>
  )
}

export default Addblog
