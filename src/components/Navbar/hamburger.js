import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {Link} from "react-router-dom";
export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)} sx={{
            width:"70px",
            marginRight:"10px",
            backgroundColor:"#2d7088"
          }}>
            Menu
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}><Link style={{textDecoration:"none"}} to="/">Home</Link> </MenuItem>
            <MenuItem onClick={popupState.close}><Link style={{textDecoration:"none"}} to="/">About</Link> </MenuItem>
            <MenuItem onClick={popupState.close}><Link style={{textDecoration:"none"}} to="/signup">Sign Up</Link> </MenuItem>
            <MenuItem onClick={popupState.close}><Link style={{textDecoration:"none"}} to="/signin">Sign In</Link> </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
