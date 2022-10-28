import React from 'react'

import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import InfoIcon from '@mui/icons-material/Info';
import Avatar from '@mui/material/Avatar';

export default function Profile() {
  return (
    <>
     <Paper variant="outlined" sx={{ ml:3,borderRadius:3,  display:"flex",flexDirection:"column",alignItems:"center", position:"relative", height:"100%"}}>
      <CardMedia
        component="img"
        height="140"
        image={require("../../../../../assets/cover.jfif")}
        alt="green iguana"
        sx={{borderRadius:"10px 10px 0px 0px" }}
      />
      <Avatar sx={{height:90, width:90, border:"7px solid white", position:"absolute", top:"90px"}} alt="Remy Sharp" src={require("../../../../../assets/profile.jpg")} />
      <Typography sx={{fontSize: 16, fontWeight:"bold", mt:"65px"}}>Jennifer Bennett</Typography>
      <Typography sx={{color:"gray",fontSize: 15}}>Product Designer</Typography>
      <Stack direction="row" spacing={10} sx={{my:3}}>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",}}>
          <Typography sx={{fontSize: 16, fontWeight:"bold"}}>1,269</Typography>
          <Typography sx={{color:"gray",fontSize: 15}}>Products</Typography>
        </Box>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",}}>
          <Typography sx={{fontSize: 16, fontWeight:"bold"}}>5.2k</Typography>
          <Typography sx={{color:"gray",fontSize: 15}}>Followers</Typography>
        </Box>
      </Stack>

      <Divider sx={{mb:2,width:"85%"}}/>

      <Box sx={{display:"flex", justifyContent:"space-between", width:"85%"}}>
        <Typography sx={{fontSize: 16, fontWeight:"bold"}}>Earnings</Typography>
        <InfoIcon sx={{color:"gray"}}/>
      </Box>

      <Box sx={{display:"flex",alignItems:"center", justifyContent:"center", my:2}}>
        <img style={{width:"55%"}} src={require("../../../../../assets/graph4.png")} alt="" />
      </Box>
      <Typography sx={{fontSize: 20, fontWeight:"bold"}}>$26,256</Typography>
      <Typography sx={{color:"gray",fontSize: 15}}>Earning this Month</Typography>

      <Stack direction="row" spacing={2} sx={{my:2}}>
      <Typography sx={{fontSize: 15, color:"#689c75", background:"#edfaf0", borderRadius:4, alignSelf:"flex-end",px:1}}>+2.65%</Typography>
      <Typography sx={{color:"gray",fontSize: 15}}>From Previous Period</Typography>
      </Stack>

      <Divider sx={{my:2,width:"85%"}}/>

      <Typography sx={{fontSize: 16, fontWeight:"bold", width:"85%",mb:1}}>Recent Activity</Typography>

      <Stack direction="row" spacing={2} sx={{my:1, width:"85%"}}>
        <Box sx={{background:"#f2f3f7",display:"flex",flexDirection:"column",alignItems:"center", justifyContent:"center",py:0.5,px:2, borderRadius:3}}>
          <Typography sx={{fontSize: 15, fontWeight:"bold"}}>12</Typography>
          <Typography sx={{fontSize: 13, fontWeight:"bold"}}>Sep</Typography>
        </Box>
        <Typography sx={{color:"gray",fontSize: 15}}>Responded to need "Volunteer Activities"</Typography>
      </Stack>

      <Stack direction="row" spacing={2} sx={{my:1, width:"85%"}}>
        <Box sx={{background:"#f2f3f7",display:"flex",flexDirection:"column",alignItems:"center", justifyContent:"center",py:0.5,px:2, borderRadius:3}}>
          <Typography sx={{fontSize: 15, fontWeight:"bold"}}>11</Typography>
          <Typography sx={{fontSize: 13, fontWeight:"bold"}}>Sep</Typography>
        </Box>
        <Typography sx={{color:"gray",fontSize: 15}}>Everyone realizes woud be desirable...</Typography>
      </Stack>

      <Stack direction="row" spacing={2} sx={{my:1, width:"85%"}}>
        <Box sx={{background:"#f2f3f7",display:"flex",flexDirection:"column",alignItems:"center", justifyContent:"center",py:0.5,px:2, borderRadius:3}}>
          <Typography sx={{fontSize: 15, fontWeight:"bold"}}>10</Typography>
          <Typography sx={{fontSize: 13, fontWeight:"bold"}}>Sep</Typography>
        </Box>
        <Typography sx={{color:"gray",fontSize: 15}}>Joined the group "Boardsmanship Forum"</Typography>
      </Stack>

    </Paper>
    </>
  )
}
