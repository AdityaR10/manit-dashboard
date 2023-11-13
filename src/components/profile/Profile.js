import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom"; 
import NewNavbar from "../dashboard/newNav/Navbar";
import { Box,Grid } from "@mui/material"; 
import './profile.css'
import Paper from '@mui/material/Paper';
import manit from "../../assets/images/bgmanit.png"
import { styled } from '@mui/material/styles';
import { auth } from "../../firebase";
import { signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
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

function Profile() {
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

         <Box sx={{boxShadow: 3,width:"80vw",maxWidth:"600px",
         display:"flex",alignItems:"center",textAlign:"center",height:"50vh",maxHeight:"600px",backgroundColor:"white",borderRadius:10,padding:2,background:boxStyles.makeTranparent }}>
         <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
         <Grid item xs={12}>
          <Item sx={{height:"100px",fontSize:"15px"}}>
            <div><h1 style={{fontSize:"20px"}}>Username : {name} </h1></div>
            <div>Email : {mail}</div>
            <div>User Id : {userData}</div>
            </Item>
        </Grid>
        <Grid item xs={4}>
          <Item sx={{height:"25px",fontSize:"15px"}} onClick={signOutFunc}>Sign Out</Item>
        </Grid>
        <Grid item xs={12}>
          <Item  sx={{height:"50px"}}>
            B-Tech, Computer Science Engineering
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item sx={{height:"50px"}}>
            3rd Year 5th sem
          </Item>
        </Grid>
      </Grid>
        </Box>
         
      </div>
    </div> 
  );
}

export default Profile;
