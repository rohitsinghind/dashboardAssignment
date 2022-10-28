import React,{useState} from 'react'
import { styles } from './styles'
import DashNav from './components/dashNav';
import DashCont from './components/dashCont';

import {Container, Box} from '@mui/material';

export default function Dashboard() {

  const mediaQuery = window.matchMedia("(max-width: 499px)");

  const [show, setShow] = useState(!mediaQuery.matches);

  return (
    <Container disableGutters={true} maxWidth={false} sx={styles.container}>
       {show?<DashNav show={show} setShow={setShow}/>:""}
       <DashCont setShow={setShow} show={show}/>
    </Container>
  )
}
