import React from 'react';
import Typography from '@material-ui/core/Typography';
import './TestResult.css';

export type ITestResultProps = {
  lastResult: string | null
  rigthAnswers: number
}

const TestResult: React.FC<ITestResultProps> = ({ lastResult, rigthAnswers }) => {
  return (
    <div className="results">
      <Typography variant="body1" className="results__text">
        Ваш уровень английского <b>{lastResult}</b>.
      </Typography>
      <Typography variant="body1" className="results__text">
        Правильных ответов: <b>{rigthAnswers}/50</b>.
      </Typography>
    </div>
  );
}

export default TestResult;