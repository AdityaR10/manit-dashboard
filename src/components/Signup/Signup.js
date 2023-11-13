import * as React from 'react';
import { useState } from 'react'; 
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link} from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles'; 
import { signInWithEmailAndPassword } from "firebase/auth"; 
import { auth } from "../../firebase";
import styles from "../../assets/InputControl.module.css"; 
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Navbar from '../Navbar/Navbar';
const defaultTheme = createTheme();

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    schNum:"",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        console.log(res);
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
   
  return (
    <div style={{height:"100vh",background: "linear-gradient(79deg, rgb(27, 94, 127) 14%, rgb(129, 206, 198) 84%)",width:"100vw"}}>
       <Navbar/>
    <ThemeProvider theme={defaultTheme}  sx={{
            height:"50%", 
          }}>
      <Container component="main" maxWidth="xs"  sx={{
            backgroundColor:"white", 
            borderRadius:5, 
            width:"80vw", 
            boxShadow:3
          }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        > <b className={styles.error}>{errorMsg}</b>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box  sx={{ mt: 1 }}>
            <input 
            placeholder="Name" 
            style={{width:"100%",height:56,borderRadius:10,padding:5,paddingLeft:15}}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }>
                 
            </input>
            <input 
            placeholder="Scholar Number" 
            style={{width:"100%",height:56,borderRadius:10,padding:5,paddingLeft:15}}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, schNum: event.target.value }))
            }>
                
            </input>
            <input 
            placeholder="Email Address" 
            style={{width:"100%",height:56,borderRadius:10,padding:5,paddingLeft:15}}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }>
                
            </input>
            <input 
            placeholder="Set Password" 
            style={{width:"100%",height:56,borderRadius:10,padding:5,paddingLeft:15}}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }>
                
            </input>
            <Button
              disabled={submitButtonDisabled}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmission}
            >
              Sign Up
            </Button>
            <Link to="/signin">Login</Link>
          </Box>
        </Box> 
      </Container>
    </ThemeProvider>
  </div>
  );
}

export default Signup;