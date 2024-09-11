import React from 'react'
import { Box, Typography, useTheme, useMediaQuery, Grid } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomButton from '../components/Button/CustomButton';

const Testimonial = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  
  return (
   <>
   <Box sx={{ boxSizing:'border-box', padding:'5%'}}>
   <Grid container spacing={2}>
   <Grid item lg={4} md={4} sm={12} xs={12}>
    <Box>
        <img src="/test1.png" alt="" width={'450rem'} />
    </Box>
   </Grid>
   <Grid item lg={8} md={8} sm={12} xs={12}>
    <Box sx={{
       boxSizing:'border-box',
       width:'100%'
    }}>
    <Box
          sx={{
            width:'100%',
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              color: "black",
              fontSize: isSmallScreen
                ? "1.5rem"
                : isMediumScreen
                ? "2.5rem"
                : "3rem",
              fontWeight: 600,
              textTransform: "capitalize",
              marginBottom: "4rem",
            }}
          >
            What Our Clients Say
          </Typography>
          <Box>
            <CustomButton
              border={"1px solid #265630"}
              backgroundColor={"#265630"}
              color={"white"}
              hbackgroundColor={"transparent"}
              hcolor={"#265630"}
              name="View All"
            />
          </Box>
        </Box>

        <Box sx={{
            position:'relative',
        }}>
            <img src="/testqoute.png" alt="" style={{position:'absolute', left:10, top:"-3rem" , 
                width:isSmallScreen
                ? "5rem"
                : isMediumScreen
                ? "7rem"
                : "9rem",
                }} />
        <Typography
            sx={{
              color: "black",
              fontSize: isSmallScreen
                ? "1.2rem"
                : isMediumScreen
                ? "1.5rem"
                : "2rem",
              fontWeight: 500,
              textTransform: "capitalize",
              marginBottom: "2rem",
              
            }}
          >
            Absolutely love the gummies! They help me unwind after a long day without any of the grogginess. Plus, they taste amazing!
          </Typography>
        </Box>

        <Box>
        <Typography
            sx={{
              color: "black",
              fontSize: isSmallScreen
                ? "1.2rem"
                : isMediumScreen
                ? "1.5rem"
                : "2rem",
              fontWeight: 500,
              textTransform: "capitalize",
              marginBottom: "2rem",
              
            }}
          >
            Sara T.
          </Typography>
        </Box>

    </Box>
   </Grid>
   </Grid>
   </Box>
   </>
  )
}

export default Testimonial