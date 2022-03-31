import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const { title, body, id } = blog;
    const navigate = useNavigate()
    const loadPost = () => {
        const path = `/blogs/${id}`;
        navigate(path);

    }
    return (
        <Col>
            <Card>
                <Button onClick={loadPost} variant="primary" size="sm">{id}</Button>
            </Card>


        </Col>
    );
};

export default BlogCard;