import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import MemberCard from '../MemberCard/MemberCard';

const Members = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(usersData => setUsers(usersData.data))
    }, []);

    return (
        <div>
            <h3>This Is Members Page</h3>
            <div>
                <Row  xs={1} lg={4} className="g-2 m-0">
                    {
                        users.map(user => <MemberCard key={user.id} user={user}></MemberCard>)
                    }

                </Row>


            </div>

        </div>
    );
};

export default Members;