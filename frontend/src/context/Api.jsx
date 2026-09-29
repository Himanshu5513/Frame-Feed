import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const api = createContext();

const Api = (props) => {
  const [data, setData] = useState([""]);

  const server = async () => {
    const req = await fetch("http://localhost:3000/feed");
    const res = await req.json();
    console.log(res.userdata);
    setData(res.userdata);
  };

  useEffect(() => {
    server();
  }, []);

  return (
    <div>
      <api.Provider value={{ data, server }}>{props.children}</api.Provider>
    </div>
  );
};

export default Api;
