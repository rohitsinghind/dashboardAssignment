import React from 'react'
import { styles } from './styles'
import DashNav from './components/dashNav';
import DashCont from './components/dashCont';

import {Container, Box} from '@mui/material';

export default function Dashboard() {
  return (
    <Container disableGutters={true} maxWidth={false} sx={styles.container}>
       <DashNav/>
       <DashCont/>
    </Container>
  )
}
