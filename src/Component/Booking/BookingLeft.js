import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import './BookingLeft.css';

const BookingLeft = (props) => { 
    const [user, setUser] = useContext(UserContext);
    return (
        <div>
             <p>{user}</p>
            <h1>{props.val.name}</h1>
            <p>{props.val.longd}</p>
   
        </div>
    );
};

export default BookingLeft;