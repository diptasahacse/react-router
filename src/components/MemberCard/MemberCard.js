import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MemberCard = ({ user }) => {
    let navigate = useNavigate();

    const { id, name, username, phone } = user;

    const showFriendDetails =()=>{
        const path = `/members/${id}`;
        navigate(path)

    }
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    
                    <Button onClick={showFriendDetails} variant="primary">Details</Button>
                </Card.Body>
            </Card>


        </Col>


    );
};

export default MemberCard;