import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom"; 
import NewNavbar from "../dashboard/newNav/Navbar";
import { Box,Grid } from "@mui/material"; 
import './time.css'
import Paper from '@mui/material/Paper';
import manit from "../../assets/images/bgmanit.png"
import { styled } from '@mui/material/styles';
import { auth } from "../../firebase";
import { signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import timetb from "../../assets/images/timetb.png"
const boxStyles={
  makeTranparent:"rgb(0,0,0,0.3);",
  makeLight:"rgb(255,255,255,0.7);"
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  background:boxStyles.makeLight,
  display:"flex",
  alignItems:"flex-start",
  justifyContent:"center",
  flexDirection:"column"
}));

function TimeTab() {
  const [userData,setData]=useState("null");
 const [name,setName]=useState("null");
 const [mail,setMail]=useState("null");
useEffect(() => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      setData(user.uid);
      setName(user.displayName);
      setMail(user.email);
  }
    else
    setData("suka");
  });
}, []);
  const navigate = useNavigate();
  const signOutFunc=()=>{
    signOut(auth)
    .then(() => {
      alert("You are logged out");
     navigate("/");
  })
  .catch((error) => {
    alert(error);
  });
  }
  return (
    <div> 
      <NewNavbar/>
      <div className="dashboard-body" style={{width:"100vw",height:"100vh",paddingTop:"5vh",display:"flex",flexDirection: "column",alignItems:"center",backgroundImage:`url(${manit})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>

         <Box sx={{boxShadow: 3,width:"80vw",maxWidth:"600px",justifyContent:"center",
         display:"flex",flexDirection:"column",textAlign:"center",height:"60vh",maxHeight:"600px",backgroundColor:"white",borderRadius:10,padding:2,background:boxStyles.makeTranparent }}>
         <div style={{height:"fit-content"}}><h1>Time Table</h1></div>
         <div><img  className="time-table" src={timetb} ></img></div>
        </Box>
         
      </div>
    </div> 
  );
}

export default TimeTab;
