import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {Link} from "react-router-dom";
import { auth } from '../../../firebase';
export default function MenuPopupState() {
  const [userName,setName]=React.useState("null");
  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setName(user.displayName); 
    } 
    });
  }, []);
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)} sx={{
            width:"70px",
            marginRight:"10px",
            backgroundColor:"#2d7088",
            borderRadius:"50%",
          }}>
            {userName}
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}><Link style={{textDecoration:"none"}} to={`/user/${userName}/profile`}>Profile</Link> </MenuItem>
            <MenuItem onClick={popupState.close}><Link style={{textDecoration:"none"}} to={`/user/${userName}/time-table`}>Time Table</Link> </MenuItem>
            <MenuItem onClick={popupState.close}><Link style={{textDecoration:"none"}} to={`/user/${userName}/attendence`}>Attendence</Link> </MenuItem>
            <MenuItem onClick={popupState.close}><Link style={{textDecoration:"none"}} to={`/user/${userName}/attendence`}>Results</Link> </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
