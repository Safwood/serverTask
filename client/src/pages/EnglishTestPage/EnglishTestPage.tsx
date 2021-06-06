import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import StartingPage from './StartingPage/StartingPage';
import Test from './Test/Test';
import "./EnglishTestPage.css"


const EnglishTestPage: React.FC = ({ }) => {
  const [testOn, setTestOn] = React.useState<boolean>(false);
  const [passedTest, setPassedTest] = React.useState<boolean>(false);
  const [lastResult, setLastResult] = React.useState<string | null>(null);

  const handlePassTest = (): void => {
    setPassedTest(!passedTest)
  }
  const handleClick = (): void => {
    setTestOn(!testOn)
  }
  const setResult = (value: string): void => {
    setLastResult(value)
  }
  return (
    <Container maxWidth="md"  className="page__container">
      <Typography variant="h2"  className="page__title">
        Тест
      </Typography>
      {!testOn
      ? <StartingPage passedTest={passedTest} onClick={handleClick} lastResult={lastResult}/>
      : <Test handleChange={handlePassTest} changeResult={setResult} passedTest={passedTest} lastResult={lastResult}/>
      }
    </Container>
  )
}

export { EnglishTestPage };



