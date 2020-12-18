import React, { useEffect } from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getPostList } from "../../actions/postActions";
import { CircularProgress, Grid } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const Posts = ({ setCurrentId }) => {
  const classes = useStyles();

  //get post data from the store
  const { loading, posts, error } = useSelector((state) => state.posts);

  const { success: successDelete } = useSelector((state) => state.postDelete);
  const { success } = useSelector((state) => state.postCreate);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostList());
  }, [dispatch, success, successDelete]);
  console.log(posts);
  return loading ? (
    <CircularProgress />
  ) : error ? (
    <Alert severity="error">{error}</Alert>
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing="3"
    >
      {posts.map((post) => (
        <Grid key={post.id} item xs={12} sm={6} md={6}>
          <Post setCurrentId={setCurrentId} postInfo={post} />{" "}
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
