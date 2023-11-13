import React from "react";
import { Link } from "react-router-dom"; 
import Navbar from "../Navbar/Navbar";
import NewNavbar from "../dashboard/newNav/Navbar";
import { Box } from "@mui/material";
import {motion} from "framer-motion";
import './home.css'
import manit from "../../assets/images/bgmanit.png"
import { auth } from "../../firebase";
const boxStyles={
  makeTranparent:"rgb(0,0,0,0.3);"
};
function Home() {
  const [newNav,setNav]=React.useState(false);
  const [name,setName]=React.useState("null");
  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
         setNav(true);
         setName(user.displayName);
    }
    });
  }, []);
  return (
    <div> 
      <Navbar/>
      <div className="dashboard-body" style={{width:"100vw",height:"100vh",paddingTop:"5vh",display:"flex",flexDirection: "column",alignItems:"center",backgroundImage:`url(${manit})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
        <Box sx={{boxShadow: 3,width:"80vw",textAlign:"center",height:"fit-content",backgroundColor:"white",marginLeft:"2.5vw",borderRadius:10,padding:2,background:boxStyles.makeTranparent }}>
           <motion.h1
           initial={{scale:0,opacity:0}}
           animate={{scale:1,opacity:1}}
           transition={{duration:2}}>
            Welcome to Students Dashboard MANIT</motion.h1>
        </Box>
        <Box sx={{marginTop:"20px",textAlign:"center",padding:"5px",width:"80vw"}}>
          <h2>Get all Academics and College related updates here</h2>
        </Box>
      </div>
    </div> 
  );
}

export default Home;
