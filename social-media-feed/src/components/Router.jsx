import React from 'react';
import { createBrowserRouter, Switch, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import LoginPage from '../pages/LoginPage';
import PostPage from '../pages/PostPage';
import { FeedPage } from '../pages/FeedPage/FeedPage';
import Layout from './Layout/Layout';

const router = createBrowserRouter(createRoutesFromElements([
    <Route path="/" element={<Layout/>}>
    <Route path="/" >
        <Route index element={<FeedPage/>} />
        <Route path=":postId" element={<PostPage/>} />
    </Route>
    </Route>
    ,
    <Route path="/login" element={<LoginPage />} />,
    <Route path="*" element={<NotFoundPage />} />,
    ]));    

export const Router = () => {
    return (
        <RouterProvider     router={router}/>
    );
}
