import classes from "./FeedPage.module.css";
import { posts } from "../../data";
import { Post } from "../../components/Post/Post";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
export const FeedPage = () => {
    const [params, setParams] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    
    const [showPosts, setShowPosts] = useState(posts);

    useEffect(() => {
        if (searchParams.get("string") === null) {
            setShowPosts(posts);
        }
        else {
            setShowPosts(posts.filter(
                (post) => {
                    return (post.username.toLowerCase().includes(searchParams.get("string").toLowerCase())
                        || post.body.toLowerCase().includes(searchParams.get("string").toLowerCase()))
                }
            ))
        }
    }, [searchParams])


    return (
        <div>
            <div
                className={classes.CommentCount}>
                Found {showPosts.length} posts {searchParams.get("string") ? "including " + searchParams.get("string") + " in the body or username" : null}
            </div>
            <div className={classes.FeedPage}>
                {showPosts.map((post) => {
                    return (
                        <Post
                            key={post.id}
                            id={post.id}
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
        </div>
    );
}
