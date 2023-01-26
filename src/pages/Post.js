import React from "react";
import { PostList } from "./Posts";


function Post() {
    const myPost = PostList.find((post) => post.id === Number(post.id));
    return (
        <div>
            <h2>{myPost?.title}</h2>
            <p>{myPost?.description}</p>
        </div>
    );
};

//! soru isareti = varsa display et yoksa display etme/gosterme demek

export default Post;
