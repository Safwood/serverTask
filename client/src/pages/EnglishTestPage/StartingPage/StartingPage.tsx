import React from 'react';
import Typography from '@material-ui/core/Typography';
import './StartingPage.css'
import Button from '@material-ui/core/Button';
// import { useDispatch, useSelector} from "react-redux"
// import { RootState } from '../../../redux/rootReducer'
// import { OneThemeType } from '../../../types';
// import { Link } from 'react-router-dom';
// import DeleteIcon from '@material-ui/icons/Delete';

export type IStartingPageProps = {
  passedTest: boolean
  onClick: () => void
  lastResult: string | null
}

const StartingPage: React.FC<IStartingPageProps> = ({ passedTest, onClick, lastResult }) => {
  return (
    <div className="start">
      <Typography variant="body1" className="start__text">Тест состоит из 50 вопросов с  тремя вариантами ответа на каждый из них. Время выполнения теста неограничено. В конце выполнения теста Вы сможете увидеть результат теста и количество правильных ответов.</Typography>
    {!passedTest
    ? <div  className="button__wrapper">
      <Button onClick={onClick}>Начать тест</Button>
    </div>
    : <div  className="button__wrapper">
        {lastResult ? <div>Ваш последний результат: {lastResult}</div> : null}
        <Button onClick={onClick}>Пройти снова</Button>
      </div>
    }
    </div>
  );
}

export default StartingPage