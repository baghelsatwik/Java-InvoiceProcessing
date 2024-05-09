import React from "react";
import { AppBar, Toolbar} from '@mui/material';
const Header = () =>{
  const logo = "https://dashboard.getinvoice.co/dboard/img/logo.png";
  return (
    <AppBar color="secondary" position="static">
      <Toolbar>
        <img src={logo} alt="" style={{width:120}}/>
      </Toolbar>
    </AppBar>
  )
}

export default Header;