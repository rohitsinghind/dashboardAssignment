import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Navbar() {
  return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" elevation={0} color="transparent">
        <Toolbar sx={{color:"#5d5d5d"}}>
     
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: {color:"#1d1d1d", xs: 'none', sm: 'block',fontWeight:"bold" } }}
          >
            Dashboard
          </Typography>
         
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <SearchIcon />
            </IconButton>

            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Avatar sx={{ width: 24, height: 20 }} variant="square" src={require("../../../../../assets/flag.png")} />
            </IconButton>

            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <GridViewIcon />
            </IconButton>

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>

            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <SettingsIcon />
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls='primary-search-account-menu'
              aria-haspopup="true"
              color="inherit"
            >
              <Avatar sx={{ width: 27, height: 27 }} src={require("../../../../../assets/profile.jpg")} />
            </IconButton>
          </Box>
         
        </Toolbar>
      </AppBar>
        </Box>
  )
}
