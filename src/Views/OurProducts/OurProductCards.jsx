import {
  Box,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Rating,
  Card,
  Radio,
  Divider,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import React, { useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

const OurProductCards = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [firstValue, setFirstValue] = useState(0.0);
  const [secondValue, setSecondValue] = useState(399.99);
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [selectedAvailability, setSelectedAvailability] = useState("In Stock");
  const [priceRange, setPriceRange] = useState([0, 349.99]);
  const navigate = useNavigate();
  const listData = [
    {
      id: 1,
      img: "/OPcard1.png",
      title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
      price: "12.99",
      star: "5",
      review: "6",
      availability: "In Stock",
    },

    {
      id: 2,

      img: "/OPcard1.png",
      title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
      price: "13.99",
      star: "5",
      review: "6",
      availability: "In Stock",
    },
    {
      id: 3,

      img: "/OPcard1.png",
      title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
      price: "14.99",
      star: "5",
      review: "10",
      availability: "In Stock",
    },
    {
      id: 4,

      img: "/OPcard1.png",
      title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
      price: "15.99",
      star: "4",
      review: "64",
      availability: "Out of Stock",
    },
    {
      id: 5,

      img: "/OPcard1.png",
      title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
      price: "16.99",
      star: "3",
      review: "6",
      availability: "Out of Stock",
    },
    {
      id: 6,

      img: "/OPcard1.png",
      title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
      price: "117.99",
      star: "5",
      review: "65",
      availability: "In Stock",
    },
    {
      id: 7,

      img: "/OPcard1.png",
      title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
      price: "12.99",
      star: "1",
      review: "76",
      availability: "Out of Stock",
    },
    {
      id: 8,

      img: "/OPcard1.png",
      title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
      price: "12.99",
      star: "2",
      review: "6",
      availability: "Out of Stock",
    },
  ];

  const categories = [
    "All Products",
    "Flowers",
    "Vapes",
    "Pre Rolls",
    "Edibles",
    "Novelties",
  ];

  // Filter products based on selected category and availability
  const filteredProducts = listData.filter((product) => {
    const categoryMatches =
      activeCategory === "All Products" || product.category === activeCategory;
    const availabilityMatches = product.availability === selectedAvailability;
    return categoryMatches && availabilityMatches;
  });

  const handleDetail = (id) => {
    navigate(`/product-details/${id}`);
  };

  return (
    <Box sx={{ padding: "5% 5%" }}>
      <Grid container spacing={6}>
        {/* ==============================LEFT============================================ */}
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card
            sx={{
              backgroundColor: "white",
              padding: "0.5rem 0rem 0rem 0rem",
            }}
          >
            <Typography
              sx={{
                color: "black",
                fontSize: isSmallScreen ? "1rem" : "1.7rem",
                fontWeight: 700,
                marginBottom: "1rem",
                padding: "0.5rem",
              }}
            >
              See the Categories
            </Typography>
            {categories.map((category) => (
              <React.Fragment key={category}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    backgroundColor:
                      activeCategory === category
                        ? theme.palette.primary.main
                        : "transparent",
                    color: activeCategory === category ? "white" : "black",
                    padding: "0.5rem 0.5rem 0.5rem 0.5rem",
                  }}
                  onClick={() => setActiveCategory(category)}
                >
                  <Typography sx={{ fontSize: "1.2rem" }}>
                    {category}
                  </Typography>
                  <IoArrowForward />
                </Box>
                <Divider />
              </React.Fragment>
            ))}
          </Card>

          <br />

          <Box sx={{ padding: "0.5rem 0rem 0rem 0rem" }}>
            <Accordion sx={{ padding: "0", "&:before": { display: "none" } }}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    style={{
                      color: "black",
                      fontSize: "2rem",
                      fontWeight: 700,
                    }}
                  />
                }
              >
                <Typography
                  sx={{
                    color: "black",
                    fontSize: isSmallScreen ? "1rem" : "1.6rem",
                    fontWeight: 600,
                  }}
                >
                  Availability
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: "0" }}>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "end",
                      backgroundColor:
                        selectedAvailability === "In Stock"
                          ? theme.palette.primary.main
                          : "transparent",
                    }}
                  >
                    <Radio
                      sx={{
                        color:
                          selectedAvailability === "In Stock"
                            ? "white"
                            : "black",
                        "&.Mui-checked": {
                          color:
                            selectedAvailability === "In Stock"
                              ? "white"
                              : "black",
                        },
                      }}
                      checked={selectedAvailability === "In Stock"}
                      onChange={() => setSelectedAvailability("In Stock")}
                    />
                    <Typography
                      sx={{
                        color:
                          selectedAvailability === "In Stock"
                            ? "white"
                            : "black",
                        mb: 1,
                      }}
                    >
                      In stock ({filteredProducts.length})
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "end",
                      backgroundColor:
                        selectedAvailability === "Out of Stock"
                          ? theme.palette.primary.main
                          : "transparent",
                    }}
                  >
                    <Radio
                      sx={{
                        color:
                          selectedAvailability === "Out of Stock"
                            ? "white"
                            : "black",
                        "&.Mui-checked": {
                          color:
                            selectedAvailability === "Out of Stock"
                              ? "white"
                              : "black",
                        },
                      }}
                      checked={selectedAvailability === "Out of Stock"}
                      onChange={() => setSelectedAvailability("Out of Stock")}
                    />
                    <Typography
                      sx={{
                        color:
                          selectedAvailability === "Out of Stock"
                            ? "white"
                            : "black",
                        mb: 1,
                      }}
                    >
                      Out of stock ({filteredProducts.length})
                    </Typography>
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>

          <br />

          <Box sx={{ padding: "0.5rem 0rem 0rem 0rem" }}>
            <Accordion sx={{ padding: "0", "&:before": { display: "none" } }}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    style={{
                      color: "black",
                      fontSize: "2rem",
                      fontWeight: 700,
                    }}
                  />
                }
              >
                <Typography
                  sx={{
                    color: "black",
                    fontSize: isSmallScreen ? "1rem" : "1.6rem",
                    fontWeight: 600,
                  }}
                >
                  Price
                </Typography>
              </AccordionSummary>
              <Divider />
              <AccordionDetails>
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>
                    The highest price is $349.99
                  </Typography>
                  <br />

                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <TextField
                      type="number"
                      size="small"
                      value={firstValue}
                      onChange={(e) =>
                        setFirstValue(parseFloat(e.target.value) || 0)
                      }
                    />
                    <TextField
                      sx={{ marginLeft: "1rem" }}
                      type="number"
                      size="small"
                      value={secondValue}
                      onChange={(e) =>
                        setSecondValue(parseFloat(e.target.value) || 0)
                      }
                    />
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>

        {/* ================================================RIGHT========================================== */}
        <Grid item lg={9} md={8} sm={6} xs={12}>
          <Box >
            <Grid container spacing={3} >
              {filteredProducts.map((row, index) => (
                <Grid key={index} item lg={4} md={6} sm={12} xs={12}>
                  <Box onClick={() => handleDetail(row.id)}>
                    <Box sx={{ width: "100%", cursor:'pointer' }}>
                      <img
                        src={row.img}
                        alt=""
                        style={{ height: "25rem", width: "100%" }}
                      />
                    </Box>
                    <Box sx={{ marginTop: "1rem" }}>
                      <Typography
                        sx={{
                          color: "black",
                          fontSize: isSmallScreen ? "1.1rem" : "1.4rem",
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
                              color: "orange",
                            },
                          }}
                        />
                        <Typography
                          sx={{
                            color: "#6d6d6d",
                            fontSize: isSmallScreen ? "0.9rem" : "1rem",
                            fontWeight: 500,
                          }}
                        >
                          ({row.review}) Reviews
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          color: "red",
                          fontSize: isSmallScreen ? "0.9rem" : "1.1rem",
                          fontWeight: 600,
                          marginTop: "0.5rem",
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
  );
};

export default OurProductCards;
