import classes from "./PostPage.module.css";
import { posts } from "../../data";
import { Post } from "../../components/Post/Post";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
export const PostPage = () => {
    const { postId } = useParams();
    const post = posts.find((post) => post.id === parseInt(postId));
    return (
        <div className={classes.PostPage}>
            <Post

                key={post.id}
                id = {post.id}
                image={post.picture}
                username={post.username}
                body={post.body}
                date={post.time}
                mode="comments"
                comments={post.comments}
            />
        </div>
    );
}