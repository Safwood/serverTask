import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector} from "react-redux"
import {Switch, Route, Redirect} from "react-router-dom"
import {VocabularyPage} from './pages/VocabularyPage/VocabularyPage'
import MainPage from './pages/MainPage/MainPage'
import LoginPage from './pages/LoginPage/LoginPage'
import ProfilePage from './pages/PropfilePage/PropfilePage'
import Header from "./components/Header/Header"
import { theme } from "./theme";
import  Theme  from "./components/Theme/Theme";
import  ThemeEdit  from "./components/ThemeEdit/ThemeEdit";
import { ThemeProvider } from "@material-ui/core";

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const dispatch = useDispatch();
  const getUsersData = useCallback(() => dispatch({type: 'userdata/GET_USER_DATA'}), [dispatch]); 
  const getWords = useCallback(() => dispatch({type: 'words/GET_WORDS'}), [dispatch]); 

  useEffect(() => {
    if(isAuthenticated) {
      getUsersData()
      getWords()
    }

  }, [getUsersData, getWords, isAuthenticated])

  return (
    <ThemeProvider theme={theme}>
        <div>
          <Header />
          {isAuthenticated 
          ?
          (
          <Switch>
            <Route path="/" exact >
              <MainPage />
            </Route>
            <Route path="/profile" >
              <ProfilePage />
            </Route>
            <Route path="/vocabulary" exact>
              <VocabularyPage />
            </Route>
            <Route path="/vocabulary/topic/:id">
              <Theme />
            </Route>
            <Route path="/vocabulary/edit/:id">
              <ThemeEdit />
            </Route>
            <Redirect to="/"/>
          </Switch>
          )
            :
          (
            <Switch>
              <Route path="/login">
                  <LoginPage />
              </Route>
              <Redirect to="/login"/>
            </Switch>
          )
        }
    </div>
    </ThemeProvider>
  )
}


export default App;

