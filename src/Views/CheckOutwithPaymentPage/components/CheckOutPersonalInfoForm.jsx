import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import StripeForm from "./StripeForm";

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

const CustomSelect = styled(Select)({
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

const CheckOutPersonalInfoForm = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <Typography sx={{ fontSize: "1.2rem", fontWeight: 700 }}>
          Contact
        </Typography>
        <Link style={{ color: "#50a1db" }} to="/login">
          Login
        </Link>
      </Box>

      <Box sx={{ marginTop: "1rem" }}>
        <CustomTextField placeholder="Enter Your Email..." />

        <RadioGroup name="use-radio-group" defaultValue="first">
          <FormControlLabel
            value="first"
            label="Email me with news and offers"
            control={<Radio />}
          />
        </RadioGroup>

        <FormControl fullWidth sx={{ marginTop: "1rem" }}>
          <InputLabel id="demo-simple-select-label">Country/Region</InputLabel>
          <CustomSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Country/Region"
            // onChange={handleChange}
          >
            <MenuItem value={10}>United States</MenuItem>
            <MenuItem value={20}>India</MenuItem>
            <MenuItem value={30}>UAE</MenuItem>
          </CustomSelect>
        </FormControl>

        <Grid container spacing={3} sx={{ marginTop: "0rem" }}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <CustomTextField placeholder="Enter your first name..." />
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>
            <CustomTextField placeholder="Enter your first name..." />
          </Grid>
        </Grid>

        <CustomTextField
          sx={{ marginTop: "1rem" }}
          placeholder="Enter your first name..."
        />
        <CustomTextField
          sx={{ marginTop: "1rem" }}
          placeholder="Enter your first name..."
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          gap={1.5}
        >
          <CustomTextField sx={{ marginTop: "1rem" }} placeholder="City" />
          <CustomTextField sx={{ marginTop: "1rem" }} placeholder="State" />
          <CustomTextField sx={{ marginTop: "1rem" }} placeholder="ZIP Code" />
        </Box>

        <CustomTextField sx={{ marginTop: "1rem" }} placeholder="Phone" />

        <RadioGroup name="use-radio-group" defaultValue="first">
          <FormControlLabel
            value="first"
            label="Save this informstion for next time"
            control={<Radio />}
          />
        </RadioGroup>

        <Typography sx={{ fontWeight: 600, marginTop: "1rem" }}>
          {" "}
          Shipping Method
        </Typography>
        <CustomTextField
          sx={{ marginTop: "0.5rem" }}
          placeholder="Enter Your shipping address to view available shipping methods."
        />
      </Box>

      <StripeForm/>
    </>
  );
};

export default CheckOutPersonalInfoForm;
