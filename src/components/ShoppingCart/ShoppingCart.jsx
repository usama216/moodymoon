import {
    Box,
    Typography,
    useTheme,
    useMediaQuery,
    Divider,
    Grid,
    Rating,
    IconButton,
  } from "@mui/material";
import React from 'react'
import { IoMdClose } from "react-icons/io";
import { IoIosClose } from "react-icons/io";



const ShoppingCart = ({closecart}) => {
    const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  console.log('carcardcar', closecart)

  return (
    <>
    <Box sx={{
    bgcolor:theme.palette.primary.main,
     width:'30rem', height:'100vh', zIndex:'99', p:3
    }}>
       <Box sx={{display:'flex', justifyContent:'space-between'}}>
       <Typography
                sx={{
                    colorL:'white',
                  fontSize: isSmallScreen
                    ? "1.2rem"
                    : isMediumScreen
                    ? "1.5rem"
                    : "2rem",
                  fontWeight: "600",
                  color:'white'
                }}
              >
                Shopping Cart
              </Typography>
              <IconButton 
              onClick={closecart}
              >
              <IoMdClose  style={{fontSize:'2.5rem', p:2, backgroundColor:'#ffffff49', borderRadius:'100px', color:'white'}}/>
              </IconButton>
       </Box>

       <Divider sx={{backgroundColor:'lightgray', width:'100%', height:'0.1px', color:'lightgray', my:3}}/>


    </Box>
    </> 
  )
}

export default ShoppingCart