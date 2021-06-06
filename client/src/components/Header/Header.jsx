import React, { useCallback } from 'react';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useStyles } from './styles.module';
import { useDispatch, useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom'

export const Header = () => {
  const dispatch = useDispatch();
  const logOut = useCallback(() => dispatch({type: 'auth/LOG_OUT'}), [dispatch]);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const classes = useStyles();
  const history = useHistory();

  const loginHandler = useCallback(() => {
    history.push('/login')
  }, [history]);

  const logoutHandler = e => {
    e.preventDefault();
    history.push('/login');
    logOut();
  }

  return (
    <header className={classes.header} id={"header"}>
    <AppBar color="primary" position="static">
      <Container maxWidth="lg">
        <Toolbar color="primary.main"  >
          <Typography variant="h2" className={classes.title}>
            Likee
          </Typography>
          {isAuthenticated ? 
            <Grid  className={classes.menuList}>
              <NavLink to="/">
                <Typography variant="body1" className={classes.menuItem}>
                  Main
                </Typography>
              </NavLink> 
              <NavLink to="/test">
                <Typography variant="body1" className={classes.menuItem}>
                  English Test
                </Typography>
              </NavLink> 
              <NavLink to="/vocabulary">
                <Typography variant="body1"  className={classes.menuItem}>
                  Vocabulary
                </Typography>
              </NavLink>
               
            </Grid>
          : 
            <Grid  className={classes.menuList}>
              <NavLink to="/">
                <Typography variant="body1" className={classes.menuItem}>
                  Main
                </Typography>
              </NavLink> 
              <NavLink to="/test">
                <Typography variant="body1" className={classes.menuItem}>
                  English Test
                </Typography>
              </NavLink> 
              </Grid>
              }
          <Button color='inherit' onClick={ isAuthenticated ? logoutHandler : loginHandler } id={"login"}>
            { !isAuthenticated ? 'Login' : 'Logout'}
          </Button>
          
        </Toolbar>
      </Container>
    </AppBar>
  </header>
  )
}

export default Header;