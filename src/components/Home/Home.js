import React from "react";
import { Link } from "react-router-dom"; 
import Navbar from "../Navbar/Navbar";
import { Box } from "@mui/material";
import './home.css'
import manit from "../../assets/images/bgmanit.png"
const boxStyles={
  makeTranparent:"rgb(0,0,0,0.3);"
};
function Home() {
  return (
    <div> 
      <Navbar/>
      <div className="dashborad-body" style={{width:"100vw",height:"100vh",paddingTop:"5vh",display:"flex",flexDirection: "column",alignItems:"center",backgroundImage:`url(${manit})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
        <Box sx={{boxShadow: 3,width:"80vw",textAlign:"center",height:"fit-content",backgroundColor:"white",marginLeft:"2.5vw",borderRadius:10,padding:2,background:boxStyles.makeTranparent }}>
           <h1>Welcome to Students Dashboard MANIT</h1>
        </Box>
        <Box sx={{marginTop:"20px",textAlign:"center",padding:"5px",width:"80vw"}}>
          <h2>Get all Academics and College related updates here</h2>
        </Box>
        {/* <Box sx={{ boxShadow: 3,width:"40vw",height:"auto",marginRight:"2.5vw",padding:2 }}>
           <img src={manit} style={{width:"100%"}}></img>
        </Box> */}
      </div>
    </div> 
  );
}

export default Home;
