import React from "react";
import { Link } from "react-router-dom";
// import ".App.css";

function App() {
    return (
        <div className="App">
            <h2>Homepage</h2>
            <Link to="about">About</Link>
            <br />
            <Link to="posts">Posts</Link>
        </div>
    );
}

export default App;
