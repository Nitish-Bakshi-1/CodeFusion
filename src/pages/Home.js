import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="logo">codefusion</div>
        <h4>Paste invitaion ROOM ID</h4>
        <div className="input-container">
          <input type="text" placeholder="ROOM ID" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="btn-div">
          <button className="btn">click</button>
        </div>
        <h5>
          if you dont have a room <a href="#">CREATE</a>
        </h5>
      </motion.div>
    </div>
  );
};

export default Home;
