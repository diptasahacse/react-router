import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const Blog = () => {
    const [post, setPost] = useState({});
    const {blogId} = useParams()
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
        .then(data => setPost(data.data))

    },[blogId])
    
    return (
        <div>
            <h3>Single Blog Info</h3>
            <p>ID : {post.id}</p>
            <p>Title : {post.title}</p>
            <p>Description : {post.body}</p>
            
            
        </div>
    );
};

export default Blog;