import {
  Box,
  Card,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SignIn from "./SignIn";

const SignUp = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          boxSizing: "border-box",
          p: "5%",
        }}
      >
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                m: "auto",
              }}
            >
              <Box
                sx={{ display: "flex", justifyContent: "center", mb: "2rem" }}
              >
                <img
                  src="logo.svg"
                  alt=""
                  onClick={() => navigate("/")}
                  style={{ cursor: "pointer" }}
                />
              </Box>
              <Box>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    p: "2rem",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    borderRadius: "10px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "black",
                        fontSize: isSmallScreen
                          ? "1.1rem"
                          : isMediumScreen
                          ? "1.2rem"
                          : "1.4rem",
                        fontWeight: 600,
                        marginBottom: "0.5rem",
                        textAlign: "center",
                      }}
                    >
                      Sign Up
                    </Typography>
                    <Typography
                      sx={{
                        color: "gray",
                        fontSize: isSmallScreen
                          ? "0.9rem"
                          : isMediumScreen
                          ? "1rem"
                          : "1rem",
                        fontWeight: 400,
                        marginLeft: "0.5rem",
                        textAlign: "center",
                        marginBottom:'2rem'
                      }}
                    >
                      Already have an account?{" "}
                      <a
                       
                        style={{ color: theme.palette.secondary.main }}
                      >
                        Sign in
                      </a>
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: isSmallScreen
                        ? "0.9rem"
                        : isMediumScreen
                        ? "1rem"
                        : "1rem",
                      fontWeight: 400,
                      marginTop: "1rem",
                      //   marginBottom: "0.5rem",
                    }}
                  >
                    First Name
                  </Typography>
                  <TextField
                    id="first-name"
                    variant="outlined"
                    placeholder="Enter Your First Name"
                    fullWidth
                  />
                   <Typography
                    sx={{
                      color: "black",
                      fontSize: isSmallScreen
                        ? "0.9rem"
                        : isMediumScreen
                        ? "1rem"
                        : "1rem",
                      fontWeight: 400,
                      marginTop: "1rem",
                      //   marginBottom: "0.5rem",
                    }}
                  >
                    Last Name
                  </Typography>
                  <TextField
                    id="last-name"
                    variant="outlined"
                    placeholder="Enter Your Last Name"
                    fullWidth
                  />
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: isSmallScreen
                        ? "0.9rem"
                        : isMediumScreen
                        ? "1rem"
                        : "1rem",
                      fontWeight: 400,
                      marginTop: "1rem",
                      //   marginBottom: "0.5rem",
                    }}
                  >
                    Email
                  </Typography>
                  <TextField
                    id="email"
                    variant="outlined"
                    placeholder="Enter Your Email"
                    type="email"
                    fullWidth
                  />

                  <Typography
                    sx={{
                      color: "black",
                      fontSize: isSmallScreen
                        ? "0.9rem"
                        : isMediumScreen
                        ? "1rem"
                        : "1rem",
                      fontWeight: 400,
                      //   marginBottom: "0.5rem",
                      marginTop: "1rem",
                    }}
                  >
                    Password
                  </Typography>
                  <TextField
                    id="password"
                    variant="outlined"
                    placeholder="Enter Your Password"
                    type="password"
                    fullWidth
                  />
                  <Button
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      color: "white",
                      borderRadius: "5px",
                      py: "0.5rem",
                      mt: "1.5rem",
                      textTransform:'none'
                    }}
                  >
                    Create
                  </Button>

                </Card>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box sx={{ width: "100%" }}>
              <img src="/signin.png" alt="" width={"100%"} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SignUp;