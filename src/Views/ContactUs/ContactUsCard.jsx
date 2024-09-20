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
  useMediaQuery,
  useTheme,
} from "@mui/material";

const ContactUsCard = () => {
  const theme = useTheme();
const isSmall = useMediaQuery(theme.breakpoints.down('md'))
  const listData = [
    {
      icon: <TiLocation />,
      title: "Our Location",
      des: "102 Smith Sawyer, Cave Junction, OR 97523",
      last: "View On Google Map",
      link: "https://www.google.com/maps/search/?api=1&query=102+Smith+Sawyer,+Cave+Junction,+OR+97523",
    },
    {
      icon: <IoMdMail />,
      title: "Email Us",
      des: "Email us for assistance; we work closely with you.",
      last: "moodymoonhemp@gmail.com",
      link: "mailto:moodymoonhemp@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: "Call Us",
      des: "Call for assistance; we collaborate closely to help you.",
      last: "Give us a call",
      link: "tel:+1234567890", // Replace with the actual phone number
    },
  ];

  return (
    <Box sx={{ marginTop: "4rem" }}>
      <Box sx={{ padding: "0% 5%", position: "relative", zIndex: "5" }}>
        <Box
          sx={{
            // padding: "2rem",
            boxShadow: "2px 2px 10px grey",
            marginBottom: "-2rem",
            borderRadius: "5px",
            backgroundColor: "white",
          }}
        >
          <Grid container spacing={2}>
            {listData.map((row, index) => (
              <Grid key={index} item lg={4} md={4} sm={6} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: { xs: "0rem 1rem", md: "2rem" },
                  }}
                >
                  <IconButton
                    style={{
                      fontSize:isSmall ? "2rem": "4rem",
                      color: theme.palette.primary.main,
                    }}
                  >
                    {row.icon}
                  </IconButton>
                  <Box sx={{ flexGrow: 1, paddingLeft: "1rem" }}>
                    <Typography
                      sx={{
                        fontSize: { xs: "1rem", md: "1.1rem" },
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                        marginBottom: "0.5rem",
                      }}
                    >
                      {row.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.8rem", md: "1.1rem" },
                        fontWeight: 400,
                        color: "black",
                      }}
                    >
                      {row.des}
                    </Typography>
                    <br />
                    <Typography
                      component="a"
                      href={row.link}
                      sx={{
                        textDecoration: 'none',
                        fontSize: { xs: "0.8rem", md: "1.2rem" },
                        fontWeight: 600,
                        color: "black",
                      }}
                    >
                      {row.last}
                    </Typography>
                    
                  </Box>

                  {index < listData.length - 1 && (
                    <Divider
                      orientation="vertical"
                      sx={{
                        display:isSmall ? 'none':'block',
                        height: "100px",
                        borderColor: "black",
                        marginLeft: "1rem",
                        marginRight: "1rem",
                      }}
                    />
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box sx={{ position: "relative", zIndex: "-3" }}>
        <img
          src="/contactcard.png"
          alt=""
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
    </Box>
  );
};

export default ContactUsCard;
