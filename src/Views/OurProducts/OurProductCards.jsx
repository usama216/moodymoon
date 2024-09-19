import {
  Box,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Rating,
} from "@mui/material";
import React from "react";

const OurProductCards = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

 const listData =[
    {img:'/OPcard1.png' , title:'Ice Cream Cake - THC A Exotic Indoor PreRoll' , price:'12.99' , star:'5' , review:'6'},
    {img:'/OPcard1.png' , title:'Ice Cream Cake - THC A Exotic Indoor PreRoll' , price:'12.99' , star:'5' , review:'10'},
    {img:'/OPcard1.png' , title:'Ice Cream Cake - THC A Exotic Indoor PreRoll' , price:'12.99' , star:'4' , review:'64'},
    {img:'/OPcard1.png' , title:'Ice Cream Cake - THC A Exotic Indoor PreRoll' , price:'12.99' , star:'3' , review:'6'},
    {img:'/OPcard1.png' , title:'Ice Cream Cake - THC A Exotic Indoor PreRoll' , price:'12.99' , star:'5' , review:'65'},
    {img:'/OPcard1.png' , title:'Ice Cream Cake - THC A Exotic Indoor PreRoll' , price:'12.99' , star:'1' , review:'76'},
    {img:'/OPcard1.png' , title:'Ice Cream Cake - THC A Exotic Indoor PreRoll' , price:'12.99' , star:'2' , review:'6'},
  ]
  return (
    <>
      <Box sx={{
        padding:'5% 5%'
      }}>
        <Grid container spacing={6}>
          {/* ==============================LEFT============================================ */}
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box sx={{
                backgroundColor:'white',
                boxShadow:'2px 2px 10px black', 
                borderRadius:'5px',
                 padding:'1rem'
                           }}>
              <Typography
                sx={{
                  color: "black",
                  fontSize: isSmallScreen
                    ? "1rem"
                    : isMediumScreen
                    ? "1.1rem"
                    : "1.1rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                see the Categories
              </Typography>
            </Box>
          </Grid>

          {/* ================================================RiGHT========================================== */}
          <Grid item lg={9} md={8} sm={6} xs={12}>
            <Box>
              <Grid container spacing={3}>
                {listData.map((row, index)=>(
                    <Grid key={index} item lg={4} md={6} sm={12} xs={12}>
                    <Box>
                      <Box
                        sx={{
                          width: "100%", 
                          border:'1px solid gray'
                        }}
                      >
                        <img
                          src="/OPcard1.png"
                          alt=""
                          style={{ height: "25rem", width:'100%' }}
                        />
                      </Box>
                      <Box
                        sx={{
                          marginTop: "1rem",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "black",
                            fontSize: isSmallScreen
                              ? "1.1rem"
                              : isMediumScreen
                              ? "1.3rem"
                              : "1.4rem",
                            fontWeight: 500,
                            textTransform: "uppercase",
                          }}
                        >
                         {row.title}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "0.5rem",
                          }}
                        >
                          <Rating
                            size="small"
                            readOnly
                            defaultValue={row.star}
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
                            ({row.review})Reviews
                          </Typography>
                        </Box>
                        <Typography
                          sx={{
                            color: "red",
                            fontSize: isSmallScreen
                              ? "0.9rem"
                              : isMediumScreen
                              ? "1rem"
                              : "1.1rem",
                            fontWeight: 600,
                            marginTop: "0.5rem",
                            // textTransform: "uppercase",
                          }}
                        >
                          ${row.price}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default OurProductCards;
