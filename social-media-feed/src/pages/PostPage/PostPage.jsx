import classes from "./PostPage.module.css";
import { posts } from "../../data";
import { Post } from "../../components/Post/Post";
import { useEffect, useState } from "react";
import { useHistory, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
export const PostPage = () => {
    const { postId } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState();
    useEffect(() => {
        const newPost = posts.find((post) => post.id === parseInt(postId));
        if (!newPost
        ) {
            navigate("/not-found", { replace: true });
        }
        setPost(newPost);
        console.log(post);
    }, [postId, navigate]);

    if (!post) {
        return null;
    }
    return (
        <div style={{backroundColor: "#f5f5f5f5"}}>
            <div className={classes.PostPage}>
                <Post

                    key={post.id}
                    id={post.id}
                    image={post.picture}
                    username={post.username}
                    body={post.body}
                    date={post.time}
                    mode="comments"
                    comments={post.comments}
                />
            </div>
            <div className={classes.ButtonWrapper}>
            <button className={classes.ReturnButton} onClick={
                () => navigate({
                    pathname: "/"
                })}>
                Return to Post
            </button>
            </div>
        </div>
    );
}