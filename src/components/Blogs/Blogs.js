import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import BlogCard from '../BlogCard/BlogCard';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(blogs => setBlogs(blogs.data))

    }, []);
    
    return (
        <div>
            <h3>All Blogs</h3>
            <div>
                <Outlet></Outlet>
            </div>
            <Row xs={1} lg={6} md={2} className="g-2 m-0">

                {
                    blogs.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                }


            </Row>

        </div>
    );
};

export default Blogs;