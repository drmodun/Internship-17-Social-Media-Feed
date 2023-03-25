import React from 'react';
import { currentPosts } from './data';
import { Post } from './components/Post/Post';
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={" "} className="App-logo" alt="logo" />
          {currentPosts.map((post) => {
            return (
              <Post
                key={post.id}
                image={post.picture}
                username={post.username}
                body={post.body}
                date={post.time}
                mode="default"
                comments={post.comments}
              />
            );
          })}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
