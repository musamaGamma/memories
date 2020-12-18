import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { TextField, Typography, Button, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createNewPost, updatePost } from "../../actions/postActions";
import { POST_CURRENT } from "../../constants/postConstants";



const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    tags: "",
    selectedFile: "",
    message: "",
  });


  const {post} = useSelector(state => state.post)

  //  const post= useSelector(state =>  ? state.posts.posts.find(post => post._id === ) : null)


  //get the styles
  const classes = useStyles();
     
  const dispatch = useDispatch();

 useEffect(() => {
 
  if(post) setPostData(post)
 }, [post]);
  //send data
  const handleSubmit = (e) => {
    e.preventDefault();
    if(post._id) {
      dispatch(updatePost(post._id, postData))
      
    }
    else {
      dispatch(createNewPost(postData));
      
    }
    clear()
    
  };
  const clear = () => {
     dispatch({type: POST_CURRENT, payload: {}})
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
 
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
        className={`${classes.form} ${classes.root}`}
      >
        <Typography variant="h6">Leave a memory</Typography>
        <TextField
          className={classes.fileInput}
          variant="outlined"
          name="creator"
          label="Creator"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
          fullWidth
        />
        <TextField
          className={classes.fileInput}
          variant="outlined"
          name="title"
          label="Title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          fullWidth
        />
        <TextField
          className={classes.fileInput}
          variant="outlined"
          name="message"
          label="Note"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
          fullWidth
        />
        <TextField
          className={classes.fileInput}
          variant="outlined"
          name="tags"
          label="Tags"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(",") })}
          fullWidth
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          ></FileBase>
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
         { post._id? "Update" : "submit"}
        </Button>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
