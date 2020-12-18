import axios from "axios";

const url = "http://localhost:5000/posts";

export const getPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);
export const patchPost = (id, post) => axios.put(url + `/${id}`, post);

export const removePost = (id, post) => axios.delete(url + `/${id}`);

export const likePost = (id) => axios.put(url + `/${id}/likepost`);
