import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

const Blog = () => {
    const {blogId} = useParams()
    return (
        <div>
            <h3>Single Blog Info</h3>
            <p>{blogId}</p>
            
            
        </div>
    );
};

export default Blog;