import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CountryCard = ({country}) => {
    const {common} = country.name;
    const navigate = useNavigate()
    const loadCountry = ()=>{
        const path = `/countries/${common}`;
        navigate(path);

    }
    return (
        <Col>
            <Card>
                <Card.Title>{common}</Card.Title>
                <Button onClick={loadCountry} variant="primary" size="sm">Load</Button>
            </Card>


        </Col>
    );
};

export default CountryCard;