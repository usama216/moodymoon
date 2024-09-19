import React from 'react'
import {styled} from "@mui/material"
import { Box, Button, FormControl, Grid, TextField, Typography, useTheme,useMediaQuery, Snackbar, CircularProgress } from "@mui/material";

const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
      backgroundColor: 'transparent',
      color: 'white',
     
    },
    '& .MuiInputBase-input': {
      color: 'white',
       fontFamily:'Montserrat'
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'white',
    },
    '& .MuiOutlinedInput-input::placeholder': {
      fontSize:  '0.9rem',
      color: 'white',
      opacity: 1, // Ensure the placeholder is fully opaque
    },
  });
const ContactForm = () => {
  return (
    <div>ContactForm</div>
  )
}

export default ContactForm