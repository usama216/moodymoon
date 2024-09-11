import React from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
  Rating,
} from "@mui/material";
import { FiArrowUpRight } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ProductFeature.module.css"; // Import CSS Module
import CustomButton from "../components/Button/CustomButton";

const ProductFeature = () => {
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
    slidesToShow: 3,
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
      title: "Gorilla Glue + Diablo OG - THC A Moon Rocks",
      name: "MOODY MOOD HEMP",
      icon: <FiArrowUpRight />,
    },
    {
      imag: "/category22.png",
      title: "Jack Herer - THC A Exotic Indoor PreRoll",
      name: "MOODY MOOD HEMP",
      icon: <FiArrowUpRight />,
    },
    {
      imag: "/category33.png",
      title: "RS-11 + Blackberry Kush - THC A Moon Rocks",
      name: "MOODY MOOD HEMP",
      icon: <FiArrowUpRight />,
    },
    // {
    //   imag: "/category44.png",
    //   title: "THCA Flowers (17)",
    //   name: "MOODY MOOD HEMP",
    //   icon: <FiArrowUpRight />,
    // },
  ];

  return (
    <Box sx={{ padding: "0% 5%", marginTop: "4rem" }}>
      <Box>
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
          Featured Products
        </Typography>
      </Box>
      <Box>
        <div className={styles.sliderContainer}>
          <Slider {...settings}>
            {listData.map((row, index) => (
              <Box sx={{ marginRight: "5rem" }}>
                <Box
                  key={index}
                  className={styles.slickSlide} // Apply CSS Module class
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginRight: "4rem",
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
                          backgroundColor: "#469547",
                          padding: "0.5rem 1rem",
                          borderRadius: "100px",
                          fontSize: isSmallScreen
                            ? "0.9rem"
                            : isMediumScreen
                            ? "1rem"
                            : "1rem",
                          fontWeight: 800,
                          textTransform: "uppercase",
                          
                        }}
                      >
                        {row.name}
                      </Typography>
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: isSmallScreen
                            ? "1.5rem"
                            : isMediumScreen
                            ? "2.5rem"
                            : "2.8rem",
                          fontWeight: 600,
                          textTransform: "uppercase",
                        }}
                      >
                        {row.title}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{
                  marginTop:'2rem'
                }}>
                  <Typography
                    sx={{
                      color: "#469547",
                      fontSize: isSmallScreen
                        ? "1.2rem"
                        : isMediumScreen
                        ? "1.5rem"
                        : "1.8rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                    }}
                  >
                    Regular price$13.99
                  </Typography>
                  <Box sx={{
                    display:'flex',
                    alignItems:'center'
                  }}>
                    <Rating
                      // size="small"
                      defaultValue={5}
                      sx={{
                        "& .MuiRating-iconFilled": {
                          color: "orange", // Filled stars color
                        },
                      }}
                    />
                    <Typography
                      sx={{
                        color: "#6d6d6d",
                        fontSize: isSmallScreen
                          ? "0.9rem"
                          : isMediumScreen
                          ? "1rem"
                          : "1rem",
                        fontWeight: 500,
                        // textTransform: "uppercase",
                      }}
                    >
                      (0)Reviews
                    </Typography>
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
          backgroundColor={"#265630"}
          color={"white"}
          hbackgroundColor={"transparent"}
          hcolor={"#265630"}
          name="Learn More"
        />
      </Box>
    </Box>
  );
};

export default ProductFeature;
