import React from 'react';
import './SingleRooms.css';
import star from '../../img/icon/star_1_.png'

const SingleRooms = (props) => {
    const {img, name, shortd, longd, rating, price} = props.val;
    return (
        <div className='singleroom'>
            <div className="image">
                <img src={img}></img>
            </div>
            <div className="roomDescription">
                <h2>{name}</h2>
                <p>{shortd}</p>
                <p>{longd}</p>
                <h6 className="rating">
                    <img src={star}></img>
                    {rating}</h6>
                <h6 className="price"><span>${price}</span>/night</h6>
            </div>
        </div>
    );
};

export default SingleRooms;