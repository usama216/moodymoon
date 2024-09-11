import { Box, Typography, useTheme, useMediaQuery, Grid } from "@mui/material";
import React from "react";
import CustomButton from "../components/Button/CustomButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlogsMain = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const listData = [
    {img:'/blog1.png' , 
        title:'Shyamal Patel',
        heading:'How to Choose High-Quality CBD Products: What to Look For',
        des:'With the growing popularity of CBD, the market is flooded with products, making it essential to know how to identify high-quality options. Here are key factors to consider:'
    },
    {img:'/blog1.png' , 
        title:'Shyamal Patel',
        heading:'How to Choose High-Quality CBD Products: What to Look For',
        des:'With the growing popularity of CBD, the market is flooded with products, making it essential to know how to identify high-quality options. Here are key factors to consider:'
    },
  ]

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Box sx={{padding:'0% 5%'}}>
        <Box
          sx={{
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
              marginBottom: "2rem",
            }}
          >
            Latest News & Blogs
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

        {/* ================================CARDS============================================= */}
        <Grid container spacing={2}>
          <Grid item lg={8} md={12} sm={12} xs={12}>

          <Slider {...settings} sx={{width:'100%', height:'100%'}}>
            {listData.map((row, index)=>(
                <Box key={index} sx={{position:'relative', overflow:'hidden', borderRadius:'10px', 
                    width:'100%', height:'100%'
                }}>
                <img src={row.img} alt=""  width={'100%'} height={'100%'}/>
                <Box sx={{position:'absolute',
                  top:0,
                  left:0,
                  width:'100%',
                   height:'100%',  
                   display:'flex',
                //    alignItems:'end',
                justifyContent:'end', 
                   flexDirection:'column',
                   backgroundColor:'#0000001a', 
                   padding:'1.2rem',
                   boxSizing:'border-box'
                }}>
                    <Typography
                    sx={{
                      color: " #FAC600",
                      fontSize: isSmallScreen
                        ? "1.1rem"
                        : isMediumScreen
                        ? "1.1rem"
                        : "1.2rem",
                      fontWeight: 600,
                      textTransform: "capitalize",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {row.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: isSmallScreen
                        ? "1.2rem"
                        : isMediumScreen
                        ? "1.4rem"
                        : "1.6rem",
                      fontWeight: 600,
                      textTransform: "capitalize",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {row.heading}
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: isSmallScreen
                        ? "0.9rem"
                        : isMediumScreen
                        ? "1rem"
                        : "1rem",
                      fontWeight: 400,
                      textTransform: "capitalize",
                    }}
                  >
                    {row.des}
                  </Typography>
                </Box>
              </Box>
            ))}
          
            </Slider>

          </Grid>

          <Grid item lg={4} md={12} sm={12} xs={12} >

          <Grid container spacing={1} >
          <Grid item lg={12} md={6} sm={12} sx={12} >
          <Box sx={{position:'relative', overflow:'hidden', borderRadius:'10px' }}>
              <img src="/blog2.png" alt=""  width={'100%'}/>
              <Box sx={{position:'absolute',
                top:0,
                left:0,
                width:'100%',
                 height:'98%',
                 display:'flex',
                 alignItems:'end', 
                 backgroundColor:'#0000001a', 
                 padding:'1.2rem',  
                   boxSizing:'border-box'
              }}>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: isSmallScreen
                      ? "1.2rem"
                      : isMediumScreen
                      ? "1.4rem"
                      : "1.5rem",
                    fontWeight: 600,
                    textTransform: "capitalize",
                    
                  }}
                >
                  Is CBD Legal? Navigating the Legal Landscape of CBD Products
                </Typography>
              </Box>
            </Box>
            </Grid>
            <Grid item lg={12} md={6} sm={12} xs={12} >
            <Box sx={{position:'relative', overflow:'hidden', borderRadius:'10px',  }}>
              <img src="/blog2.png" alt=""  width={'100%'} height={'100%'}/>
              <Box sx={{position:'absolute',
                top:0,
                left:0,
                width:'100%',
                 height:'98%',
                 display:'flex',
                 alignItems:'end', 
                 backgroundColor:'#0000001a', 
                 padding:'1.2rem', 
                 boxSizing:'border-box'
              }}>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: isSmallScreen
                      ? "1.2rem"
                      : isMediumScreen
                      ? "1.4rem"
                      : "1.5rem",
                    fontWeight: 600,
                    textTransform: "capitalize",
                    
                  }}
                >
                  Is CBD Legal? Navigating the Legal Landscape of CBD Products
                </Typography>
              </Box>
            </Box>
            </Grid>
          </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BlogsMain;
