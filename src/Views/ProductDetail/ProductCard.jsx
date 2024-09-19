import { Box, Typography, useTheme, useMediaQuery, Divider } from '@mui/material'
import React from 'react'
import { IoMdRadioButtonOn } from "react-icons/io";

const ProductCard = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    

    const listData =[
        { icon:'IoMdRadioButtonOn', title:' Strain:', des:'titan'},
        { icon:'IoMdRadioButtonOn', title:' Strain:', des:'titan'},
        { icon:'IoMdRadioButtonOn', title:' Strain:', des:'titan'},
        { icon:'IoMdRadioButtonOn', title:' Strain:', des:'titan'},
    ]
  return (
   <>
    <Box sx={{
        padding:'3% 5%'
    }}>
    <Typography
              sx={{
                cursor: "pointer",
                fontSize: isSmallScreen ? "1.2rem": isMediumScreen ? "1.5rem": "1.8rem",
                fontWeight:'600',
                marginBottom:'0.5rem'
              }}
            >
            Description
            </Typography>
            <Divider sx={{
                width:'100%'
            }}/>
            {listData.map((row,index)=>(
                <Box key={index} sx={{display:'flex', alignItems:'center', marginTop:'0.5rem' , marginBottom:'1rem'}}>
                <IoMdRadioButtonOn color={"#51a2dc"}/>
                 <Typography
                  sx={{
                    
                    cursor: "pointer",
                    fontSize: isSmallScreen ? "0.9rem": "1.1rem",
                    marginLeft:'1rem'
                  }}
                >
                  <strong>{row.title}</strong> {row.des}
                </Typography>
                 </Box>
            ))}
    
    </Box>
   </>
  )
}

export default ProductCard