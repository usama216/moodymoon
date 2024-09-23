import {
  Box,
  Button,
  Card,
  Divider,
  styled,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

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

const DiscountTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "green",
      borderRadius: "8px",
      size: "small",
    },
    "&:hover fieldset": {
      borderColor: "green",
      borderRadius: "8px",
    },
    "&.Mui-focused fieldset": {
      borderRadius: "8px",

      borderColor: "green",
    },
    backgroundColor: "white",
    borderRadius: "8px",

    color: "black",
  },
  "& .MuiInputBase-input": {
    borderRadius: "8px",
    color: "black",
  },
  "& .MuiInputLabel-root": {
    borderRadius: "8px",

    color: "white",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "black",
  },
  "& .MuiOutlinedInput-input::placeholder": {
    fontSize: "1.1rem",
    color: "green",
    opacity: 1,
  },
});

const CheckOutRightSidebar = () => {
  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  const productdata = [
    {
      image: "/OPcard1.png",
      title: "title 2",
      price: "12.99",
      quantity: "2",
    },
  ];
  return (
    <>
      <Card
        sx={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          padding: "1rem 1.5rem",
        }}
      >
        {productdata.map((val, ind) => (
          <>
            <Box
              sx={{
                display: "flex",
                width: isSmall ? "100%" : "100%",
                marginTop: "1rem",
              }}
            >
              <Box>
                <img src={val.image} width="140rem" height={"145rem"} />
              </Box>

              <Box sx={{ marginLeft: "1rem" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      width: "50%",
                      fontSize: isSmall ? "0.9rem" : "1.3rem",
                      fontWeight: 700,
                    }}
                  >
                    Ice Cream Cake - THC A Exotic Indoor PreRoll
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: isSmall ? "0.8rem" : "1rem",
                      color: "green",
                      fontWeight: "700",
                    }}
                  >
                    $ {val.price}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: isSmall ? "0.8rem" : "1rem",
                  }}
                >
                  Count: {val.quantity}ct
                </Typography>
              </Box>
            </Box>
          </>
        ))}

        <br />

        <Divider />
        <br />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignitems: "center",
            marginTop: "2rem",
          }}
          gap={2}
        >
          <DiscountTextField
            fullWidth
            size={isSmall ? "small" : "auto"}
            placeholder="Discount code..."
          />

          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              fontSize: isSmall ? "0.9rem" : "1rem",
              fontWeight: "600",
              padding: isSmall ? "0.4rem 1rem" : "0.7rem 2.5rem",

              borderRadius: "7px",
            }}
          >
            Apply{" "}
            <FiArrowUpRight
              style={{
                display: isSmall ? "none" : "block",
                marginLeft: isSmall ? "0.6rem" : "0.5rem",
                fontSize: isSmall ? "0.8rem" : "1.5rem",
                backgroundColor: "transparent",
                width: "5rem",
              }}
            />
          </Button>
        </Box>

        <Box
          sx={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: 500, fontSize: "1.1rem" }}>
            Sub Total
          </Typography>

          <Typography sx={{ fontWeight: 500, fontSize: "1.1rem" }}>
            $ 12.99
          </Typography>
        </Box>

        <br />
        <Divider />
        <br />

        <Typography sx={{ fontWeight: "500", fontSize: "1.1rem" }}>
          Shipping
        </Typography>

        <CustomTextField
          placeholder="Enter shipping address"
          sx={{ marginTop: "0.5rem" }}
        />

        <br />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "1.1rem" }}>
            Sub Total
          </Typography>

          <Typography
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 700,
              fontSize: "1.1rem",
            }}
          >
            $ 12.99 USD
          </Typography>
        </Box>
      </Card>
    </>
  );
};

export default CheckOutRightSidebar;
