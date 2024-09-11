import {
  Box,
  Button,
  Divider,
  Grid,
  styled,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBox from "../../../../components/FlexBox/FlexBox";
import Image from "../../../../components/Image/Image";
import CustomButton from "../Button/CustomButton";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const StyledFooter = styled(Box)(({ theme }) => ({
  background: "#265630",
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
    { label: "Shop All", route: "/" },
    { label: "My Account", route: "/find-products" },
  ];

  const services = [
    { label: "Privacy Policy", route: "/contact" },
    { label: "Return/Refund Policy", route: "/faq" },
    { label: "Term of Services", route: "/blog" },
    { label: "Shipping Policy", route: "/terms" },
  ];

  return (
    <StyledFooter>
      <Grid container spacing={5} sx={{paddingTop:'3rem'}}>
        <Grid item lg={3} sm={6} xs={12}>
          <FlexBox sx={{ gap: "1rem" }}>
            <Image src="/footerlogo.svg" />
          </FlexBox>
          <Typography sx={{ fontSize: "1rem", mt: 3 }}>
            Lorem ipsum dolor sit amet consectetur
          </Typography>
          <FlexBox sx={{ gap: "1rem", mt: 3 }}>
            <FaFacebook style={{ fontSize: "1.4rem" }} />{" "}
            <FaTwitter style={{ fontSize: "1.4rem" }} />{" "}
            <FaLinkedin style={{ fontSize: "1.4rem" }} />
          </FlexBox>
        </Grid>

        <Grid item lg={3} sm={6} xs={12}>
          <Typography sx={{ fontSize: "1.4rem", fontWeight: 700 }}>
            Quick Links
          </Typography>

          {pages.map((page, idx) => (
            <Typography
              key={idx}
              sx={{
                mt: idx === 0 ? 3 : 2,
                cursor: "pointer",
                fontSize: "1.1rem",
              }}
              onClick={() => navigate(page.route)}
            >
              {page.label}
            </Typography>
          ))}
        </Grid>

        <Grid item lg={3} sm={6} xs={12}>
          <Typography sx={{ fontSize: "1.4rem", fontWeight: 700 }}>
            Polices
          </Typography>
          {services.map((service, idx) => (
            <Typography
              key={idx}
              sx={{
                mt: idx === 0 ? 3 : 2,
                cursor: "pointer",
                fontSize: "1.1rem",
              }}
              onClick={() => navigate(service.route)}
            >
              {service.label}
            </Typography>
          ))}
        </Grid>

        <Grid item lg={3} sm={6} xs={12}>
          <Typography sx={{ fontSize: "1.4rem", fontWeight: 700 }}>
            Contact Info
          </Typography>
          <Typography sx={{ mt: 3, fontSize: "1.1rem", mb: 2 }}>
            +92-300-0000000
          </Typography>
          <Typography sx={{ fontSize: "1.1rem", mb: 2 }}>
            moodymoonhemp@gmail.com
          </Typography>
          <Typography sx={{ fontSize: "1.1rem", mb: 2 }}>
            102 Smith Sawyer, Cave Junction - OR 97523
          </Typography>
        </Grid>
      </Grid>

      <br />
      <br />
      <br />
      <Divider sx={{ backgroundColor: "white" }} />

      <br />
      <br />
      <br />

      <FlexBox
        sx={{
          justifyContent: "center",
          color: "white",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: isSmallScreen
              ? "2rem"
              : isMediumScreen
              ? "2.5rem"
              : "3rem",
            fontWeight: 600,
          }}
        >
          Subscribe to NewsLetter
        </Typography>

        <Typography sx={{ fontSize: isSmallScreen ? "0.9rem" : "1rem" }}>
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
          <CustomButton
            name="View All"
            border={"1px solid #51a2dc"}
            backgroundColor={"#51a2dc"}
            color={"white"}
            hbackgroundColor={"transparent"}
            hcolor={"#51a2dc"}
            width={"14rem"}
          />
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
