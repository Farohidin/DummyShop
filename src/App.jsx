import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Components/Nav'

const App = () => {
   const [searchParams, setSearchParams] = useState("");
   
  return (
    <div className='wrapper'>
      <Nav setSearchParams={setSearchParams}/>
      <Outlet context={{ searchParams }}/>
    </div>
  )
}

export default App