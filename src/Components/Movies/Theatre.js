import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
    Button,
    Grid,    
    Paper
} from '@mui/material';

import axios from 'axios';
import './Theatre.css';


function Theatres() {

    const [theatres, setTheatres] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getTheatres = async () => {
            var response = await axios.get('https://bookmyshow-backend-er8v.onrender.com/gettheatres')
            console.log(response);
            setTheatres(response.data);
        }
        getTheatres();
    }, [])

    return (

        <>
        <div className="home">
        <br />&nbsp;<Button  class="btn btn-secondary" onClick={() => navigate(-1)}>Back</Button>&nbsp;
         </div>
            <div className="grid">
                <Grid container spacing={4}>
                    {theatres.map((Movies) => (
                        <Grid item key={Movies._id}>
                            <Paper className = "paper">
                                <div className="theatres">
                                    <div>
                                    <h3>{Movies.theatreName} </h3>
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <div>
                                    <Button class="btn btn-outline-success" onClick={() => navigate("/seatbooking")}>{Movies.showTime1}</Button>&nbsp;&nbsp;
                                    <Button class="btn btn-outline-success" onClick={() => navigate("/seatbooking")}>{Movies.showTime2}</Button>&nbsp;&nbsp;
                                    <Button class="btn btn-outline-success" onClick={() => navigate("/seatbooking")}>{Movies.showTime3}</Button>&nbsp;
                                    </div>
                                </div>
                                
                                </Paper>
                            
                        </Grid>
                    ))}
                </Grid>


            </div>
        </>
    )
}
export default Theatres;
