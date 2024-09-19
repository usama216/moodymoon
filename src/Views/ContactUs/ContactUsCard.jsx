import React from "react";
import { TiLocation } from "react-icons/ti";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";

const ContactUsCard = () => {
  const theme = useTheme();

  const listData = [
    {
      icon: <IoMdMail />,
      title: "Our Location",
      des: "102 Smith Sawyer, Cave Junction,OR 97523",
      last: "View On Google Map",
      divw:'2px', divh:'100%'
    },
    {
      icon: <IoMdMail />,
      title: "Our Location",
      des: "102 Smith Sawyer, Cave Junction,OR 97523",
      last: "View On Google Map",
      divw:'2px', divh:'100%'
    },
    {
      icon: <IoMdMail />,
      title: "Our Location",
      des: "102 Smith Sawyer, Cave Junction,OR 97523",
      last: "View On Google Map",
      divw:'0', divh:'0'
    },
  ];
  return (
    <>
      <Box sx={{ marginTop: "2rem" }}>

       <Box sx={{padding:'0% 5%', position :'relative', zIndex:'5', }}>
       <Box
          sx={{
            padding: "2rem",
            boxShadow: "2px 2px 10px black",
            marginBottom:'-2rem', borderRadius:'5px',
            backgroundColor:'white'
          }}
        >
          <Grid container>
            {listData.map((row, index) => (
              <Grid key={index} item lg={4} md={4} sm={6} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent:'space-between'
                    //  borderRight:'2px solid #195630'
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <IconButton
                      style={{
                        fontSize: "4rem",
                        color: theme.palette.primary.main,
                      }}
                    >
                      {row.icon}
                    </IconButton>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "1.1rem",
                        fontWeight: 500,
                        color: theme.palette.primary.main,
                        marginBottom: "0.5rem",
                      }}
                    >
                      {row.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "1.1rem",
                        fontWeight: 500,
                        color: theme.palette.primary.main,
                        marginBottom: "0.5rem",
                      }}
                    >
                      102 Smith Sawyer, Cave Junction,OR 97523
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "1.1rem",
                        fontWeight: 400,
                        color: "black",
                      }}
                    ></Typography>{" "}
                    <Typography
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: 600,
                        color: "black",
                      }}
                    >
                      View On Google Map
                    </Typography>
                  </Box>
                  <Box>
                    <Divider
                      style={{
                        backgroundColor: "green",
                        height: `${row.divw}`,
                        width:`${row.divh}`,
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
       </Box>
        <Box sx={{position :'relative', zIndex:'-3'}}>
          <img src="/contactcard.png" alt="" style={{width:'100%', height:'30rem'}}/>
        </Box>

      </Box>
    </>
  );
};

export default ContactUsCard;
