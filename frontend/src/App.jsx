import React from "react";
import { Route, Routes } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import Feed from "./components/Feed";

const App = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<CreatePost />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
