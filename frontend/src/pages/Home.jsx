// import React, { useEffect } from "react";

// // just for testing socket connection
// // npm i hana la naya package xha


// import { io } from "socket.io-client";

// const socket = io("http://localhost:8000"); 

// const Home = () => {

//   useEffect(() => {
//     socket.on("connect", () => {
//       console.log("hrllo");
//     });

//     socket.on("connect_error", (err) => {
//       console.error("socket error:", err.message);
//     });

//     return () => {
//       socket.off("connect");
//       socket.off("connect_error");
//     };
//   }, []);

//   return <div>hello</div>;
// };

// export default Home;

import React from 'react'

const Home = () => {
  return (
    <div>
      
    </div>
  )
}

export default Home
