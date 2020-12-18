const express = require("express")
const router = express.Router()
const {getPosts, createPost, updatePost, deletePost, likePost} = require("../controllers/posts")
router.get("/", getPosts)
router.post("/", createPost)
router.put("/:id", updatePost)
router.put("/:id/likepost", likePost)
router.delete("/:id", deletePost)


module.exports = router