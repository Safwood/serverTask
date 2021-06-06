import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector} from "react-redux"
import {Switch, Route, Redirect} from "react-router-dom"
import {VocabularyPage} from './pages/VocabularyPage/VocabularyPage'
import MainPage from './pages/MainPage/MainPage'
import LoginPage from './pages/LoginPage/LoginPage'
import ProfilePage from './pages/PropfilePage/PropfilePage'
import { EnglishTestPage } from './pages/EnglishTestPage/EnglishTestPage'
import Header from "./components/Header/Header"
import { theme } from "./theme";
import  Theme  from "./pages/VocabularyPage/Theme/Theme";
import  ThemeEdit  from "./pages/VocabularyPage/ThemeEdit/ThemeEdit";
import { ThemeProvider } from "@material-ui/core";
import { PrivateRoute } from "./privateRoute";


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
            <PrivateRoute path="/profile" >
              <ProfilePage />
            </PrivateRoute>
            <Route path="/test" >
                <EnglishTestPage />
              </Route>
            <PrivateRoute path="/vocabulary" exact>
              <VocabularyPage />
            </PrivateRoute>
            <PrivateRoute path="/vocabulary/topic/:id">
              <Theme />
            </PrivateRoute>
            <PrivateRoute path="/vocabulary/edit/:id">
              <ThemeEdit />
            </PrivateRoute>
            <Redirect to="/"/>
          </Switch>
          )
            :
          (
            <Switch>
              <Route path="/" exact >
                <MainPage />
              </Route>
              <Route path="/login">
                  <LoginPage />
              </Route>
              <Route path="/test" >
                <EnglishTestPage />
              </Route>
              <Redirect to="/"/>
            </Switch>
          )
        }
    </div>
    </ThemeProvider>
  )
}


export default App;

