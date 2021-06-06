import React from 'react'
import ThemeList from './ThemeList/ThemeList'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export const VocabularyPage = () => {

  return (
    <Container maxWidth="md" className="page__container">
      <Typography variant="h2" className="page__title"> Список тем:</Typography>
       <ThemeList />
    </Container>
  )
}


export default VocabularyPage;


