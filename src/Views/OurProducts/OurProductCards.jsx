import React from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
  Grid,
} from "@mui/material";
import { FiArrowUpRight } from "react-icons/fi";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import styles from "../Landing/Cetegory/Category.module.css";
// import CustomButton from "../Landing/components/Button/CustomButton"


const OurProductCards = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoPlay: true,
    pauseOnHover: false,
    slidesToShow: 4,
    // autoplay: true,
    // speed: 3000,
    // autoplaySpeed: 3000,
    // pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const listData = [
    {
      imag: "/category11.png",
      title: "THCA Flowers (17)",
      icon: <FiArrowUpRight />,
    },
    {
      imag: "/category22.png",
      title: "THCA Flowers (17)",
      icon: <FiArrowUpRight />,
    },
    {
      imag: "/category33.png",
      title: "THCA Flowers (17)",
      icon: <FiArrowUpRight />,
    },
    {
      imag: "/category44.png",
      title: "THCA Flowers (17)",
      icon: <FiArrowUpRight />,
    },
    {
        imag: "/category11.png",
        title: "THCA Flowers (17)",
        icon: <FiArrowUpRight />,
      },
      {
        imag: "/category22.png",
        title: "THCA Flowers (17)",
        icon: <FiArrowUpRight />,
      },
      {
        imag: "/category33.png",
        title: "THCA Flowers (17)",
        icon: <FiArrowUpRight />,
      },
      {
        imag: "/category44.png",
        title: "THCA Flowers (17)",
        icon: <FiArrowUpRight />,
      },
  ];

  return (
    <Box sx={{ padding: "0% 5%", marginTop: "4rem", boxSizing:'border-box' }}>
      <Grid container spacing={0}>
            {listData.map((row, index) => (
        <Grid key={index} lg={3} md={4} sm={6} xs={12} >
             <Box  sx={{marginRight:'0rem',}}>
               <Box 
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  overflow: "hidden",
                //   marginRight:'4rem'
                }}
              >
                <img
                  src={row.imag}
                  alt=""
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '10px'
                  }}
                />
                <Box  sx={{
                     width:' 100%',
                     height:'100%',
                     display: 'flex',
                     alignItems: 'flex-end',
                     justifyContent: 'center',
                     position: 'absolute',
                     top: 0,
                     left: 0,
                     padding:'16px',
                     /* background: rgba(0, 0, 0, 0.5); */
                     boxSizing: 'border-box',
                }}>
                  <Box  sx={{
                    width:'100%',
                    display:'flex',
                    flexDirection:'column',  
                    justifyContent:'end',    
                    alignItems:'start',
                    padding:'10px'
                  }}>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: isSmallScreen
                          ? "1rem"
                          : isMediumScreen
                          ? "1.1rem"
                          : "1.1rem",
                        fontWeight: 500,
                        textTransform: "uppercase",
                        marginBottom:'1rem'
                      }}
                    >
                      {row.title}
                    </Typography>
                    <IconButton
                      className="icon"
                      sx={{
                        fontSize: isSmallScreen ? "1.1rem" : "1.4rem",
                        color: "white",
                        backgroundColor: "transparent",
                      }}
                    >
                        <Typography
                      sx={{
                        color: "white",
                        fontSize: isSmallScreen
                          ? "0.9rem"
                          : isMediumScreen
                          ? "1rem"
                          : "1rem",
                        fontWeight: 500,
                        // textTransform: "uppercase",
                        marginRight:'1rem'
                      }}
                    >
                      View
                    </Typography>
                      <FiArrowUpRight
                        style={{ backgroundColor: "transparent" }}
                      />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
             </Box>
        </Grid>
            ))}
      </Grid>
    </Box>
  );
};

export default OurProductCards;
