import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
  };
  return (
    <div className="home">
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="logo">codefusion</div>
        <h4>Paste invitaion/ ROOM ID</h4>
        <div className="input-container">
          <input
            type="text"
            placeholder="ROOM ID"
            onChange={(e) => {
              setRoomId(e.target.value);
            }}
            value={roomId}
          />
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
          />
        </div>
        <div className="btn-div">
          <button className="btn">unite</button>
        </div>
        <h5>
          in case you dont have a room{" "}
          <a className="createRoomBtn" onClick={createNewRoom} href="">
            CREATE
          </a>
        </h5>
      </motion.div>
      <h4 className="homeFooter">
        built by
        <a
          href="https://github.com/Nitish-Bakshi-1"
          alt="github"
          target="_blank"
        >
          <FaGithub className="gitIcon" />
        </a>
      </h4>
    </div>
  );
};

export default Home;
