import React, { useEffect } from 'react';
import TestCard from './TestCard/TestCard';
import TestResult from './TestResult/TestResult';
import {testQuestions, allQuestionsType, allKeysType, testKeys } from './testQuestions'

export type ITestProps = {
  handleChange: () => void
  changeResult: (value:string) => void
  passedTest: boolean                                        
  lastResult: string | null
}

const Test: React.FC<ITestProps> = ({ handleChange, changeResult, passedTest, lastResult }) => {
  const [currentQuestion, setCurrentQuestion] = React.useState<number>(1);
  const [rigthAnswers, setRigthAnswers] = React.useState<number>(0);
  const [wrongAnswers, setWrongAnswers] = React.useState<number>(0);
  const allQuestions: allQuestionsType = Object.assign(testQuestions);
  const allKeys: allKeysType = Object.assign(testKeys);

  const addAnswer = (value: string): void => {
    if(allKeys[currentQuestion] === value) {
      setRigthAnswers(rigthAnswers+1)
      console.log("right answers", rigthAnswers)
    } else {
      setWrongAnswers(wrongAnswers+1)
      console.log("wrong answers", wrongAnswers)
    }
  }

  const calcResult = (): void => {
    if(rigthAnswers >= 0 && rigthAnswers <= 25) {
      changeResult("Elementary")
    } else if(rigthAnswers >= 26 && rigthAnswers <= 32) {
      changeResult("Pre-Intermediate")
    } else if(rigthAnswers >= 33 && rigthAnswers <= 39) {
      changeResult("Intermediate")
    } else if(rigthAnswers >= 40 && rigthAnswers <= 46) {
      changeResult("Upper-Intermediate")
    } else if(rigthAnswers >= 47) {
      changeResult("Advanced")
    }
  }

  const changeCurrentQuestion = (): void => {
    if(currentQuestion < 50) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handleClick = (value: string): void => {
    addAnswer(value);
    changeCurrentQuestion();
  }

  useEffect(() => {
    if(passedTest) {
      calcResult()
    }
  }, [passedTest]);

  return (
    !passedTest
      ?
      <TestCard setPassed={handleChange} questionNumber={currentQuestion} currentQuestion={allQuestions[currentQuestion]} nextQuestion={handleClick}/>
      :
      <TestResult rigthAnswers={rigthAnswers} lastResult={lastResult}/>
  );
}

export default React.memo(Test)