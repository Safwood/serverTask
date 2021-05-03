import React from 'react'
import {NavLink} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import ThemeList from '../../components/ThemeList/ThemeList'
// import ThemeList from '../../components/ThemeList/ThemeList'

export const VocabularyPage = (props) => {

  return (
    <div className="container">
      <Typography variant="h2" >
        Vocabulary
      </Typography>
      <ThemeList />
     <NavLink to="/profile">
      <Typography variant="body1" >
        Profile
      </Typography>
    </NavLink>
     <NavLink to="/topics">
      <Typography variant="body1" >
          Topics
      </Typography>
    </NavLink>
    </div>
  )
}


export default VocabularyPage;