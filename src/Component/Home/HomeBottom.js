import React from 'react';
import { Link } from 'react-router-dom';
import Place from '../FakeData/FakeData';
import HomeSingleBox from '../HomeSingleBox/HomeSingleBox';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const HomeBottom = () => {
    return (
        <div>
            <div className="boxItemAll">
            <div className="rightHome">
                {
                Place.filter(val => val.category == "place").map(data => <HomeSingleBox val={data}></HomeSingleBox> ) 
                } 
            </div>
            </div>
        </div>
    );
};

export default HomeBottom;