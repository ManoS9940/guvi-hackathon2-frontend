import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
    Typography,
    Button,
    Grid,
    Paper
} from '@mui/material';

import {
    Navbar,
    Container,
    Nav
} from 'react-bootstrap';
import axios from 'axios';
import './Movies.css';


function Movies() {

    const [moviesList, setMoviesList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getmovies = async () => {
                var response = await axios.get('https://bookmyshow-backend-er8v.onrender.com/getmovies')
                console.log(response);
                setMoviesList(response.data);
            }
            getmovies();
    }, [])

    return (
        
        <>
           <Navbar bg="light" variant="dark">
                    <Container>
                        <Nav className="me-auto">
                            <Typography variant="h6" class="text-secondary">Watch handpicked movie with comfort Book Now!!!</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text"></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Typography variant="h5" class="text-secondary">Search</Typography>
                        </Nav>
                    </Container>
                </Navbar>               
            <div className="grid">
                <Grid container spacing={4}>
                    {moviesList.map((movies) => (
                        <Grid item key={movies._id}>
                            <Paper className="imagecontainer">
                                <div >
                                <img className='image' src={movies.movieUrl}  alt={movies.movieName}/>
                                </div>
                                   <Button variant="contained" id="button" onClick={()=> navigate("/booking")}>Book Now</Button>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    )
}
export default Movies;
