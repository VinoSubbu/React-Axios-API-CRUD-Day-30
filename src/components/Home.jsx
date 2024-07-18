import React from 'react';
import '../assets/styles/common.css'


function Home() {
  return (
    <div className='home-welcome' style={{display:'flex' , flexDirection:'column' , gap:'2rem'}}>
      <h1 >Welcome to the Axios CRUD Task application.</h1>
      <h2>To see user list visit <a href="/dashboard"><button style={{backgroundColor:'green' , padding:'7px 10px' , color:'white' , borderRadius:'7px' , margin:'0 5px'}}>Dashboard</button></a></h2>
    </div>
  );
}

export default Home;
