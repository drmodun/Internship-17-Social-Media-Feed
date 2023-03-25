import classes from "./FeedPage.module.css";
import { posts } from "../../data";
import { Post } from "../../components/Post/Post";
import { useState } from "react";
import { useHistory } from "react-router-dom";
export const FeedPage = () => {
    return (
        <div className={classes.FeedPage}>
            {posts.map((post) => {
                return (
                    <Post
                        key={post.id}
                        id = {post.id}
                        image={post.picture}
                        username={post.username}
                        body={post.body}
                        date={post.time}
                        mode="default"
                        comments={post.comments}
                    />
                );
            }
            )}
        </div>
    );
}
