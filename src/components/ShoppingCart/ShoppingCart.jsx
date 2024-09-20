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

const ShoppingCart = () => {
    const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
    <Box sx={{
    bgcolor:theme.palette.primary.main,
     width:'30rem', height:'100vh', zIndex:'99'
    }}>
       <Box>
       <Typography
                sx={{
                    colorL:'white',
                  fontSize: isSmallScreen
                    ? "1.2rem"
                    : isMediumScreen
                    ? "1.5rem"
                    : "2rem",
                  fontWeight: "600",
                  marginBottom: "1rem",
                }}
              >
                Shopping Cart
              </Typography>
       </Box>
    </Box>
    </>
  )
}

export default ShoppingCart