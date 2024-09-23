import { Box, Button, Card, Grid, styled, TextField, Typography } from "@mui/material";
import React from "react";

const CustomTextField = styled(TextField)({
  width: "100%",

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#b5c7bc",
      borderRadius: "10px",
    },
    "&:hover fieldset": {
      borderColor: "#a2c0ad",
      borderRadius: "10px",
    },
    "&.Mui-focused fieldset": {
      borderRadius: "10px",

      borderColor: "#a2c0ad",
    },
    backgroundColor: "#f8f8f8",
    borderRadius: "10px",

    color: "black",
  },
  "& .MuiInputBase-input": {
    borderRadius: "10px",

    color: "black",
  },
  "& .MuiInputLabel-root": {
    borderRadius: "10px",

    color: "white",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "white",
  },
  "& .MuiOutlinedInput-input::placeholder": {
    fontSize: "0.9rem",
    color: "gray",

    opacity: 1, // Ensure the placeholder is fully opaque
  },
});

const StripeForm = () => {
  return (
    <>
      <Box sx={{ marginTop: "1rem" }}>
        <Typography sx={{ fontSize: "1.2rem", fontWeight: 600 }}>
          Payment
        </Typography>
        <Typography sx={{ fontSize: "1rem", fontWeight: 500 }}>
          All transections are secure and encrypted
        </Typography>

        <Card
          sx={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",

            padding: "2rem",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "1.2rem", fontWeight: 600 }}>
              Payment
            </Typography>
            <Typography sx={{ fontSize: "1.2rem", fontWeight: 600 }}>
              Payment
            </Typography>
          </Box>

          <Box>
            <CustomTextField placeholder="Card Number" />
            <Grid container spacing={2} sx={{ marginTop: "0rem" }}>
              <Grid item lg={6} md={6} sm={2} xs={12}>
                <CustomTextField placeholder="Expiration Date (MM/YY)" />
              </Grid>

              <Grid item lg={6} md={6} sm={2} xs={12}>
                <CustomTextField placeholder="Security Code" />
              </Grid>
            </Grid>

            <CustomTextField
              placeholder="Name on card"
              sx={{ marginTop: "1rem" }}
            />
          </Box>
        </Card>

        <Button variant="contained" sx={{textTransform:'none', width:'100%', marginTop:'2rem', padding:'0.7rem 0.7rem', fontSize:'1.2rem'}}>Pay Now</Button>
      </Box>
    </>
  );
};

export default StripeForm;
