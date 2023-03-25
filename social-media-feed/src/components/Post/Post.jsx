import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Button } from '@mui/material';
import classes from "./post.module.css"
import { useState } from 'react';


export function Post(props) {
    const [expanded, setExpanded] = useState(false);
    const [mode, setMode] = useState(props.mode);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.Post} sx={{ maxWidth: 345 }}>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                    </IconButton>
                }
                title={props.username}
                subheader={props.date.toLocaleString()}
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
                    <button className={classes.Button} onClick={() => setMode("comments")}>See Comments ({props.comments.length})</button>
                </CardActions> : mode === "comments" ?
                    props.comments.map((comment) => {
                        return(
                        <Post
                            key={comment.id}
                            image={comment.picture}
                            username={comment.username}
                            body={comment.body}
                            date={comment.time}
                            mode="none"
                        />)
                        //temporary showing comments on click, later will be a separate page
                    })
                    : null
            }
        </Card>
    );
}