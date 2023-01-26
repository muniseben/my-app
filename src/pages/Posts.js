import React from "react";
import { Link } from "react-router-dom";

export const PostList = [
    {
        id: 1,
        title: "Post 1",
        description: "Post 1 description",
    },
    {
        id: 2,
        title: "Post 2",
        description: "Post 2 description",
    },
];

//! Bu yukaridaki PostList'i bir database olarak dusunelim.
//! Normalde API'dan alir ve display ederiz.

function Posts() {
    return (
        <div>
            <h2>Posts</h2>
            {PostList.map((post) => (
                <div key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </div>
            ))}
            <Link to="/">Home</Link>
        </div>
    );
}

export default Posts;
