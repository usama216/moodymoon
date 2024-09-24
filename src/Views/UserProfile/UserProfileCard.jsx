import {
  Avatar,
  Box,
  Card,
  Typography,
  useTheme,
  useMediaQuery,
  Modal,
  Button,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import CustomButton from "../Landing/components/Button/CustomButton";
import { BorderBottom, CloudDone, Translate } from "@mui/icons-material";
import Btn from "../../components/Btn/Btn";
import { FiArrowUpRight } from "react-icons/fi";

const UserProfileCard = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [openModal, setOpenModal] = useState(false);
  console.log("modalalalalalla", openModal);

  return (
    <>
      <Card
        sx={{
          boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          height: isMediumScreen ? "auto" : "80vh",

          boxSizing: "border-box",
        }}
      >
        <Box>
          <img
            src="/userprofilebg.png"
            alt=""
            style={{ height: isSmallScreen ? "13rem" : "20rem" }}
            width={"100%"}
          />
        </Box>
        <Box
          sx={{
            p: isSmallScreen
              ? "0rem 1.5rem 1.5rem 1.5rem"
              : "0rem 3rem 3rem 3rem",
            mt: isSmallScreen ? "-3rem" : "-4rem",
          }}
        >
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Avatar
              sx={{
                width: isSmallScreen ? "5rem" : "8rem",
                height: isSmallScreen ? "5rem" : "8rem",
                border: "5px solid white",
              }}
            >
              <img src="/user.jpg" alt="" width={"100%"} height={"100%"} />
            </Avatar>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: "1rem",
            }}
          >
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontSize: isSmallScreen
                  ? "1.2rem"
                  : isMediumScreen
                  ? " 1.4rem"
                  : "1.5rem",
                fontWeight: 600,
              }}
            >
              Dr. Donna Little
            </Typography>
            <a
              href=""
              style={{
                color: theme.palette.secondary.main,
                fontSize: isSmallScreen
                  ? "0.9rem"
                  : isMediumScreen
                  ? " 1rem"
                  : "1rem",
                fontWeight: 400,
              }}
            >
              Log out
            </a>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mt: "1rem" }}>
            <Typography
              sx={{
                color: "black",
                fontSize: isSmallScreen
                  ? "1rem"
                  : isMediumScreen
                  ? " 1.2rem"
                  : "1.2rem",
                fontWeight: 600,
                marginRight: "1rem",
              }}
            >
              Account detail:
            </Typography>
            <Box>
              <img src="/flag.png" alt="" width={"25rem"} />
            </Box>
            <Typography
              sx={{
                color: "gray",
                fontSize: isSmallScreen
                  ? "0.9rem"
                  : isMediumScreen
                  ? " 1rem"
                  : "1rem",
                fontWeight: 400,
                marginLeft: "0.5rem",
              }}
            >
              Dr. Donna Little,United States
            </Typography>
          </Box>

          <Box
            sx={{ display: "flex", gap: 5, alignItems: "center", mt: "1rem" }}
          >
            <Button
              onClick={() => setOpenModal(!openModal)}
              sx={{
                textTransform: "none",
                color: theme.palette.primary.main,
                fontSize: isSmallScreen ? "0.9rem" : "1rem",
                p: "0",
                fontWeight: "600",
                borderBottom: "1px solid #265630",
                borderRadius: "0",
                // paddingBottom:'-1rem'
              }}
            >
              View Address 1
              <span style={{ marginLeft: "1rem" }}>
                <FiArrowUpRight
                  style={{
                    fontSize: isSmallScreen ? "1.1rem" : "1.3rem",
                    marginTop: "0.5rem",
                    // padding:'0rem',
                    // margin:'0'
                  }}
                />
              </span>
            </Button>

            <Button
              onClick={() => setOpenModal(!openModal)}
              sx={{
                textTransform: "none",
                color: theme.palette.primary.main,
                fontSize: isSmallScreen ? "0.9rem" : "1rem",
                fontWeight: "600",
                borderBottom: "1px solid #265630",
                borderRadius: "0",
                // paddingBottom:'-1.5rem'
              }}
            >
              + Add New Address
            </Button>

            {/* <CustomButton
              border={"1px solid white"}
              backgroundColor={"white"}
              color={theme.palette.primary.main}
              hbackgroundColor={'transparent'}
              hcolor={theme.palette.primary.main}
              name="View Address 1"
              p='0'
              pb='-1rem'
              sp='0'
              bb={'1px solid #265630'}
              br='0'
              
            />
            
            <CustomButton
            onClick={()=>setOpenModal(!openModal)}
              border={"1px solid white"}
              backgroundColor={"white"}
              color={theme.palette.primary.main}
              hbackgroundColor={'transparent'}
              hcolor={theme.palette.primary.main}
              name="+Add New Address"
              p='0'
              pb='-1rem'
              sp='0'
              bb={'1px solid #265630'}
              br='0'
              arrow='none'
            /> */}
          </Box>
        </Box>
      </Card>

      {/* ===================ADD NEW ADDRESS MODEL======================================= */}
      <Box>
        <Modal
          open={openModal}
          onClose={() => setOpenModal(!openModal)}
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              bgcolor: "white",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "Translate(-50%, -50%)",
              height: "85vh",
              overflow: "auto",
              p: "2rem",
              width:isSmallScreen ? '65%': isMediumScreen ? '60%':'auto'
            }}
          >
            <Typography
              sx={{
                color: theme.black,
                fontSize: isSmallScreen
                  ? "1.2rem"
                  : isMediumScreen
                  ? " 1.4rem"
                  : "1.5rem",
                fontWeight: 600,
                textAlign: "center",
                mb: "0.5rem",
              }}
            >
              Add Address
            </Typography>
            <Typography
              sx={{
                color: theme.black,
                fontSize: isSmallScreen
                  ? "0.9rem"
                  : isMediumScreen
                  ? " 1rem"
                  : "1rem",
                fontWeight: 400,
                textAlign: "center",
                mb: "1rem",
              }}
            >
              Return to Account details
            </Typography>
            <Box>
              <Btn
                children={"Add A New Address"}
                sx={{
                  width: "100%",
                  color: theme.palette.primary.main,
                  color: "white",
                  py:isSmallScreen ? "0.5rem": "1rem",
                  textTransform:'capitalize',
                }}
              />
              <Typography
                sx={{
                  color: theme.black,
                  fontSize: isSmallScreen
                    ? "1.2rem"
                    : isMediumScreen
                    ? " 1.4rem"
                    : "1.5rem",
                  fontWeight: 600,

                  my:"1rem",
                  textTransform:'capitalize',
                }}
              >
                Add a new address
              </Typography>

              <Grid container spacing={2} marginBottom={"1rem"}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <TextField sx={{
                    bgcolor:'#f1f1f1'
                  }}
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    placeholder="First Name"
                    
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <TextField
                  sx={{
                    bgcolor:'#f1f1f1'
                  }}
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    placeholder="Last Name "
                  />
                </Grid>
              </Grid>
              <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                placeholder="Company"
                style={{ marginBottom: "1rem",backgroundColor:'#f1f1f1' }}
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                placeholder="Address 1"
                style={{ marginBottom: "1rem",backgroundColor:'#f1f1f1' }}
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                placeholder="Address 2"
                style={{ marginBottom: "1rem", backgroundColor:'#f1f1f1'}}
                />
              <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                placeholder="City"
                style={{ marginBottom: "1rem" , backgroundColor:'#f1f1f1'}}
              />
               <Typography
                      sx={{
                        color: "black",
                        fontSize: isSmallScreen
                          ? "0.9rem"
                          : isMediumScreen
                          ? "1rem"
                          : "1rem",
                        fontWeight: 600
                        //   marginBottom: "0.5rem",
                      }}
                    >
                     Country/region
                    </Typography>
              <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
                <InputLabel id="country" color={theme.palette.primary.main}>___</InputLabel>
                <Select
                sx={{backgroundColor:'#f1f1f1'}}
                  labelId="country"
                  id="outlined-select"
                  variant="outlined"
                >
                  <MenuItem value="phone1">country 1</MenuItem>
                  <MenuItem value="phone2">country 2</MenuItem>
                  <MenuItem value="phone3">country 3</MenuItem>
                </Select>
              </FormControl>

              <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                placeholder="Postal/ZIP Code"
                style={{ marginBottom: "1rem",backgroundColor:'#f1f1f1' }}
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                fullWidth
                placeholder="Phone"
                style={{ marginBottom: "1rem",backgroundColor:'#f1f1f1' }}
              />

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

              <Box sx={{ mt: "1.5rem", display: "flex", gap: 2 }}>
                <Button
                  fullWidth
                  sx={{
                    bgcolor: "white",
                    border: "1px solid gray",
                    color: "black",
                    borderRadius: "5px",
                    py: "0.5rem",
                    // mt: "1.5rem",
                    textTransform: "none",
                  }}
                >
                  Cancel
                </Button>
                <Button
                  fullWidth
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    color: "white",
                    borderRadius: "5px",
                    py: "0.5rem",
                    // mt: "1.5rem",
                    textTransform: "none",
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Card>
        </Modal>
      </Box>
    </>
  );
};

export default UserProfileCard;
