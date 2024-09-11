import {
  Box,
  Button,
  Divider,
  Grid,
  styled,
  TextField,
  Typography, useTheme, useMediaQuery
} from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBox from "../../../../components/FlexBox/FlexBox";
import Image from "../../../../components/Image/Image";
import CustomButton from "../Button/CustomButton";


const StyledFooter = styled(Box)(({ theme }) => ({
  background: "#17364c",
  color: "white",
  padding: "2rem 5%",
}));

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const currentPath = location.pathname;

  const isHidden =
    currentPath === "/order-confirm" ||
    currentPath === "/login" ||
    currentPath === "/sign-up" ||
    currentPath === "/email-confirmation-otp";

  if (isHidden) {
    return null;
  }

  const textFieldStyle = {
    "& .MuiInputBase-root": {
      border: "none",
      "&:hover": {
        borderColor: "white",
      },
      "&.Mui-focused": {
        boxShadow: "none",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      display: "none",
    },

    borderRadius: "45px",
    backgroundColor: "white",
  };

  const pages = [
    { label: "Home", route: "/" },
    { label: "Find Products", route: "/find-products" },
    { label: "Deck", route: "/deck" },
    { label: "Rims", route: "/rims" },
    { label: "Trailer", route: "/trailer" },
    { label: "Moped Car", route: "/moped-car" },
    { label: "Outlet", route: "/outlet" },
  ];

  const services = [
    { label: "Contact Us", route: "/contact" },
    { label: "Questions & Answers", route: "/faq" },
    { label: "Blog", route: "/blog" },
    { label: "Terms of Purchases", route: "/terms" },
    { label: "Assembly Workshops", route: "/workshops" },
    { label: "EU Labeling of tires", route: "/labeling" },
  ];

  return (
    <StyledFooter>
      <FlexBox
        sx={{
          justifyContent: "center",
          color: "white",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontSize: isSmallScreen ? "2rem": isMediumScreen ? '2.5rem': "3rem",
           fontWeight: 600 }}>
          Subscribe to NewsLetter
        </Typography>

        <Typography sx={{ fontSize:isSmallScreen ?"0.9rem" : "1rem"

         }}>
          Join our newsletter to stay in the know about Moody Moon’s new
          products, special offers and CBD education!
        </Typography>
        <br />
        <br />
        <Box
          sx={{ display: "flex", alignItems: "center", width: "70%" }}
          gap={2}
        >
          <TextField
            // size="small"
            sx={textFieldStyle}
            fullWidth
            placeholder="Input your email address here"
          />
          <CustomButton name='View All' border={'1px solid #f0ab3b'} backgroundColor={'#f0ab3b'} color={'white'}
                 hbackgroundColor={'transparent'} hcolor={'#f0ab3b'} width={'14rem'}/>
        </Box>
      </FlexBox>
      <br />
      <Divider sx={{ backgroundColor: "white" }} />
      <br />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "0.9rem", color: "white" }}>
          Copyright © 2024 Cali Origins. All Rights Reserved.
        </Typography>

        <Box
          sx={{ dispaly: "flex", alignItems: "center", justifyContent: "end" }}
        >
          <Image
            src="/footercard1.svg"
            width="13%"
            sx={{ marginRight: "1rem" }}
          />
          <Image
            src="/footercard2.svg"
            width="13%"
            sx={{ marginRight: "1rem" }}
          />
          <Image
            src="/footercard3.svg"
            width="13%"
            sx={{ marginRight: "1rem" }}
          />
          <Image src="/footercard4.svg" width="13%" />
        </Box>
      </Box>
    </StyledFooter>
  );
};

export default Footer;
