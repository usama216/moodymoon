import { Box, Card, useTheme, useMediaQuery, Typography, Grid, Button } from '@mui/material' 
import React, { useState } from 'react'

const UserProfileOrderHistroy = () => {
  const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));  
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const [showAll, setShowAll]= useState(false);
    // console.log('shoshshsohsohs', showAll)

 const orderhistory =[
  {img:'/OPcard1.png', title:'Ice Cream Cake - THC A Exotic Indoor PreRoll', price:'12.99' , status :'Completed'},
  {img:'/OPcard1.png', title:'Ice Cream Cake - THC A Exotic Indoor PreRoll', price:'12.99' , status :'Completed'},
  {img:'/OPcard1.png', title:'Ice Cream Cake - THC A Exotic Indoor PreRoll', price:'12.99' , status :'Completed'},
  {img:'/OPcard1.png', title:'Ice Cream Cake - THC A Exotic Indoor PreRoll', price:'12.99' , status :'Completed'},
  {img:'/OPcard1.png', title:'Ice Cream Cake - THC A Exotic Indoor PreRoll', price:'12.99' , status :'Completed'},
 ]

 const displayOrderHostory = showAll ? orderhistory : orderhistory.slice(0,3);

  return (
   <>
   <Box>
    <Card sx={{p:'2rem',boxShadow:' rgba(0, 0, 0, 0.35) 0px 5px 15px', position :'relative', 
     height:showAll || isMediumScreen ? 'auto' : '80vh', 
     pb:showAll || isMediumScreen ? '5rem' : '0rem',
    boxSizing:'border-box'
    }}>
    <Typography sx={{
                color:theme.palette.primary.main,
                fontSize:isSmallScreen ? '1.2rem': isMediumScreen ? " 1.4rem": '1.5rem',
                fontWeight:600, mb:'2rem'
                
            }}>
            Order History
            </Typography>

            <Box >
              {displayOrderHostory.map((row, index)=>(
                  <Grid key={index} container spacing={4}  sx={{marginBottom:'0.8rem'}}> 
                  <Grid item lg={3} md={3} sm={3} xs={3}>
                    <Box sx={{width:'100%', }}>
                    <img src={row.img} alt="" width={'100%'} height={'100%'} border={'1px solid gray'}/>
                    </Box>
                  </Grid>
                  <Grid item lg={9} md={9} sm={9} xs={9}>
                    <Box>
                    <Typography sx={{
                          color:'black',
                          fontSize:isSmallScreen ? '1rem': isMediumScreen ? " 1.1rem": '1.1rem',
                          fontWeight:600, 
                          
                      }}>
                      {row.title}
                      </Typography>
                      <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center',mt:'0.2rem'}}>
                      <Typography sx={{
                          color:theme.palette.primary.main,
                          fontSize:isSmallScreen ? '0.9rem': isMediumScreen ? " 1rem": '1rem',
                          fontWeight:500, 
                          
                      }}>
                      ${row.price}
                      </Typography>
                      <Typography sx={{
                          color:'gray',
                          fontSize:isSmallScreen ? '0.9rem': isMediumScreen ? " 1rem": '1rem',
                          fontWeight:500, 
                          
                      }}>
                      Status:
                      <span style={{color:theme.palette.primary.main}}> {row.status}</span>
                      </Typography>
                      </Box>
                      <Typography sx={{
                          color:'gray',
                          fontSize:isSmallScreen ? '0.8rem': isMediumScreen ? " 0.9rem": '0.9rem',
                          fontWeight:500, 
                          
                      }}>
                      Sep 20, 2024
                      </Typography>
                    </Box>
                  </Grid>
              </Grid>
              ))}
          
            </Box>
            <Box sx={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center',
              position:'absolute', bottom:0, left:0, 
              boxShadow:' rgba(0, 0, 0, 0.35) 0px 5px 15px',
              bgcolor:'white',
              // zIndex:10
            }}>
                      <Button 
                      onClick={()=>setShowAll((pre)=>!pre)}
                      sx={{
                          color:theme.palette.primary.main,
                          fontSize:isSmallScreen ? '0.9rem': isMediumScreen ? "1rem": '1rem',
                          fontWeight:600, py:2
                          
                      }}>
                        {showAll ? 'Show less' : 'Load More'}
                        </Button>
            </Box>
    </Card>
   </Box>
   </>
  )
}

export default UserProfileOrderHistroy