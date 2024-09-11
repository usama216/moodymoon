import React from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { FiArrowUpRight } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Category.module.css"; // Import CSS Module
import CustomButton from "../components/Button/CustomButton";

const Category = () => {
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
  ];

  return (
    <Box sx={{ padding: "0% 5%", marginTop: "4rem" }}>
      <Box>
        <Typography
          sx={{
            color: "#17364c",
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
          See the Categories
        </Typography>
      </Box>
      <Box>
        <div className={styles.sliderContainer}>
          <Slider {...settings}>
            {listData.map((row, index) => (
             <Box sx={{marginRight:'5rem'}}>
               <Box
                key={index}
                className={styles.slickSlide} // Apply CSS Module class
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  overflow: "hidden",
                  marginRight:'4rem'
                }}
              >
                <img
                  src={row.imag}
                  alt=""
                  className={styles.cardImage} // Apply CSS Module class
                />
                <Box className={styles.overlay}>
                  <Box className={styles.textBox}>
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
                      <FiArrowUpRight
                        style={{ backgroundColor: "transparent" }}
                      />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
             </Box>
            ))}
          </Slider>
        </div>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "3rem",
        }}
      >
        <CustomButton
          border={"1px solid #17364c"}
          backgroundColor={"#17364c"}
          color={"white"}
          hbackgroundColor={"transparent"}
          hcolor={"#17364c"}
          name="Learn More"
        />      
      </Box>
    </Box>
  );
};

export default Category;
