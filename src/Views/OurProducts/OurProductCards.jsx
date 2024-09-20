// import {
//   Box,
//   Grid,
//   Typography,
//   useTheme,
//   useMediaQuery,
//   Rating,
//   Card,
//   Slider,
//   Radio,
//   Divider,
//   TextField,
// } from "@mui/material";
// import React, { useState } from "react";
// import { IoArrowForward } from "react-icons/io5";

// const OurProductCards = () => {
//   const theme = useTheme();
//   const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
//   const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

//   const [activeCategory, setActiveCategory] = useState("All Products");

//   const [priceRange, setPriceRange] = useState([0, 349.99]);

//   const handlePriceChange = (event, newValue) => {
//     setPriceRange(newValue);
//   };

//   const listData = [
//     {
//       img: "/OPcard1.png",
//       title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
//       price: "12.99",
//       star: "5",
//       review: "6",
//     },
//     {
//       img: "/OPcard1.png",
//       title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
//       price: "12.99",
//       star: "5",
//       review: "10",
//     },
//     {
//       img: "/OPcard1.png",
//       title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
//       price: "12.99",
//       star: "4",
//       review: "64",
//     },
//     {
//       img: "/OPcard1.png",
//       title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
//       price: "12.99",
//       star: "3",
//       review: "6",
//     },
//     {
//       img: "/OPcard1.png",
//       title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
//       price: "12.99",
//       star: "5",
//       review: "65",
//     },
//     {
//       img: "/OPcard1.png",
//       title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
//       price: "12.99",
//       star: "1",
//       review: "76",
//     },
//     {
//       img: "/OPcard1.png",
//       title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
//       price: "12.99",
//       star: "2",
//       review: "6",
//     },
//   ];

//   const categories = [
//     "All Products",
//     "Flowers",
//     "Vapes",
//     "Pre Rolls",
//     "Edibles",
//     "Novelties",
//   ];

//   return (
//     <Box sx={{ padding: "5% 5%" }}>
//       <Grid container spacing={6}>
//         {/* ==============================LEFT============================================ */}
//         <Grid item lg={3} md={4} sm={6} xs={12}>
//           <Card
//             sx={{
//               backgroundColor: "white",
//               padding: "1rem 0rem",
//             }}
//           >
//             <Typography
//               sx={{
//                 color: "black",
//                 fontSize: isSmallScreen ? "1rem" : "1.7rem",
//                 fontWeight: 700,
//                 // textTransform: "uppercase",
//                 marginBottom: "1rem",
//                 padding: "0.5rem",
//               }}
//             >
//               See the Categories
//             </Typography>
//             {categories.map((category) => (
//               <>
//                 <Box
//                   key={category}
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                     cursor: "pointer",

//                     backgroundColor:
//                       activeCategory === category
//                         ? theme.palette.primary.main
//                         : "transparent",
//                     color: activeCategory === category ? "white" : "black",
//                     padding: "0.5rem 0.5rem 0rem 0.5rem",
//                   }}
//                   onClick={() => setActiveCategory(category)}
//                 >
//                   <Typography sx={{ fontSize: "1.2rem" }}>
//                     {category}
//                   </Typography>
//                   <IoArrowForward />
//                 </Box>
//                 <Divider />
//               </>
//             ))}
//           </Card>

//           <br />
//           <br />

//           <Card>
//             <Box sx={{ padding: "0.5rem" }}>
//               <Typography
//                 sx={{
//                   color: "black",
//                   fontSize: isSmallScreen ? "1rem" : "1.1rem",
//                   fontWeight: 600,
//                   textTransform: "uppercase",
//                   marginBottom: "1rem",
//                   padding: "0.5rem",
//                 }}
//               >
//                 Availbility
//               </Typography>

//               <Box sx={{ display: "flex", alignItems: "end" }}>
//                 <Radio />
//                 <Typography sx={{ color: "green", mb: 1 }}>
//                   {" "}
//                   In stock (104)
//                 </Typography>
//               </Box>

//               <Box sx={{ display: "flex", alignItems: "end" }}>
//                 <Radio />
//                 <Typography sx={{ color: "green", mb: 1 }}>
//                   {" "}
//                   In stock (104)
//                 </Typography>
//               </Box>
//             </Box>
//           </Card>

//           <br />
//           <br />

//           <Card>
//             <Box sx={{ padding: "0.5rem" }}>
//               <Typography
//                 sx={{
//                   color: "black",
//                   fontSize: isSmallScreen ? "1rem" : "1.1rem",
//                   fontWeight: 600,
//                   textTransform: "uppercase",
//                   marginBottom: "1rem",
//                   padding: "0.5rem",
//                 }}
//               >
//                 Price
//               </Typography>
//               <Typography>The highest price is $349.99</Typography>

//               <Box sx={{ display: "flex", alignItems: "center" }}>
//                 <TextField type="number" size="small" />
//                 <TextField type="number" size="small" />
//               </Box>
//             </Box>
//           </Card>
//         </Grid>

