import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { green } from "@mui/material/colors";
import { Box, Grid, useTheme, useMediaQuery, } from "@mui/material";
import Faqs from "./Faqs";

const BenefitsofhempProduct = () => {
  const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box sx={{ padding: "2rem 5%",
         backgroundColor: "#f7dba9" ,
         marginTop: {xs:'2rem', sm:'3rem', md:'4rem', lg:'5rem'},
          position:'relative'
          }}>
            <img src="bp1.png" alt="" style={{position:'absolute',
              bottom:0, left:0,
              width:isSmallScreen ? '10rem': isMediumScreen ? '12rem': '15rem'
            }} />
            <img src="/bp2.png" alt="" style={{position:'absolute',
              top:0, right:0,
              width:isSmallScreen ? '10rem': isMediumScreen ? '12rem': '15rem'
            }}/>
        <Grid container spacing={4}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box sx={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'center', 
              height:'100%'
            }}>
              <Typography sx={{ fontSize:isSmallScreen ? '1.3rem': isMediumScreen ? '1.8rem' : "2rem",
                 fontWeight: 700, marginBottom:'1rem' }}>
                Benefits Of Hemp Products
              </Typography>
              <Faqs/>
            </Box>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box
              sx={{ display: "flex",
                 justifyContent:isMediumScreen ? 'center': "end",
                 alignItems: "end" }}
            >
              <img src="/benefitsImage.svg" width={"75%"} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BenefitsofhempProduct;
