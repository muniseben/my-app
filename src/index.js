import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import Post from "./pages/Post";
import App from "./App";

import { Route, BrowserRouter, Routes } from "react-router-dom";
reportWebVitals();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="about" element={<About />} />
                <Route path="posts" element={<Posts />} />
                <Route path="posts/:id" element={<Post />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
