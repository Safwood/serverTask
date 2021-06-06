import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import "./MainPage.css"

function MainPage() {
  return (
    <Container maxWidth="md" className="page__container">
      <Typography variant="h2" className="page__title">О приложении</Typography>
      <Typography variant="body1" className="page__content">В этом приложении Вы можете создавать свои собственные списки слов 
      для изучения, заучивать слова, а также Вы можете пройти лексико-грамматический тест на определения 
      уровня английского языка. Тест взят из учебника Outcomes издательства «National Geographic Learning».</Typography>
    </Container>
  )
}

export default MainPage;