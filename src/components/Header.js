import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from '../Sidebared/Sidebar';
import '../Sidebared/Navbar.css';
import { IconContext } from 'react-icons';
import TemporaryDrawer from './Navbar';

function Header() {
  // const [sidebar, setSidebar] = useState(false);

  // const showSidebar = () => setSidebar(!sidebar);
  return (
    <AppBar position="sticky" style={{ backgroundColor: "#2B2442" }}>
      <Toolbar>
          < TemporaryDrawer />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 2 }}>
          Placement Cell
        </Typography>
        <Button color="inherit" >Contact us</Button>
        <Button color="inherit" >About Us</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;