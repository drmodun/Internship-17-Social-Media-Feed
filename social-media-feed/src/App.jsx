import React from 'react';
import { currentPosts } from './data';
import { Post } from './components/Post/Post';
import { Router } from './components/Router';

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );

}

export default App;
