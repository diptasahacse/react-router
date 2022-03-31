import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Country = () => {
    const [country, setCountry] = useState({});
    const { countryName } = useParams();
    
    useEffect(()=>{
        axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(data => setCountry(data.data[0]))
    },[]);

    console.log(country)
    const {area,fifa,region,status,population} = country;
    
    
    return (
        <div>
            <h1>Country</h1>
            <p>{population}</p>
            <p>{area}</p>
            <p>{fifa}</p>
            <p>{region}</p>
            <p>{status}</p>
            <p>{country.name?.common}</p>
        </div>
    );
};

export default Country;