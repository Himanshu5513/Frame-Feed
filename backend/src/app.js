const express = require("express");
const postModel = require("./models/post.model");
const multer = require("multer");
const upload = require("./services/post.service");
const cors = require("cors");

const app = express();
app.use(cors());
const readImg = multer({ storage: multer.memoryStorage() });
app.use(express.json());

app.post("/post", readImg.single("url"), async (req, res) => {
  const data = await req.body;
  const url = await upload(req.file.buffer);
  try {
    const userData = await postModel.create({
      url: url.url,
      caption: data.caption,
    });
    res.status(201).json({
      msg: "Post Created Successfully",
      userData,
    });
  } catch (error) {
    res.status(400).json({
      msg: "Bad Request",
    });
  }
});

app.get("/feed", async (req, res) => {
  try {
    const userData = await postModel.find();
    res.status(200).json({
      msg: "Post Fetched",
      userdata: userData,
    });
  } catch (error) {
    res.status(404).json({
      msg: "No Posts Found",
    });
  }
});

module.exports = app;
