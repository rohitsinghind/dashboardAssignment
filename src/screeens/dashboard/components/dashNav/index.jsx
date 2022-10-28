import React,{useState} from 'react'
import { styles } from './styles'

import { ThemeProvider, createTheme } from '@mui/material/styles';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import GridViewIcon from '@mui/icons-material/GridView';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ChatIcon from '@mui/icons-material/Chat';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ReceiptIcon from '@mui/icons-material/Receipt';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ContactsIcon from '@mui/icons-material/Contacts';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import SubjectIcon from '@mui/icons-material/Subject';

export default function DashNav() {

  const darkTheme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#7d7d7d',
      },
      active: {
        // This is green.A700 as hex.
        main: '#fdfdfd',
      },
      bgcolor:{
        main:"#2D2D2D"
      }
    },
  });

  const [open, setOpen] = useState(true);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);


  return (
        <ThemeProvider theme={darkTheme}>
          <List
      sx={{ width: '100%', maxWidth: 300, bgcolor: '#010423', color:"#a0a0a0" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListItemButton sx={{color:"white", height:70}} >
        <ListItemIcon sx={{color:"white"}}>
          {/* <GridViewIcon /> */}
        </ListItemIcon>
        <ListItemText primaryTypographyProps={{color:"#a0a0a0"}} primary="" />
        <SubjectIcon sx={{ color:"#a0a0a0" }}/>
      </ListItemButton>
      }
    >
      <ListSubheader sx={{ bgcolor: '#010423', color:"#a0a0a0" }} component="div" id="nested-list-subheader">
          MENU
        </ListSubheader>
      
      <ListItemButton sx={{color:"white"}} onClick={()=>setOpen(!open)}>
        <ListItemIcon sx={{color:"white"}}>
          <GridViewIcon />
        </ListItemIcon>
        <ListItemText primaryTypographyProps={{color:"white"}} primary="Dashboards" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemIcon>
              {/* <StarBorder /> */}
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{color:"white"}}  primary="Ecommerce" />
          </ListItemButton>  

          <ListItemButton sx={{ pl: 2 }}>
            <ListItemIcon>
              {/* <StarBorder /> */}
            </ListItemIcon>
            <ListItemText primary="Saas" />
          </ListItemButton> 

          <ListItemButton sx={{ pl: 2 }}>
            <ListItemIcon>
              {/* <StarBorder /> */}
            </ListItemIcon>
            <ListItemText primary="Crypto" />
          </ListItemButton> 
        </List>
      </Collapse>

      <ListSubheader sx={{ bgcolor: '#010423', color:"#a0a0a0" }} component="div" id="nested-list-subheader">
          APPLICATIONS
        </ListSubheader>

      <ListItemButton>
        <ListItemIcon sx={{color:"#a0a0a0"}}>
          <CalendarMonthIcon />
        </ListItemIcon>
        <ListItemText primary="Calendar" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon sx={{color:"#a0a0a0"}}>
          <ChatIcon />
        </ListItemIcon>
        <ListItemText primary="Chat" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon sx={{color:"#a0a0a0"}}>
          <FolderOpenIcon />
        </ListItemIcon>
        <ListItemText primary="File Manager" />
      </ListItemButton>
      
      
      <ListItemButton onClick={()=>setOpen2(!open2)}>
        <ListItemIcon sx={{color:"#a0a0a0"}}>
          <ShoppingBagIcon />
        </ListItemIcon>
        <ListItemText primary="Ecommerce" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <ListItemButton onClick={()=>setOpen3(!open3)}>
        <ListItemIcon sx={{color:"#a0a0a0"}}>
          <MailOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="Email" />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <ListItemButton onClick={()=>setOpen4(!open4)}>
        <ListItemIcon sx={{color:"#a0a0a0"}}>
          <ReceiptIcon />
        </ListItemIcon>
        <ListItemText primary="Invoices" />
        {open4 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <ListItemButton onClick={()=>setOpen5(!open5)}>
        <ListItemIcon sx={{color:"#a0a0a0"}}>
          <WorkOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="Projects" />
        {open5 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <ListItemButton onClick={()=>setOpen6(!open6)}>
        <ListItemIcon sx={{color:"#a0a0a0"}}>
          <ContactsIcon />
        </ListItemIcon>
        <ListItemText primary="Contacts" />
        {open6 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <ListSubheader sx={{ bgcolor: '#010423', color:"#a0a0a0" }} component="div" id="nested-list-subheader">
          LAYOUTS
      </ListSubheader>

      <ListSubheader sx={{ bgcolor: '#010423', color:"#a0a0a0" }} component="div" id="nested-list-subheader">
          PAGES
      </ListSubheader>

      <ListItemButton sx={{ pl: 2 }}>
        <ListItemIcon sx={{color:"#a0a0a0"}}>
        <PersonAddAltIcon />
        </ListItemIcon>
        <ListItemText primary="Authentication" />
      </ListItemButton>  

      <ListItemButton onClick={()=>setOpen7(!open7)}>
        <ListItemIcon sx={{color:"#a0a0a0"}}>
          <ViewInArIcon />
        </ListItemIcon>
        <ListItemText primary="Utility" />
        {open7 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <ListSubheader sx={{ bgcolor: '#010423', color:"#a0a0a0" }} component="div" id="nested-list-subheader">
         COMPONENTS
      </ListSubheader>

      <ListItemButton onClick={()=>setOpen8(!open8)}>
        <ListItemIcon sx={{color:"#a0a0a0"}}>
          <DesignServicesIcon />
        </ListItemIcon>
        <ListItemText primary="UI Elements" />
        {open8 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <ListItemButton onClick={()=>setOpen9(!open9)}>
        <ListItemIcon sx={{color:"#a0a0a0"}}>
          <DriveFileRenameOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="Forms" />
        {open9 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      
    </List>
    </ThemeProvider>
  )
}
