import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, Navigate } from 'react-router-dom';
import { SidebarData } from '../Sidebared/Sidebar';
import '../Sidebared/Navbar.css';
import { IconContext } from 'react-icons';
import TemporaryDrawer from './Navbar';
import { useNavigate } from 'react-router-dom';

function Header() {
  // const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();

  // const showSidebar = () => setSidebar(!sidebar);
  return (
    <AppBar position="sticky" style={{ backgroundColor: "#2B2442" }}>
      <Toolbar>
        <TemporaryDrawer />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 2 }}>
          Placement Cell
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button color="inherit" style={{ minWidth: '16vh' }}>Contact us</Button>
          <Button color='inherit' style={{ minWidth: '16vh' }} onClick={() => navigate('/aboutus')}>About Us</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;