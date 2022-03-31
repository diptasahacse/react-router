import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CountryCard from '../CountryCard/CountryCard';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all')
        .then(data => setCountries(data.data))
    },[])
    
    return (
        <div>
            <h3>All Countries</h3>
            <div>
                <Row  xs={1} lg={4} className="g-2 m-0">
                    {
                        countries.map((country,index) => <CountryCard key={index} country={country}></CountryCard>)
                    }

                </Row>


            </div>

        </div>
    );
};

export default Countries;