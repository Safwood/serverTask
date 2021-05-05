import React from 'react'
import {NavLink} from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


function ProfilePage() {

  return (
    <Container maxWidth="md">
      <Typography variant="h2">
        Моя страница
      </Typography>
      <NavLink to="/vocabulary">
        <Typography variant="body1" >
          Vocabulary
        </Typography>
      </NavLink>
    </Container>
  )
}

export default ProfilePage;