import {
    Box,
    Grid,
    Typography,
    useTheme,
    useMediaQuery,
    IconButton,
  } from "@mui/material";
import React from 'react'

const ProductSample = () => {
    const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const listData = [
    {img:'benefit1.png' , title :'Best Herbs',
        des:'Moody Moon only uses the finest organic herbs and extracts in our line of CBD products.'
    },
    {img:'benefit2.png' , title :'Best Products',
        des:'Moody Moon has carefully crafted a variety of Hemp CBD products to choose from for daily wellness support.'
    },
    {img:'benefit3.png' , title :'Good Quality',
        des:'Our premier CBD products offer good quality and consistency you can always count on, each time you order.'
    },
    {img:'benefit4.png' , title :'Best Price',
        des:'Moody Moon ensures top-notch CBD products at the best prices, staying true to our commitment to excellence.'
    },
  ]
  return (
    <>
    <Box sx={{
        backgroundImage:'url(/productbg.png)', 
        backgroundPosition:'center', backgroundSize:'cover',
        objectFit:'cover',
        boxSizing:'border-box', 
        padding: isMediumScreen ? "5%":  '5% 15%',
        marginTop:isSmallScreen ? "2rem" : isMediumScreen ? "4rem":  '5rem'
    }}> 
        <Grid container spacing={2}>
            {listData.map((row, index)=>(
        <Grid item lg={6} md={6} sm={12} sx={12} >
  <Box sx={{ backgroundColor:'#6d6c6c6a', 
    display:'flex', padding:'2rem', borderRadius:'10px', gap:5
  }}>
     <Box>
        <img src={row.img} alt="" style={{
            width:isSmallScreen ? "3rem" : isMediumScreen ? "5rem":  '6rem'
            }}/>
     </Box>
     <Box>
     <Typography
              sx={{
                color: "white",
                fontSize: isSmallScreen
                  ? "1.2rem"
                  : isMediumScreen
                  ? "1.6rem"
                  : "2rem",
                fontWeight: 500,
              }}
            >
              {row.title}
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: isSmallScreen
                  ? "0.9rem"
                  : isMediumScreen
                  ? "1rem"
                  : "1rem",
                fontWeight: 400,
                // textTransform: "capitalize",
              }}
            >
             {row.des}
            </Typography>
     </Box>
    </Box>
        
            </Grid>
            ))}
        </Grid>
    </Box>
    </>
  )
}

export default ProductSample