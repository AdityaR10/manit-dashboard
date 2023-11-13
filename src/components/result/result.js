import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom"; 
import NewNavbar from "../dashboard/newNav/Navbar";
import { Box,Grid } from "@mui/material"; 
import './result.css'
import Paper from '@mui/material/Paper';
import manit from "../../assets/images/bgmanit.png"
import { styled } from '@mui/material/styles';
import { auth } from "../../firebase";
import { signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import studentData from "../../assets/result.json"
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
const SemesterRow = ({ semesterNumber, cgpa, sgpa }) => {
    return (
      <div style={{ display: 'flex', borderBottom: '1px solid #ccc', padding: '10px',margin:"10px" }}>
        <div style={{ flex: 1 }}>{semesterNumber}</div>
        <div style={{ flex: 1 }}>{cgpa}</div>
        <div style={{ flex: 1 }}>{sgpa}</div>
      </div>
    );
  };
  

function Result() {
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
  const { studentName, semesters } = studentData;
 
    
    return (
      <div> 
      <NewNavbar/>
      <div className="dashboard-body" style={{width:"100vw",height:"100vh",paddingTop:"5vh",display:"flex",flexDirection: "column",alignItems:"center",backgroundImage:`url(${manit})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
      <div style={{backgroundColor:"white",background:"rgb(0,0,0,0.3)",padding:"10px",borderRadius:"20px",width:"60%"}}>
        <h2>{studentName}'s Results</h2>
        <div style={{ display: 'flex', borderBottom: '1px solid #ccc', padding: '10px', fontWeight: 'bold' }}>
        <div style={{ flex: 1 }}>Semester</div>
        <div style={{ flex: 1 }}>CGPA</div>
        <div style={{ flex: 1 }}>SGPA</div>
      </div>
      {semesters.map(({ semesterNumber, cgpa, sgpa }) => (
        <SemesterRow
          key={semesterNumber}
          semesterNumber={semesterNumber}
          cgpa={cgpa}
          sgpa={sgpa}
        />
      ))}
      </div> 
           
      </div>
    </div> 
      // ======================================================================
     
    );
    
}

export default Result;
