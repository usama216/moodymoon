import { Box, Grid, Typography, useTheme, useMediaQuery, } from "@mui/material";
import React from "react";
import Image from "../../../components/Image/Image";

const FounderMessage = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box sx={{ padding: "3rem 5%" }}>
        <Grid container spacing={4} sx={{ alignItems: "center" }}>
          <Grid item lg={3.5} md={3.5} sm={12} xs={12} sx={{display:'flex'}}>
            {/* <Box sx={{
              width:'100%', display:'flex',
              justifyContent:'start'
            }}> */}
              <img src="/shayamal2.svg" width="100%" height={"400rem"} text-align={'start'} />
            {/* </Box> */}
          </Grid>

          <Grid item lg={7.5} md={7.5} sm={12} xs={12}>
            <Typography sx={{ fontSize:isSmallScreen ? '1.3rem': isMediumScreen ? '1.8rem' : "2rem",
              fontWeight: 700 }}>
              Founder Message
            </Typography>
            <br />
            <Typography sx={{ fontSize:isSmallScreen ? '0.9rem': "1rem", }}>
              Cali Origins a Holistic Approach to Wellness is the creation of
              our visionary founder, Minhaz Mitha, a dedicated healthcare
              professional with a passion for natural wellness. Inspired by his
              experiences working in the healthcare industry, Minhaz Mitha
              recognized the growing demand for effective, plant-based solutions
              that support overall well-being. Driven by a desire to empower
              individuals to take control of their health, As a California
              native, I've always been inspired by the state's focus on
              wellness. 
            </Typography>
            <br />

            <Typography sx={{ fontSize:isSmallScreen ? '0.9rem': "1rem", }}>
            I'm proud to introduce Cali Origin, a brand dedicated to
              providing natural, effective products to the people of California
              set out to develop a line of natural products that harness the
              power of botanicals. With a deep understanding of the human body
              and the science behind natural compounds, Minhaz Mitha carefully
              curated a collection of products designed to enhance vitality and
              promote a balanced lifestyle.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FounderMessage;
