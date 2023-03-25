import classes from "./PostPage.module.css";
import { posts } from "../../data";
import { Post } from "../../components/Post/Post";
import { useState } from "react";
import { useHistory } from "react-router-dom";
export const PostPage = (props) => {
    return (
        <div className={classes.PostPage}>
            <Post
                key={props.post.id}
                image={props.post.picture}
                username={props.post.username}
                body={props.post.body}
                date={props.post.time}
                mode="comments"
                comments={props.post.comments}
            />
        </div>
    );
}