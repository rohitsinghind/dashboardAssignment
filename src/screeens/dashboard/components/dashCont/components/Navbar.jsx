import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Navbar({show, setShow}) {
  return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" elevation={0} color="transparent">
        <Toolbar sx={{color:"#5d5d5d"}}>
          
        <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={()=>setShow(!show)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{ display: {color:"#1d1d1d", sm: 'block',fontWeight:"bold", fontSize:"20px",'@media (max-width: 820px)': {
              fontSize:"17px"
            }, } }}
          >
            Dashboard
          </Typography>
         
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: {md: 'flex' } }}>
            <IconButton size="small" aria-label="show 4 new mails" color="inherit" sx={{m:1,'@media (max-width: 820px)': {
             m:0
            }}}>
                <SearchIcon />
            </IconButton>

            <IconButton size="small" aria-label="show 4 new mails" color="inherit"sx={{m:1,'@media (max-width: 820px)': {
             m:0
            }}}>
            <Avatar sx={{ width: 24, height: 20 }} variant="square" src={require("../../../../../assets/flag.png")} />
            </IconButton>

            <IconButton size="small" aria-label="show 4 new mails" color="inherit"sx={{m:1,'@media (max-width: 820px)': {
             m:0
            }}}>
                <GridViewIcon />
            </IconButton>

            <IconButton
              size="small"
              aria-label="show 17 new notifications"
              color="inherit"sx={{m:1,'@media (max-width: 820px)': {
                m:0
               }}}
            >
              <Badge badgeContent={4} color="error">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>

            <IconButton size="small" aria-label="show 4 new mails" color="inherit"sx={{m:1,'@media (max-width: 820px)': {
             m:0
            }}}>
                <SettingsIcon />
            </IconButton>

            <IconButton
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-controls='primary-search-account-menu'
              aria-haspopup="true"
              color="inherit"sx={{m:1,'@media (max-width: 820px)': {
                m:0
               }}}
            >
              <Avatar sx={{ width: 25, height: 25 }} src={require("../../../../../assets/profile.jpg")} />
            </IconButton>
          </Box>
         
        </Toolbar>
      </AppBar>
        </Box>
  )
}
