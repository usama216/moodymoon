import React from 'react'
import {Card, styled} from "@mui/material"
import { Box, Button, FormControl, Grid, TextField, Typography, useTheme,useMediaQuery, Snackbar, CircularProgress } from "@mui/material";

const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#b5c7bc',
        // size:'medium'
      },
      '&:hover fieldset': {
        borderColor: '#a2c0ad',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#a2c0ad',
      },
      backgroundColor: '#f8f8f8',
      color: 'black',

    },
    '& .MuiInputBase-input': {
      color: 'black',
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'white',
    },
    '& .MuiOutlinedInput-input::placeholder': {
      fontSize:  '0.9rem',
      color: 'gray',
      opacity: 1, // Ensure the placeholder is fully opaque
    },
  });
const ContactForm = () => {
  const theme = useTheme()
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
  <Box sx={{
    boxSizing:'border-box',
    padding:'5% 5%'
  }}>
  <Card sx={{
      backgroundColor:'white',
      padding:'2rem',
      boxSizing:'border-box',
      margin:'auto',
      width:isSmallScreen ? '100%': isMediumScreen ? '80%': '50%',
      // borderRadius:'10px',
      // boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    }}>

      {/* ========================================TEXT================================================= */}
      <Typography sx={{
                marginLeft:'1rem',
                fontSize:isSmallScreen ? '2rem': isMediumScreen  ?  "2.5rem": '3rem',
                fontWeight:'600', textAlign:'center',
                marginBottom:'2rem'
              }}>
              Get Touch With Us
              </Typography>
              <Typography sx={{
                marginLeft:'1rem',
                fontSize:isSmallScreen ? '1rem': isMediumScreen  ?  "1rem": '1.1rem',
                fontWeight:'500', textAlign:'center', lineHeight:'1.2', marginBottom:'2rem',
              }}>
              Connect with us effortlessly! Fill out the form & let us know your thoughts, questions, or concerns. We're eager to hear from you & ready to assist.
              </Typography>
    <form action="" >
            <Grid container spacing={2} marginBottom={'1rem'} >
                <Grid item lg={6} md={6} sm={12} xs={12}>
                 <Typography sx={{
                  marginBottom:'0.3rem',
                  fontSize:isSmallScreen ?'0.9rem': '1rem'

                 }}>
                  Your Name*
                 </Typography>
                <CustomTextField
                // onChange={handleFormValue}
                // value={formValue.fullName}
                name="name"
            placeholder="Enter Your Name"
            size="small"
            varient ='outlined'
            fullWidth

            />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                <Typography sx={{
                  marginBottom:'0.3rem',
                  fontSize:isSmallScreen ?'0.9rem': '1rem'

                 }}>
                  Your Email*
                 </Typography>
                <CustomTextField
                // onChange={handleFormValue}
                // value={formValue.phone}
                name="email"
            placeholder="Enter Your Email "
            size="small"
            varient ='outlined'
            fullWidth

            />
                </Grid>
            </Grid>
            <Typography sx={{
                  marginBottom:'0.3rem',
                  fontSize:isSmallScreen ?'0.9rem': '1rem'

                 }}>
                  Your Message*
                 </Typography>
            <CustomTextField
            // onChange={handleFormValue}
            // value={formValue.message}
            name="message"
            placeholder="Enter Your Message"
            size="small"
            varient ='outlined'
            fullWidth
            multiline
            rows={5}
            />

            <Box sx={{
              display:'flex', alignItems:'center',marginTop:'2rem'
            }}>
              <input type="checkbox" id='custom-checkbox'
              // style={{ display:'none',  }}
              />
              {/* <label htmlFor="custom-checkbox" style={{
                display:'inline-block',
                height:'1rem', width:'1rem', border:'3px solid #265630',
                borderRadius:'50px',
                cursor:'pointer'
              }}></label> */}
              <Typography sx={{
                marginLeft:'1rem',
                fontSize:isSmallScreen ? '0.9rem': '1rem',
              }}>
              Save my name, email, and website in this browser.
              </Typography>
            </Box>

            <Button
             sx={{
              width:'100%',
              marginTop:'2rem',
              color:'white',
               textTransform:'none',
              backgroundColor:theme.palette.primary.main,
              padding: isSmallScreen ? '0.5rem 1rem' : '0.8rem 2rem',
               fontSize:isSmallScreen ? '0.9rem': '1rem' ,
               fontWeight:500,
               border:'1px solid #98c447',
               transition:'0.3s',
               borderRadius:'10px'
              //  '&:hover':{
              //   color:'white',
              //   backgroundColor:"transparent",
              //   border:'1px solid white'
              //  }
            }}
            // onClick={handleFormSubmit}
            >
                Send Message
            </Button>

          </form>
    </Card>
  </Box>
    </>
  )
}

export default ContactForm