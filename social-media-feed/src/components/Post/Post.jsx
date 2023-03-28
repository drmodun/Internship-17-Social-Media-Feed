import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import classes from "./post.module.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';


export function Post(props) {
    const [mode, setMode] = useState(props.mode);
    const date = new Date(props.date);
    return (
        <Card className={classes.Post} sx={{ maxWidth: 345 }}>
            <CardHeader

                action={
                    <IconButton aria-label="settings">
                    </IconButton>
                }
                title={props.username}
                subheader={date.toLocaleDateString() + " " + date.toLocaleTimeString()}
            />
            <CardMedia
                component="img"
                height="194"
                image={props.image}
                alt="Image"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.body}
                </Typography>
            </CardContent>

            {mode === "default" ?
                <CardActions disableSpacing>
                    <Link to={"/" + String(props.id)}>
                        <button className={classes.Button} onClick={() => setMode("comments")}>See Comments ({props.comments.length})</button>
                    </Link>
                </CardActions> : mode === "comments" ?
                    props.comments.map((comment) => {
                        return (
                            <Post
                                key={comment.id}
                                image={comment.picture}
                                username={comment.username}
                                body={comment.body}
                                date={comment.time}
                                mode="none"
                            />)
                    })
                    : null
            }
        </Card>
    );
}