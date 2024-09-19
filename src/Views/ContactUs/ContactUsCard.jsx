import React from "react";
import { TiLocation } from "react-icons/ti";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { Box, Grid, useTheme } from "@mui/material";

const ContactUsCard = () => {
    const theme = useTheme();
  return (
    <>
      <Box>
        <Box>
          <Grid container>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box>
                <Box>
                  <TiLocation />
                </Box>
                <Box>
                  <Typography
                    sx={{ fontSize: "1rem",
                         color:theme.palette.primary.main }}
                  >
                    Our Location
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <img src="/contactcard.png" alt="" />
        </Box>
      </Box>
    </>
  );
};

export default ContactUsCard;
