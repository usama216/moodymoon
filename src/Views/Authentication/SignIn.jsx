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
import { useNavigate } from "react-router-dom";

const SignIn = () => {
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
          display:'flex',
          justifyContent:'center', 
          alignItems:'center',
          boxSizing: "border-box",
          p: "3% 5%",
        }}
      >
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column", 
                m:'auto', 
                height:'85vh'
              }}
            >
              <Box
                sx={{ display: "flex", justifyContent: "center", mb: "2rem" }}
              >
                <img src="logo.svg" alt=""  onClick={()=>navigate('/')} 
                style={{cursor:'pointer'}}/>
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
                      Sign In
                    </Typography>
                    <Typography
                      sx={{
                        color: "black",
                        fontSize: isSmallScreen
                          ? "0.9rem"
                          : isMediumScreen
                          ? "1rem"
                          : "1rem",
                        fontWeight: 400,
                        marginBottom: "0.5rem",
                        textAlign: "center",
                      }}
                    >
                      Welcome! Please enter your details
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

                  <Box
                    sx={{
                      my: "0.5rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt:'1rem'
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <input type="radio" style={{ color: "red" }} />
                      <Typography
                        sx={{
                          color: "black",
                          fontSize: isSmallScreen
                            ? "0.9rem"
                            : isMediumScreen
                            ? "1rem"
                            : "1rem",
                          fontWeight: 400,
                          marginLeft: "0.5rem",
                        }}
                      >
                        Remember for 30 Days
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        color: theme.palette.secondary.main,
                        fontSize: isSmallScreen
                          ? "0.9rem"
                          : isMediumScreen
                          ? "1rem"
                          : "1rem",
                        fontWeight: 400,
                        marginLeft: "0.5rem",
                      }}
                    >
                      Forgot password
                    </Typography>
                  </Box>
                  <Button
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      color: "white",
                      borderRadius: "5px",
                      py: "0.5rem",
                      mt: "1rem",
                      textTransform:'none'
                    }}
                  >
                    Sign In
                  </Button>

                  <Box sx={{display:'flex', alignItems:'center', my:'1.5rem'}}>
                  <Divider
                    sx={{
                      backgroundColor: "lightgray",
                      width: "48%",
                      height: "0.1px",
                      color: "lightgray",
                      
                    }}
                  />
                   <Typography
                      sx={{
                        color:'black',
                        fontSize: isSmallScreen
                          ? "0.9rem"
                          : isMediumScreen
                          ? "1rem"
                          : "1rem",
                        fontWeight: 400,
                        marginLeft: "0.5rem",
                      }}
                    >
                      OR
                    </Typography>
                  <Divider
                    sx={{
                      backgroundColor: "lightgray",
                      width: "48%",
                      height: "0.1px",
                      color: "lightgray",
                    }}
                  />
                  </Box>

                  <Typography
                      sx={{
                        color:'gray',
                        fontSize: isSmallScreen
                          ? "0.9rem"
                          : isMediumScreen
                          ? "1rem"
                          : "1rem",
                        fontWeight: 400,
                        marginLeft: "0.5rem", textAlign:'center'
                      }}
                    >
                      Don’t have an account? <a href="" style={{color:theme.palette.secondary.main}}>Sign Up</a>
                    </Typography>

                </Card>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box sx={{ width:'80vh'}}>
              <img src="/signin.png" alt="" width={"100%"} height={'100%'}/>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SignIn;
