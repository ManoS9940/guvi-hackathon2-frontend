import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
    Button,
    Grid
} from '@mui/material';
import axios from 'axios';
import './Seat.css';


function Seating() {

    const [seats, setSeats] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getSeats = async () => {
            var response = await axios.get('https://book-my-show-be.herokuapp.com/getseats')
            console.log(response);
            setSeats(response.data);
        }
        getSeats();
    }, [])
   

    return (

        <>
        <div className="home">
        <br />&nbsp;<Button  class="btn btn-secondary" onClick={() => navigate(-1)}>Back</Button>&nbsp;
        
         </div>
            <div className="grids">
                <Grid container spacing={4}>
                    {seats.map((Movies) => (
                        <Grid item key={Movies._id}>
                            
                                <div className="screen">
                                    <div>
                                    <h3>{Movies.rowName} </h3>
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <div>
                                    <Button class="btn btn-outline-success">{Movies.seatNumber1}</Button>&nbsp;&nbsp;
                                    <Button class="btn btn-outline-success">{Movies.seatNumber2}</Button>&nbsp;&nbsp;
                                    <Button class="btn btn-outline-success">{Movies.seatNumber3}</Button>&nbsp;&nbsp;
                                    <Button class="btn btn-outline-success">{Movies.seatNumber4}</Button>&nbsp;&nbsp;
                                    <Button class="btn btn-outline-success">{Movies.seatNumber5}</Button>&nbsp;&nbsp;
                                    <Button class="btn btn-outline-success">{Movies.seatNumber6}</Button>&nbsp;&nbsp;
                                    <Button class="btn btn-outline-success">{Movies.seatNumber7}</Button>&nbsp;&nbsp;
                                    <Button class="btn btn-outline-success">{Movies.seatNumber8}</Button>&nbsp;&nbsp;
                                    <Button class="btn btn-outline-success">{Movies.seatNumber9}</Button>&nbsp;&nbsp;
                                    <Button class="btn btn-outline-success">{Movies.seatNumber10}</Button>&nbsp;&nbsp;
                                    </div>
                                </div>
                                
                              
                        </Grid>
                    ))}
                </Grid>


            </div>
        </>
    )
}
export default Seating;