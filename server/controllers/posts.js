const Post = require("../models/postMessage");
const mongoose = require("mongoose");
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  console.log("are you here");
  try {
    const post = req.body;
    const newPost = new Post(post);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
      return res.status(404).json({ msg: "No post with that id" });
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedPost);
  } catch (error) {
    res.json({ msg: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
      return res.status(404).json({ msg: "No post with that id" });
    await Post.findByIdAndDelete(req.params.id, req.body);
    res.json({ msg: "post deleted successfully" });
  } catch (error) {
    res.json({ msg: error.message });
  }
};

const likePost = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
      return res.status(404).json({ msg: "No post with that id" });
    const post = await Post.findById(req.params.id);
    console.log(post.likeCount);
    post.likeCount = post.likeCount + 1;
    console.log(post.likeCount);
    const likedPost = await post.save();
    res.json(likedPost);
  } catch (error) {
    res.json({ msg: error.message });
  }
};
module.exports = { getPosts, createPost, updatePost, deletePost, likePost };