//         {/* ================================================RIGHT========================================== */}
//         <Grid item lg={9} md={8} sm={6} xs={12}>
//           <Box>
//             <Grid container spacing={3}>
//               {listData.map((row, index) => (
//                 <Grid key={index} item lg={4} md={6} sm={12} xs={12}>
//                   <Box>
//                     <Box sx={{ width: "100%" }}>
//                       <img
//                         src={row.img}
//                         alt=""
//                         style={{ height: "25rem", width: "100%" }}
//                       />
//                     </Box>
//                     <Box sx={{ marginTop: "1rem" }}>
//                       <Typography
//                         sx={{
//                           color: "black",
//                           fontSize: isSmallScreen ? "1.1rem" : "1.4rem",
//                           fontWeight: 500,
//                           textTransform: "uppercase",
//                         }}
//                       >
//                         {row.title}
//                       </Typography>
//                       <Box
//                         sx={{
//                           display: "flex",
//                           alignItems: "center",
//                           marginTop: "0.5rem",
//                         }}
//                       >
//                         <Rating
//                           size="small"
//                           readOnly
//                           defaultValue={row.star}
//                           sx={{
//                             "& .MuiRating-iconFilled": {
//                               color: "orange",
//                             },
//                           }}
//                         />
//                         <Typography
//                           sx={{
//                             color: "#6d6d6d",
//                             fontSize: isSmallScreen ? "0.9rem" : "1rem",
//                             fontWeight: 500,
//                           }}
//                         >
//                           ({row.review}) Reviews
//                         </Typography>
//                       </Box>
//                       <Typography
//                         sx={{
//                           color: "red",
//                           fontSize: isSmallScreen ? "0.9rem" : "1.1rem",
//                           fontWeight: 600,
//                           marginTop: "0.5rem",
//                         }}
//                       >
//                         ${row.price}
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </Grid>
//               ))}
//             </Grid>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default OurProductCards;




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
} from "@mui/material";
import React, { useState } from "react";
import { IoArrowForward } from "react-icons/io5";

const OurProductCards = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [activeCategory, setActiveCategory] = useState("All Products");
  const [selectedAvailability, setSelectedAvailability] = useState("In Stock");
  const [priceRange, setPriceRange] = useState([0, 349.99]);

  const listData = [
    {
      img: "/OPcard1.png",
      title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
      price: "12.99",
      star: "5",
      review: "6",
      availability: "In Stock",
    },

    {
            img: "/OPcard1.png",
            title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
            price: "12.99",
            star: "5",
            review: "6",
            availability: "In Stock",
          },
          {
            img: "/OPcard1.png",
            title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
            price: "12.99",
            star: "5",
            review: "10",
              availability: "In Stock",
          },
          {
            img: "/OPcard1.png",
            title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
            price: "12.99",
            star: "4",
            review: "64",
            availability: "Out of Stock",

          },
          {
            img: "/OPcard1.png",
            title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
            price: "12.99",
            star: "3",
            review: "6",
            availability: "Out of Stock",

          },
          {
            img: "/OPcard1.png",
            title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
            price: "12.99",
            star: "5",
            review: "65",
            availability: "In Stock",

          },
          {
            img: "/OPcard1.png",
            title: "Ice Cream Cake - THC A Exotic Indoor PreRoll",
            price: "12.99",
            star: "1",
            review: "76",
            availability: "Out of Stock",

          },
          {
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
    const categoryMatches = activeCategory === "All Products" || product.category === activeCategory;
    const availabilityMatches = product.availability === selectedAvailability;
    return categoryMatches && availabilityMatches;
  });

  return (
    <Box sx={{ padding: "5% 5%" }}>
      <Grid container spacing={6}>
        {/* ==============================LEFT============================================ */}
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card
            sx={{
              backgroundColor: "white",
              padding: "1rem 0rem",
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
                    padding: "0.5rem 0.5rem 0rem 0.5rem",
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
          <br />

          <Card>
            <Box sx={{ padding: "0.5rem" }}>
              <Typography
                sx={{
                  color: "black",
                  fontSize: isSmallScreen ? "1rem" : "1.1rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                  padding: "0.5rem",
                }}
              >
                Availability
              </Typography>

              <Box sx={{ display: "flex", alignItems: "end" }}>
                <Radio
                  checked={selectedAvailability === "In Stock"}
                  onChange={() => setSelectedAvailability("In Stock")}
                />
                <Typography sx={{ color: "green", mb: 1 }}>
                  In stock ({filteredProducts.length})
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "end" }}>
                <Radio
                  checked={selectedAvailability === "Out of Stock"}
                  onChange={() => setSelectedAvailability("Out of Stock")}
                />
                <Typography sx={{ color: "red", mb: 1 }}>
                  Out of stock ({filteredProducts.length})
                </Typography>
              </Box>
            </Box>
          </Card>

          <br />
          <br />

          <Card>
            <Box sx={{ padding: "0.5rem" }}>
              <Typography
                sx={{
                  color: "black",
                  fontSize: isSmallScreen ? "1rem" : "1.1rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                  padding: "0.5rem",
                }}
              >
                Price
              </Typography>
              <Typography>The highest price is $349.99</Typography>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <TextField type="number" size="small" />
                <TextField type="number" size="small" />
              </Box>
            </Box>
          </Card>
        </Grid>

        {/* ================================================RIGHT========================================== */}
        <Grid item lg={9} md={8} sm={6} xs={12}>
          <Box>
            <Grid container spacing={3}>
              {filteredProducts.map((row, index) => (
                <Grid key={index} item lg={4} md={6} sm={12} xs={12}>
                  <Box>
                    <Box sx={{ width: "100%" }}>
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
