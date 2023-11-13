import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom"; 
import NewNavbar from "../dashboard/newNav/Navbar";
import { Box,Grid } from "@mui/material"; 
import './attend.css'
import Paper from '@mui/material/Paper';
import manit from "../../assets/images/bgmanit.png"
import { styled } from '@mui/material/styles';
import { auth } from "../../firebase";
import { signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import studentData from "../../assets/attendance.json"
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
const SubjectRow = ({ subject, totalClasses, attendedClasses }) => {
  const attendancePercentage = (attendedClasses / totalClasses) * 100;
  const isBelowThreshold = attendancePercentage < 75;
  const textColor = isBelowThreshold ? 'red' : 'white';

  return (
    <div style={{ display: 'flex', borderBottom: '1px solid #ccc', padding: '10px', color: textColor }}>
      <div style={{ flex: 1 }}>{subject}</div>
      <div style={{ flex: 1 }}>{totalClasses}</div>
      <div style={{ flex: 1 }}>{attendedClasses}</div>
    </div>
  );
};

function Attend() {
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
  const { studentName, subjects } = studentData;
 
    
    return (
      <div> 
      <NewNavbar/>
      <div className="dashboard-body" style={{width:"100vw",height:"100vh",paddingTop:"5vh",display:"flex",flexDirection: "column",alignItems:"center",backgroundImage:`url(${manit})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
      <div style={{backgroundColor:"white",background:"rgb(0,0,0,0.3)",padding:"10px",borderRadius:"20px"}}>
        <h2>{studentName}'s Attendance</h2>
        <div style={{ display: 'flex', borderBottom: '1px solid #ccc', padding: '10px', fontWeight: 'bold' }}>
          <div style={{ flex: 1 }}>Subject</div>
          <div style={{ flex: 1 }}>Total Classes</div>
          <div style={{ flex: 1 }}>Attended Classes</div>
        </div>
        {Object.entries(subjects).map(([subject, data]) => (
          <SubjectRow key={subject} subject={subject} totalClasses={data.totalClasses} attendedClasses={data.attendedClasses} />
        ))}
      </div> 
        <div style={{margin:"30px"}}>
          <h3>You need to cover for the subjects with attendance marked as red. </h3>
        </div>  
      </div>
    </div> 
      // ======================================================================
     
    );
    
}

export default Attend;
