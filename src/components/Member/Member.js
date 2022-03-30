import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Member = () => {
    const [userInfo, setUserInfo] = useState({});

    const { memberId } = useParams();
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${memberId}`)
            .then(data => setUserInfo(data.data));
    }, [])
    
    return (
        <div>
            <h2>Name: {userInfo.name}</h2>
            <p>Username : {userInfo.username}</p>
            <p>Phone : {userInfo.phone}</p>
            <p>Email : {userInfo.email}</p>
            <p>Website : {userInfo.website}</p>

        </div>
    );
};

export default Member;