import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';

function RenderLandingPage(props) {
  return (
    <div>
      <h1>Welcome to Labs Basic SPA</h1>
      <div>
        <p>
          This is an example of how we'd like for you to approach page/routable
          components.
        </p>
        <p>
          <Link to="/example-list">Example List of Items</Link>
          <Login />
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;
