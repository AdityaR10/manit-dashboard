import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import NewNavbar from "./newNav/Navbar";
import { Box } from "@mui/material";
import './dash.css'
import manit from "../../assets/images/bgmanit.png"
const boxStyles={
  makeTranparent:"rgb(0,0,0,0.3);"
};
function UserDashboard(props) {
    const [userName,setName]=useState("null");
    useEffect(() => {
        setName(window.location.pathname.split('/')[2]);
    }, [])
   
  return (
    <div> 
      <NewNavbar/>
      <div className="dashboard-body" style={{width:"100vw",height:"100vh",paddingTop:"5vh",display:"flex",flexDirection: "column",alignItems:"center",backgroundImage:`url(${manit})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
        <Box sx={{boxShadow: 3,width:"80vw",textAlign:"center",height:"fit-content",backgroundColor:"white",marginLeft:"2.5vw",borderRadius:10,padding:2,background:boxStyles.makeTranparent }}>
           <h1>Welcome to Students Dashboard MANIT</h1>
        </Box>
        <Box sx={{marginTop:"20px",textAlign:"center",padding:"5px",width:"80vw"}}>
          <h2>Get all Academics and College related updates here</h2>
        </Box>
        <Box sx={{marginTop:"20px",textAlign:"center",padding:"5px",width:"80vw"}}>
          <h2>Hi {userName}, get to the top menu to see College info</h2>
        </Box>
      </div>
    </div> 
  );
}

export default UserDashboard;