import React, { useEffect } from "react";

import { io } from "socket.io-client";

const socket = io("http://localhost:8000"); 

const Home = () => {

  useEffect(() => {
    socket.on("connect", () => {
      console.log("hrllo");
    });

    socket.on("connect_error", (err) => {
      console.error("socket error:", err.message);
    });

    return () => {
      socket.off("connect");
      socket.off("connect_error");
    };
  }, []);

  return <div>hello</div>;
};

export default Home;
