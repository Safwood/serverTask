import React, { useState, useCallback } from 'react'
import { useDispatch} from "react-redux"
import {NavLink} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { arrangeWordList } from '../../helpers/arrangeWordList'
import './ThemeList.css'

const ThemeList = () => {
  const dispatch = useDispatch();
  const saveWords = useCallback((topic, words) => dispatch({type: 'words/SAVE_WORDS', payload: {topic, words}}), [dispatch]);

  const [wordList, setWordList] = useState({
    words: []
  });

  const [theme, setTheme] = useState("");
  const [currentValue, setcurrentValue] = useState("");

  const handleClick = (e) => {
    const newWords = arrangeWordList(currentValue)
    let words = Object.assign(wordList)
    newWords.forEach(array => words.words.push(array))
    // console.log(words)
    
    setWordList(words)
    setcurrentValue("")
  }

  const handleChange = (e) => {
    setcurrentValue(e.target.value)
  }

  const clean = () => {
    setWordList({ words: [] })
  }
  const save = () => {
    saveWords(theme, wordList.words)
  }

  return (
    <div className="container">
      <NavLink to="/vocabulary">
          <Typography variant="body1">
            Back to vocabulary
          </Typography>
        </NavLink>
      <Button onClick={save}>Сохранить
      </Button>
      <Typography variant="h2" >
        Темы
      </Typography>
     <Grid className="content">
        <Grid  className="column">
          <form >
            <input type="text" placeholder="Название темы" onChange={e => setTheme(e.target.value)}/>
            <textarea className={"words"} onChange={handleChange} placeholder="Введите список слов сплошным текстом, разделяя слова только пробелом. Например: 'sun солнце tree дерево'." value={currentValue}/>
          </form>
          <Button onClick={handleClick}>Добавить</Button>
        </Grid>
        <Grid className="column">
        <Typography variant="h4" >{theme}</Typography>
          <ul className="contentList" >
            {
              wordList.words.map((line, index) => {
                return <li key={index} className="item">
                  <input className="itemWord" value={line[0]  || undefined} readOnly/>
                  <p className="itemWordDash">-</p>
                  <input className="itemWord" value={line[1]  || undefined} readOnly/>
                  <button  className="deleteButton" onClick={null}>Х</button>
                </li>
              })
              //TODO : провеприть на наличие цифр, добавить удаление одного слова
            }
          </ul>
          <Button onClick={clean}>Очистить</Button>
        </Grid>
     </Grid>
      
         
    </div>
  )
}

export default ThemeList;