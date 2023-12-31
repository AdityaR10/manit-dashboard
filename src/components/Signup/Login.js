import * as React from 'react';
import { useState } from 'react'; 
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth"; 
import { auth } from "../../firebase";
import Navbar from '../Navbar/Navbar';
import styles from "../../assets/InputControl.module.css";
 
const defaultTheme = createTheme();

const MySignIn=()=> {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const username=auth.currentUser.displayName;
        navigate(`/user/${username}`);
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
      <div style={{height:"100vh", background:" rgb(27,94,127)",
      background: "linear-gradient(79deg, rgba(27,94,127,1) 14%, rgba(129,206,198,1) 84%)"}}>
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
                Sign in
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <input 
                placeholder="Email" 
                style={{width:"100%",height:56,borderRadius:10,padding:5,paddingLeft:15}}
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
                }>
                     
                </input>
                <input 
                placeholder="Password" 
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
                  Sign In
                </Button>
              </Box>
            </Box> 
          </Container>
        </ThemeProvider>
      </div>
  );
}
export default MySignIn;