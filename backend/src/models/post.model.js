const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  url: String,
  caption: String,
});

const postModel = mongoose.model("Upload", postSchema);

module.exports = postModel;
