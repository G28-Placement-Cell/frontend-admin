import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import '../Sidebared/Navbar.css';
import TemporaryDrawer from './Navbar';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/adminApislice";
import { logout } from "../slices/authslice";

function Header() {
  // const [sidebar, setSidebar] = useState(false);
  const emailJSON = localStorage.getItem('email');
  const email = JSON.parse(emailJSON);

  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch();
  const [logoutapicall] = useLogoutMutation();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logoutapicall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <AppBar position="sticky" style={{ backgroundColor: "#2B2442" }}>
      <Toolbar>
      {email && (
          <TemporaryDrawer logoutHandler={logoutHandler} />
        )}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 2 }}>
          Placement Cell
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button color="inherit" style={{ minWidth: '16vh' }} onClick={() => navigate('/contactus')}>Contact Us</Button>
          <Button color='inherit' style={{ minWidth: '16vh' }} onClick={() => navigate('/aboutus')}>About Us</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;