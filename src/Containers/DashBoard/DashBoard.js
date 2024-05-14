import React from 'react'
import Sidebar from './../../Components/SideBar/SideBar';

const DashBoard = () => {
  return (
    <>
    <div style={{
      display:"flex",
     gap:"10px",
      height:"100vh",
      backgroundColor:"#f5f5f5"
    }}>

<div>
  <Sidebar/>
</div>


<div>
  <h1>DashBoard</h1>
</div>
    </div>

      
    </>
  )
}

export default DashBoard
