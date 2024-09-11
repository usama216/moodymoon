import { Box, Typography, useTheme, useMediaQuery, IconButton } from '@mui/material'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FiArrowUpRight } from "react-icons/fi";
import CustomButton from '../components/Button/CustomButton';


const Hero = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // speed: 3000,
        // autoplaySpeed: 3000,
        // pauseOnHover: false
      };

  return (
    <>
    <Box sx={{width:'100%' , overflow:'hidden', 
      
    }}>
    {/* <Slider {...settings}> */}
    <Box sx={{
    backgroundImage: 'url(herobg.png)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height:isSmallScreen ? "50vh": '100vh',
    //  padding:'0% 10%'
}}>
      <Box sx={{width:isSmallScreen ? "auto": isMediumScreen ? '80%': '60%', height:'100%', 
      display:'flex',
       alignItems:'start', 
       flexDirection:'column', justifyContent:'center',
         padding:'0% 5%'
      }}>
        <Typography sx={{
            color:'white', 
            fontSize:isSmallScreen ? "1.5rem": isMediumScreen ? "2rem" : '2.5rem', 
            fontWeight:400,
            textTransform:'uppercase'
        }}>
        Finest Organic
        </Typography>
        <Typography sx={{
            color:'#17364c', 
            fontSize:isSmallScreen ? "2rem": isMediumScreen ? "3rem" : '4rem',  
            fontWeight:600,
            textTransform:'uppercase',
            marginBottom:'-0.5rem'
        }}>
          Herbs in Every CBD 
        </Typography>
        <Typography sx={{
            color:'#17364c', 
            fontSize:isSmallScreen ? "2rem": isMediumScreen ? "3rem" : '4rem',  
            fontWeight:600,
            textTransform:'uppercase',
            marginBottom:'2rem'
        }}>
        Product
        </Typography>
        <Typography sx={{
            color:'white', 
            fontSize:isSmallScreen ? "1rem": isMediumScreen ? "1.2rem" : '1.4rem', 
             fontWeight:400,
            textTransform:'capitalize', 
            marginBottom:'2rem', 
            width:isSmallScreen ? "100%": isMediumScreen ?  "80%": '65%',
            
        }}>
        Cali Origins has carefully crafted a variety of Hemp CBD products to choose from for daily wellness support.
        </Typography>

        <CustomButton border={'1px solid white'} backgroundColor={'white'} color={'#17364c'}
                 hbackgroundColor={'transparent'} hcolor={'white'} name="Learn More"/>
      </Box>
      </Box>
      
      {/* =============================================SECOND========================================================== */}
      {/* <Box sx={{
    backgroundImage: 'url(herobg.png)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height:isSmallScreen ? "50vh": '100vh',
    //  padding:'0% 10%'
}}>
      <Box sx={{width:isSmallScreen ? "auto": isMediumScreen ? '80%': '60%', height:'100%', 
      display:'flex',
       alignItems:'start', 
       flexDirection:'column', justifyContent:'center',
         padding:'0% 5%'
      }}>
        <Typography sx={{
            color:'white', 
            fontSize:isSmallScreen ? "1.5rem": isMediumScreen ? "2rem" : '2.5rem', 
            fontWeight:400,
            textTransform:'uppercase'
        }}>
        Finest Organic
        </Typography>
        <Typography sx={{
            color:'#17364c', 
            fontSize:isSmallScreen ? "2rem": isMediumScreen ? "3rem" : '4rem',  
            fontWeight:600,
            textTransform:'uppercase',
            marginBottom:'2rem'
        }}>
        Herbs in Every CBD Product
        </Typography>
        <Typography sx={{
            color:'white', 
            fontSize:isSmallScreen ? "0.9rem": isMediumScreen ? "1rem" : '1rem', 
             fontWeight:400,
            textTransform:'capitalize', 
            marginBottom:'2rem'
            
        }}>
        Cali Origins has carefully crafted a variety of Hemp CBD products to choose from for daily wellness support.
        </Typography>
        <CustomButton border={'1px solid white'} backgroundColor={'white'} color={'#17364c'}
                 hbackgroundColor={'transparent'} hcolor={'white'} name="Learn More"/>
      </Box>
      </Box> */}
    {/* </Slider> */}
    </Box>
    </>
  )
}

export default Hero