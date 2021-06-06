import React from 'react';
import './TestCard.css';
// import React, { useState, useCallback } from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
// import { useDispatch, useSelector} from "react-redux"
// import { RootState } from '../../../redux/rootReducer'
// import { useParams } from 'react-router-dom';
// import { OneThemeType } from '../../../types';
// import { Link } from 'react-router-dom';
// import EditIcon from '@material-ui/icons/Edit';

export type ITestCardProps = {
  currentQuestion: {
    [key: string]:  string
  }
  nextQuestion: (value: string) => void
  questionNumber: number
  setPassed: () => void 
}

const TestCard: React.FC<ITestCardProps> = ({ currentQuestion, nextQuestion, questionNumber, setPassed }) => {
  const [answer, setAnswer] = React.useState<string>('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer((event.target as HTMLInputElement).value);
  };

  const handleClick = (): void => {
    nextQuestion(answer)
  }

  return (
    <div className="question">
      <FormControl component="fieldset">
      <FormLabel component="legend">
        <Typography variant="h4">{questionNumber}. {currentQuestion.question}</Typography>
      </FormLabel>
      <RadioGroup aria-label="question" name="question" value={answer} onChange={handleChange}>
        <FormControlLabel value={"a"} control={<Radio />} label={currentQuestion.a} />
        <FormControlLabel value={"b"} control={<Radio />} label={currentQuestion.b} />
        <FormControlLabel value={"c"} control={<Radio />} label={currentQuestion.c} />
      </RadioGroup>
    </FormControl>
      
      {questionNumber < 50
      ? <div className="button__wrapper">
        <Button onClick={handleClick}>Следующий вопрос</Button>
      </div>
      : <div className="button__wrapper">
        <Button onClick={setPassed}>Узнать результат</Button>
      </div>
      }
    </div>
  );
}

export default TestCard;