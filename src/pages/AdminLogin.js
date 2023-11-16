import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import admin from '../images/admin.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar/AppBar';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../slices/adminApislice';
import { setCredentials } from '../slices/authslice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

function AdminLogin() {

    const heading = {
        textAlign: 'center',
        margin: '20px 0',
    };

    const formStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const inputStyles = {
        margin: '10px 0',
        width: '100%',
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, { isLoading }] = useLoginMutation();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {

            const res = await login({ email, password }).unwrap();
            dispatch(setCredentials({ ...res }))
            navigate('/PenstudentProfiles')
        }
        catch (err) {
            console.log(err);
            toast.error(err?.data?.message || err.error)
        }
    }

    return (
        <>
            {/* <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Placement Cell
                    </Typography>
                    <Button color="inherit" sx={{ mx: 1 }}>Login As</Button>
                    <Button color="inherit" sx={{ mx: 1 }}>Contact us</Button>
                    <Button color="inherit" sx={{ mx: 1 }}>About Us</Button>
                </Toolbar>
            </AppBar> */}
            <Grid container >
                {/* Left 60% - Image */}
                <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} item xs={8}>
                    <img src={admin} alt="Admin Image" style={{ width: '73%', height: '87%', alignItems: 'center' }} />
                </Grid>

                {/* Right 40% - Admin Input Area */}
                <Grid item xs={4} component={Paper} elevation={3}>
                    <div style={{ padding: '20px' }}>
                        <Typography sx={heading} variant="h4" gutterBottom>
                            Admin Login
                        </Typography>
                        {/* Admin login form */}
                        <form onSubmit={submitHandler}>
                            <TextField
                                label="Email"
                                id="email"
                                name="email"
                                type="email"
                                variant="outlined"
                                fullWidth
                                required
                                style={inputStyles}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                label="Password"
                                id="password"
                                name="password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                required
                                style={inputStyles}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', padding: '10px' }}>
                                {/* Submit button */}
                                <Button type="submit" variant="contained" color="primary" sx={{ width: '70px' }}>
                                    Login
                                </Button>

                                {/* Forgot Password link */}
                                <a href="/forgotpassword" style={{ textDecoration: 'none', color: 'blue' }}>Forgot Password?</a>
                            </div>
                        </form>
                    </div>
                </Grid>
            </Grid >
        </>
    );
}

export default AdminLogin;