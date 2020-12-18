import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { ThumbUpAlt, MoreHoriz, Delete } from "@material-ui/icons";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { POST_CURRENT } from "../../../constants/postConstants";
import { deletePost } from "../../../actions/postActions";
import { likePost } from "../../../actions/postActions";

const Post = ({ postInfo }) => {
  const [post, setPost] = useState(postInfo);

  const dispatch = useDispatch();

  const sendData = () => {
    dispatch({ type: POST_CURRENT, payload: post });
  };
  const handleDelete = () => {
    dispatch(deletePost(post._id));
  };

  const handleLike = () => {
    dispatch(likePost(post._id));
  };
  const { success, post: likedPost } = useSelector((state) => state.postLike);
  const { post: updatedPost } = useSelector((state) => state.postUpdate);

  useEffect(() => {
    if (updatedPost && postInfo._id === updatedPost._id) {
      setPost(updatedPost);
    }
    if (success && postInfo._id === likedPost._id) {
      setPost(likedPost);
    }
  }, [updatedPost, success]);

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small" onClick={sendData}>
          {" "}
          <MoreHoriz fontSize="default" />{" "}
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => (
            <span>{`#${tag}`}</span>
          ))}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={handleLike}>
          {" "}
          <ThumbUpAlt fontSize="small" />
          &nbsp; Like &nbsp;{post.likeCount}{" "}
        </Button>
        <Button size="small" color="primary" onClick={handleDelete}>
          {" "}
          <Delete fontSize="small" />
          Delete{" "}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
