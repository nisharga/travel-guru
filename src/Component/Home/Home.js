import React, { useContext } from 'react';
import './Home.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import Icon from '../../img/icon/Logo.png';
import { Container } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Login from '../Login/Login';
import Place from '../FakeData/FakeData';
import HomeSingleBox from '../HomeSingleBox/HomeSingleBox'; 
import HomeBottom from './HomeBottom';
import Booking from '../Booking/Booking';
import HomeBottomLeft from './HomeBottomLeft';
import BedRooms from '../BedRooms/BedRooms';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { UserContext } from '../../App';

const Home = () => { 
    const [user, setUser] = useContext(UserContext)
    return (
        <div className="HomeBg">
            <Router>
                <Container className="navbar" maxWidth="lg">
                    <Link to='/'>
                        <img src={Icon}></img>
                    </Link>
                    <div className='search'>
                        <Link to='/search'>
                        <SearchIcon className="searchicon"></SearchIcon>
                        </Link>
                        <input type="search" placeholder="Search Your Distination..."
                        />
                    </div>
                    <div className="navItem">
                        <Link to='/news'>News</Link>
                        <Link to='/destination'>Destination</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/contact'>Contact</Link>
                        {
                            !user.displayName ? <Link to='/login' className="login">Login</Link> : <Link to='/login' className="username">{user.displayName}</Link>
                        }
                        
                    </div>
                </Container>

                

                <Switch>
                    <Route path="/login">
                       <Login></Login>
                    </Route> 
                    <Route path="/nk">
                       <Login></Login>
                    </Route>
                    <PrivateRoute path="/booking/:id/bedroom">
                       <BedRooms></BedRooms>
                    </PrivateRoute>
                    
                    <Route path="/place/:id">
                       <HomeBottom></HomeBottom>
                       <HomeBottomLeft></HomeBottomLeft>
                    </Route> 
                    <Route path="/booking/:id">
                       <Booking></Booking>
                    </Route> 
                    <Route path="/destination">
                       <h2>Booking</h2>
                    </Route> 
                    <Route path="/">
                       <HomeBottom></HomeBottom>
                    </Route> 
                </Switch>

               
                    
            </Router>

            
        </div>
    );
}; 

export default Home;