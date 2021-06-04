import React, { useState, useEffect } from 'react'
import { useSelector} from "react-redux"
import Typography from '@material-ui/core/Typography';
import './ThemeList.css'
import ThemeItem from '../ThemeItem/ThemeItem'
import { RootState } from '../../redux/rootReducer'

type checkedLinesType = {
  [key: string]:  boolean
}

function ThemeList() {
  const [words, setWords]: any = useState(null);
  const allWords = useSelector((state: RootState) => state.words.wordList)
  let keys;
  const checkedLines: checkedLinesType = {};
  // const checkedLines: any = {};
  const [checked, setChecked]: any = React.useState(null);

  const handleChange = (value: any): void => {
    // setChecked(value);
    // setChecked({ ...checked, value })
  };

  useEffect(() => {
    if(allWords) {
      let allWordsArray;
      allWordsArray = Object.entries(allWords)
      setWords(allWordsArray) 
      
      keys = Object.keys(allWords)
      keys.forEach((key => {
        checkedLines[key] = false;
      }))
      setChecked(checkedLines)
    }
  }, [allWords])
  
  return (
    <div className="theme__wrapper">
      <div className="container">
        <Typography  className="theme__heading"variant="h2">Список тем:</Typography>
        <ul className="theme__list">
          {words
          ? words.map((list: Array<any>) => {
            return <li className="theme__item" key={list[0]}>
              <ThemeItem onChange={handleChange} checked={checked[list[0]]} theme={list[1].topic ? list[1].topic : null} id={list[0]}/>
              </li>
            })
          : null
          }
            <li className="theme__item">
              <ThemeItem  onChange={handleChange} checked={false} theme={null} id={null}/>
            </li>
        </ul>         
      </div>
    </div>
  )
}

export default React.memo(ThemeList);