import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Place from '../FakeData/FakeData';
import HomeBottomLeftData from './HomeBottomLeftData';

const HomeBottomLeft = () => { 
    let { id } = useParams(); 
    return (
        <div>
            <div className="leftHome">
                {
                    Place.filter(data => data.name == id).map(val => 
                        <HomeBottomLeftData val={val}></HomeBottomLeftData>
                        )
                }
            </div>
        </div>
    );
};

export default HomeBottomLeft;

{/* {
    Place.filter(data => data.name == id).map(val => {
        <HomeBottomLeftData val={val}></HomeBottomLeftData>    
    })
} */}
                    {/* <h1>{val.name}</h1> */}
                    {/* <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south.</p>
                     */}