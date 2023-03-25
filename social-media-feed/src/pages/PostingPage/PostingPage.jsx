import { formControlClasses } from "@mui/material";
import classes from "./post.module.css"
import { useState } from "react";
import {posts} from "../../data"
export const PostPage = () => {
    const [username, setUsername] = useState("");
    const [body, setBody] = useState("");
    const [picture, setPicture] = useState("");
    function handleSubmit(event) {
        event.preventDefault();
        if (username.trim() === "" || body.trim() === "" || picture.trim() === "") {
            console.log("Wrong input")
            return;
        }
        let newPost = {
            id: posts.length + 1,
            username: username,
            body: body,
            picture: picture,
            time: new Date(),
            comments: []
        }
        setUsername("");
        setBody("");
        setPicture("");
        posts.push(newPost);
    }
    return (
        <form
            className={classes.form}
            onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input id="username" name="username" type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
            <label htmlFor="body">Body</label>
            <input id="body" name="body" type="text" value={body} onChange={(e)=>{setBody(e.target.value)}}/>
            <label htmlFor="picture (url)" >Picture</label>
            <input id="picture" name="picture" type="text" value={picture} onChange={(e)=>{setPicture(e.target.value)}}/>
        </form>

    );
}
