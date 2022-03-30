import React from 'react';
import { useParams } from 'react-router-dom';

const Member = () => {
    const {memberId} = useParams();
    return (
        <div>
            <h4>Member Details for {memberId}</h4>

        </div>
    );
};

export default Member;