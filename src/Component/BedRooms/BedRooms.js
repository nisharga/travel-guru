import React from 'react';
import { useParams } from 'react-router-dom';
import './BedRooms.css';
import { Container } from '@material-ui/core';
import Place from '../FakeData/FakeData';
import SingleRooms from './SingleRooms'; 
import GoogleMap from './GoogleMap';

const BedRooms = ({ children, ...rest }) => {
    let { id } = useParams();
    console.log('id:', id);  
    return (
        

        <div>
            <Container className="navbar" maxWidth="lg">
            <hr></hr>
            <div className="leftSideBedRoom">
                <h1>Stay in {id}</h1>
                {
                    Place.filter(dt => dt.category == 'room').map(data => <SingleRooms val={data}></SingleRooms>)
                }
            </div>
            <div className="googlemap"> 
                <GoogleMap></GoogleMap>
            </div>
            </Container>

            
        </div>
    );
};

export default BedRooms;