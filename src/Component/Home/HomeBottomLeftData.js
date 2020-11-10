import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';

const HomeBottomLeftData = (props) => {
    return (
        <div>
            <h2>{props.val.name}</h2>
            <p>{props.val.shortd}</p>
            <Link to={`/booking/${props.val.name}`} className="booking">Booking
            <ArrowForwardIcon></ArrowForwardIcon></Link>
        </div>
    );
};

export default HomeBottomLeftData;