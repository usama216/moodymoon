import { Box, useTheme, useMediaQuery, } from '@mui/material'
import React from 'react'

const Video = () => {
  const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
   <>
   <Box sx={{padding:'0% 5%', position:'relative',
     marginTop: {xs:'2rem', sm:'3rem', md:'4rem', lg:'5rem'}}} >
       <img src="vp.png" alt="" style={{position:'absolute',
              top:isSmallScreen ? '-6rem': isMediumScreen ? '-8rem': '-10rem',
               right:0,
              width:isSmallScreen ? '10rem': isMediumScreen ? '12rem': '15rem',
               zIndex:'-99'
            }} />
    <Box sx={{
        display:'flex', justifyContent:'center',
        
         borderRadius:'30px',
        overflow:'hidden', 
        width:'100%'
    }}>
    <video width="100%" controls autoPlay muted>
  <source src="vd.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
    </Box>
   </Box>
   </>
  )
}

export default Video