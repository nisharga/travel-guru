import React from 'react';
import { Link } from 'react-router-dom';
import './HomeSingleBox.css';

const HomeSingleBox = (props) => {
    const {name, img} = props.val;
    return (
        <Link to={`/place/${name}`} className="HomeSingleBox" style={{backgroundImage: img}}> 
            <h2>{name}</h2>
            <img src={img}></img>
        </Link>
    );
};

export default HomeSingleBox;