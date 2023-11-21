import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import admin from '../images/admin.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
            <Grid container>
                <Grid item xs={12} md={6} lg={7}>
                    {/* Left side - Image */}
                    <img src={admin} alt="Admin Image" style={{ width: '100%', height: '100%' }} />
                </Grid>
                <Grid item xs={12} md={6} lg={5} component={Paper} elevation={3}>
                    {/* Right side - Admin Input Area */}
                    <div style={{ padding: '20px' }}>
                        <Typography variant="h4" gutterBottom>
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
            </Grid>
        </>
    );
}

export default AdminLogin;