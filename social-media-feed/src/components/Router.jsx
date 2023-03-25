import React from 'react';
import { createBrowserRouter, Switch, Route, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements([
    <Route path="/" element={<Feed />} />,
    <Route path="/login" element={<About />} />,
    <Route path="/dashboard" element={<Dashboard />} />,
    <Route path="*" element={<NotFound />} />,
    ]));    

export const Router = () => {
