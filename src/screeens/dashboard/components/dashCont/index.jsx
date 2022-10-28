import React from 'react'
import { styles } from './styles'

import Navbar from './components/Navbar';
import Profile from './components/Profile';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PieChartIcon from '@mui/icons-material/PieChart';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalMallIcon from '@mui/icons-material/LocalMall';

export default function DashCont({show, setShow}) {
  return (
        <Box sx={show?styles.mBox:styles.box}>
          <Navbar show={show} setShow={setShow}/>
          <Box sx={styles.box2}>
          <Box sx={styles.boxL}>
            <Box sx={styles.box4}>
              <Paper variant="outlined" sx={styles.paper1}>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" sx={{height:40, width: 30}} startIcon={<PieChartIcon />}/>
                <Box>
                  <Typography sx={{color:"gray",fontSize: 12}}>Revenue</Typography>
                  <Typography sx={{fontSize: 18, fontWeight:"bold"}}>$21,456</Typography>
                </Box>
                </Stack>
                <Typography sx={{fontSize: 12, color:"#689c75", background:"#edfaf0", borderRadius:4, alignSelf:"flex-end",px:1}}>+2.65%</Typography>
              </Paper>

              <Paper variant="outlined" sx={styles.paper1}>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" sx={{height:40, width: 30}} startIcon={<LocalMallIcon />}/>
                <Box>
                  <Typography sx={{color:"gray",fontSize: 12}}>Order</Typography>
                  <Typography sx={{fontSize: 18, fontWeight:"bold"}}>5,643</Typography>
                </Box>
                </Stack>
                <Typography sx={{fontSize: 12, color:"#e15f5f", background:"#fceeee", borderRadius:4, alignSelf:"flex-end",px:1}}>-0.82%</Typography>
              </Paper>

              <Paper variant="outlined" sx={styles.paper1}>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" sx={{height:40, width: 30}} startIcon={<PeopleAltIcon />}/>
                <Box>
                  <Typography sx={{color:"gray",fontSize: 12}}>Customers</Typography>
                  <Typography sx={{fontSize: 18, fontWeight:"bold"}}>45,254</Typography>
                </Box>
                </Stack>
                <Typography sx={{fontSize: 12, color:"#e15f5f", background:"#fceeee", borderRadius:4, alignSelf:"flex-end",px:1}}>-1.04%</Typography>
              </Paper>
            </Box>

            <Paper variant="outlined" sx={styles.paper2}>
              <Box>
              <Box sx={styles.box3}>
              <Typography sx={{fontSize: 16, fontWeight:"bold"}}>Overview</Typography>
              <Stack direction="row" spacing={0.5} >
              <Typography sx={{fontSize: 14, fontWeight:"bold"}}>Sort By:</Typography>
                  <Typography sx={{color:"gray",fontSize: 14}}>Yearly</Typography>
                  <ExpandMoreIcon/>
                  </Stack>
              </Box>

              <Stack direction="row" spacing={2} sx={{my:3}}>
                <Box>
                  <Typography sx={{color:"gray",fontSize: 12}}>This Month</Typography>
                  <Typography sx={{fontSize: 22, fontWeight:"bold"}}>$24,568</Typography>
                </Box>
                <Typography sx={{fontSize: 12, color:"#689c75", background:"#edfaf0", borderRadius:4, alignSelf:"flex-end",px:1}}>+2.65%</Typography>
                </Stack>
                
                <Box sx={styles.grid2}>
                    <Paper variant="outlined" sx={styles.paper3}>
                      <Typography sx={{color:"gray",fontSize: 12}}>Orders</Typography>
                      <Typography sx={{fontSize: 16, fontWeight:"bold"}}>5,643</Typography>
                    </Paper>
                    <Paper variant="outlined" sx={styles.paper3}>
                      <Typography sx={{color:"gray",fontSize: 12}}>Sales</Typography>
                      <Typography sx={{fontSize: 16, fontWeight:"bold"}}>16,273</Typography>
                    </Paper>
                    <Paper variant="outlined" sx={styles.paper3}>
                      <Typography sx={{color:"gray",fontSize: 12}}>Order Value</Typography>
                      <Typography sx={{fontSize: 16, fontWeight:"bold"}}>12,03%</Typography>
                    </Paper>
                    <Paper variant="outlined" sx={styles.paper3}>
                      <Typography sx={{color:"gray",fontSize: 12}}>Customers</Typography>
                      <Typography sx={{fontSize: 16, fontWeight:"bold"}}>21,456</Typography>
                    </Paper>
                    <Paper variant="outlined" sx={styles.paper3}>
                      <Typography sx={{color:"gray",fontSize: 12}}>Income</Typography>
                      <Typography sx={{fontSize: 16, fontWeight:"bold"}}>$35,652</Typography>
                    </Paper>
                    <Paper variant="outlined" sx={styles.paper3}>
                      <Typography sx={{color:"gray",fontSize: 12}}>Expenses</Typography>
                      <Typography sx={{fontSize: 16, fontWeight:"bold"}}>$12,248</Typography>
                    </Paper>
                </Box>
                </Box>
                <Box sx={{display:"flex",alignItems:"center"}}>
                  <img style={{width:"100%"}} src={require("../../../../assets/graph.png")} alt="" />
                </Box>
            </Paper>

            <Box sx={styles.box4}>

            <Paper variant="outlined" sx={styles.paper4}>
              <Box sx={styles.box3}>
                <Typography sx={{fontSize: 16, fontWeight:"bold"}}>User Activity</Typography>
                  <Stack direction="row" spacing={0.5} >
                  <Typography sx={{color:"gray",fontSize: 14}}>Weekly</Typography>
                  <ExpandMoreIcon/>
                  </Stack>
                </Box>
                <Box sx={{my:3}}>
                  <Typography sx={{color:"gray",fontSize: 12}}>This Month</Typography>
                  <Typography sx={{fontSize: 18, fontWeight:"bold"}}>16,543</Typography>
                </Box>
                <Box sx={{display:"flex",alignItems:"center"}}>
                  <img style={{width:"100%"}} src={require("../../../../assets/graph2.jpg")} alt="" />
                </Box>
            </Paper>

            <Paper variant="outlined" sx={styles.paper4}>
              <Box sx={styles.box3}>
                <Typography sx={{fontSize: 16, fontWeight:"bold"}}>Order Status</Typography>
                  <MoreHorizIcon sx={{color:"gray"}}/>
                </Box>
    
                <Box sx={{display:"flex",alignItems:"center"}}>
                  <img style={{width:"100%"}} src={require("../../../../assets/graph3.png")} alt="" />
                </Box>
                <Divider sx={{my:2}}/>
                <Box sx={styles.box3}>
                  <Typography sx={{color:"gray",fontSize: 14, mx:2}}>Completed</Typography>
                  <Typography sx={{color:"gray",fontSize: 14}}>Pending</Typography>
                  <Typography sx={{color:"gray",fontSize: 14, mx:2}}>Cancel</Typography>
                </Box>

            </Paper>

            <Paper variant="outlined" sx={styles.paper4}>
              <Box sx={styles.box3}>
                <Typography sx={{fontSize: 16, fontWeight:"bold"}}>Top Product</Typography>
                  <Stack direction="row" spacing={0.5} >
                  <Typography sx={{color:"gray",fontSize: 14}}>Monthly</Typography>
                  <ExpandMoreIcon/>
                  </Stack>
                </Box>
                <Divider sx={{mb:1,mt:4}}/>

                <Box sx={styles.box3}>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" sx={{height:40, width: 20, fontWeight:"bold"}} >#1</Button>
                <Box>
                  <Typography sx={{color:"gray",fontSize: 12}}>Polo blue T-shirt</Typography>
                  <Typography sx={{fontSize: 14, fontWeight:"bold"}}>$25.4</Typography>
                </Box>
                </Stack>
                <Typography sx={{fontSize: 12, background:"#f2f3f7", borderRadius:4, alignSelf:"flex-end",px:2, py:0.5}}>3.82K</Typography>
              </Box>

              <Divider sx={{my:1}}/>

              <Box sx={styles.box3}>
              <Stack direction="row" spacing={2}>
              <Button variant="contained" sx={{height:40, width: 20, fontWeight:"bold"}} >#2</Button>
                <Box>
                  <Typography sx={{color:"gray",fontSize: 12}}>Hoodle for men</Typography>
                  <Typography sx={{fontSize: 14, fontWeight:"bold"}}>$25.4</Typography>
                </Box>
                </Stack>
                <Typography sx={{fontSize: 12, background:"#f2f3f7", borderRadius:4, alignSelf:"flex-end",px:2, py:0.5}}>3.14K</Typography>
              </Box>

              <Divider sx={{my:1}}/>

              <Box sx={styles.box3}>
              <Stack direction="row" spacing={2}>
              <Button variant="contained" sx={{height:40, width: 20, fontWeight:"bold"}} >#3</Button>
                <Box>
                  <Typography sx={{color:"gray",fontSize: 12}}>Red color Cap</Typography>
                  <Typography sx={{fontSize: 14, fontWeight:"bold"}}>$25.4</Typography>
                </Box>
                </Stack>
                <Typography sx={{fontSize: 12, background:"#f2f3f7", borderRadius:4, alignSelf:"flex-end",px:2, py:0.5}}>3.06K</Typography>
              </Box>

              <Divider sx={{my:1}}/>

              <Box sx={styles.box3}>
              <Stack direction="row" spacing={2}>
              <Button variant="contained" sx={{height:40, width: 20, fontWeight:"bold"}} >#4</Button>
                <Box>
                  <Typography sx={{color:"gray",fontSize: 12}}>Pocket T-shirt</Typography>
                  <Typography sx={{fontSize: 14, fontWeight:"bold"}}>$25.4</Typography>
                </Box>
                </Stack>
                <Typography sx={{fontSize: 12, background:"#f2f3f7", borderRadius:4, alignSelf:"flex-end",px:2, py:0.5}}>3.06K</Typography>
              </Box>

              <Divider sx={{my:1}}/>

            </Paper>

          </Box>

          </Box>

          <Box sx={styles.boxR}>
            <Profile/>
          </Box>
          </Box>
        </Box>
  )
}
