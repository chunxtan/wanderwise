import { Breadcrumbs, Link } from '@mui/material';
import React from 'react';
import './NavBar.css';

const NavBar: React.FC = () => {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" className="NavBarLink">
        <Link underline="hover" color="inherit" href="/">
          Search
        </Link>
        <Link underline="hover" color="inherit" href="/saved">
          Saved Trips
        </Link>
      </Breadcrumbs>
    </>
  )
}

export default NavBar;