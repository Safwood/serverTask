import React, { useState, useCallback } from 'react'
import Typography from '@material-ui/core/Typography';
import './ThemeEdit.css'
import { useDispatch, useSelector} from "react-redux"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { arrangeWordList } from '../../../helpers/arrangeWordList'
import { RootState } from '../../../redux/rootReducer'
import { useParams } from 'react-router-dom';
import { OneThemeType } from '../../../types';



function ThemeEdit() {
  const themeWords = useSelector((state: RootState) => state.words.wordList)
  const {id}: any = useParams();
  const dispatch = useDispatch();
  const saveWords = useCallback((topic, words, wordsId) => dispatch({type: 'words/SAVE_WORDS', payload: {topic, words, wordsId}}), [dispatch]);
  let filteredWords: OneThemeType = {
    topic: '',
    words: [],
    wordsId: ''
  }; 

  if(themeWords && id !== 'null') {
    filteredWords = themeWords[id]
  }

  const [wordList, setWordList] = useState({
    words: filteredWords.words
  });

  const [theme, setTheme] = useState(filteredWords.topic);
  const [currentValue, setcurrentValue] = useState("");

  const handleClick = (): void => {
    const newWords = arrangeWordList(currentValue)
    let words = Object.assign(wordList)
    newWords.forEach(array => words.words.push(array))
    
    setWordList(words)
    setcurrentValue("")
  }

  const handleChange = (e: any): void => {
    setcurrentValue(e.target.value)
  }

  const clean = (): void => {
    setWordList({ words: [] })
  }

  const saveWordList = (): void => {
    saveWords(theme, wordList.words, id)
  }

  return (
    <div className="container">
      <div className="topic">
        <Button onClick={saveWordList}>Сохранить
        </Button>
      <Grid className="content">
          <Grid  className="column">
            <form >
              <input type="text" placeholder="Название темы" onChange={e => setTheme(e.target.value)}/>
              <textarea className={"words"} onChange={handleChange} placeholder="Введите список слов сплошным текстом, разделяя слова только пробелом. Например: 'sun солнце tree дерево'." value={currentValue}/>
            </form>
            <Button onClick={handleClick}>Добавить</Button>
          </Grid>
          <Grid className="column">
            <Typography className="itemTitle" variant="h3" >{theme ? theme : null}</Typography>
            <ul className="contentList" >
              {wordList && wordList.words
              ? wordList.words.map((line, index) => {
                  return <li key={index} className="item">
                    <input className="itemWord" value={line[0]  || undefined} readOnly/>
                    <p className="itemWordDash">-</p>
                    <input className="itemWord" value={line[1]  || undefined} readOnly/>
                    {/* <button  className="deleteButton" onClick={null}>Х</button> */}
                  </li>
                })
                //TODO : провеприть на наличие цифр, добавить удаление одного слова, удалление пробелов
              : null
              }
            </ul>
            <Button onClick={clean}>Очистить</Button>
          </Grid>
      </Grid>
      </div>
    </div>
    
  )
}

export default ThemeEdit;