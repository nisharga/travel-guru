import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Place from '../FakeData/FakeData';
import BookingLeft from './BookingLeft';
import './Booking.css'
import { useForm, Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";

const Booking = () => {
    let { id } = useParams();  

    const { register, handleSubmit, control } = useForm();
    const onSubmit = data => { 

    }; 
    return (
        <div>
            <Container className="bookingpage" maxWidth="lg">
                <div className="bookingLeft">
                    {
                        Place.filter(data => data.name == id).map(val => 
                          <BookingLeft val={val}></BookingLeft>  
                        )
                    }
                </div>
                <div className="bookingRight">
                    <form className="formbooking" onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="origin">Origin</label><br></br>
                            <select id="origin" name="origin" ref={register} >
                                <option value="Barisal">Barisal</option>
                                <option value="Chittagong">Chittagong</option>
                                <option value="Dhaka" selected>Dhaka</option>
                                <option value="Khulna" >Khulna</option>
                                <option value="Mymensingh" >Mymensingh</option>
                                <option value="Rajshahi" >Rajshahi</option>
                                <option value="Rangpur" >Rangpur</option>
                                <option value="Sylhet" >Sylhet</option>
                            </select>
                            <br></br>
                            <label htmlFor="destination">destination</label><br></br>
                            <select id="destination" name="destination" ref={register} >
                                <option value="Barisal">Barisal</option>
                                <option value="Chittagong" selected>Chittagong</option>
                                <option value="Dhaka">Dhaka</option>
                                <option value="Khulna">Khulna</option>
                                <option value="Rajshahi">Rajshahi</option>
                                <option value="Mymensingh">Mymensingh</option>
                                <option value="Rangpur">Rangpur</option>
                                <option value="Sylhet">Sylhet</option>
                            </select>

                
                <label htmlFor="from">From</label><br></br>
                <Controller
                    id="from"
                    control={control}
                    name="from"
                    render={({ onChange, onBlur, value}) => (
                    <ReactDatePicker
                        onChange={onChange}
                        onBlur={onBlur}
                        selected={value}
                    />
                    )}
                />

                <label htmlFor="to">To</label><br></br>
                <Controller
                    id="to"
                    control={control}
                    name="to"
                    render={({ onChange, onBlur, value}) => (
                        <ReactDatePicker
                            onChange={onChange}
                            onBlur={onBlur}
                            selected={value}
                        />
                    )}
                /> 
                <Link to={`/booking/${id}/bedroom`} type="submit">Start Booking</Link>
                    </form>
                </div>
            </Container>
        </div>
    );
}

export default Booking;



// const [selectedDate, setSelectedDate] = React.useState(new Date('2020-11-19'));
// const handleDateChange = (date) => {
// setSelectedDate(date);
// console.log('date:', date)
// };
// const [selectedDate2, setSelectedDate2] = React.useState(new Date('2020-11-19'));
// const handleDateChange2 = (date2) => {
// setSelectedDate(date2);
// console.log('date2:', date2)
// };

// <MuiPickersUtilsProvider utils={DateFnsUtils} >        
//                     <KeyboardDatePicker
                        
//                         disableToolbar
//                         variant="inline"
//                         format="MM/dd/yyyy"
//                         margin="normal"
//                         id="date-picker-inline"
//                         label="Date picker inline"
//                         value={selectedDate}
//                         onChange={handleDateChange}
//                         KeyboardButtonProps={{
//                             'aria-label': 'change date',
//                         }}
//                     />
//                     <KeyboardDatePicker
//                         disableToolbar
//                         variant="inline"
//                         format="MM/dd/yyyy"
//                         margin="normal"
//                         id="date-picker-inline"
//                         label="Date picker inline"
//                         value={selectedDate}
//                         onChange={handleDateChange2}
//                         KeyboardButtonProps={{
//                             'aria-label': 'change date',
//                         }}
//                     /> 
//                 </MuiPickersUtilsProvider>



// import 'date-fns';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers'; 
