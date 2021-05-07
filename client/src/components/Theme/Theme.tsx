
import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import './Theme.css'
import { useSelector} from "react-redux"
import { RootState } from '../../redux/rootReducer'
import { useParams } from 'react-router-dom';

// type ThemePropType = {
//   topic: string
//   themeId: string
// }

function Theme() {
  const themeWords = useSelector((state: RootState) => state.words.wordList)
  const {id}: any = useParams();
  let filteredWords;

  if(themeWords) {
    filteredWords = themeWords[id]
  }
  
  return (
    <div className="container">
      <div className="topic">
        <div className="topic__content">
          <Typography className="topic__heading" variant="h2" >{filteredWords ? filteredWords.topic : null}</Typography>
          <ul className="topic__list" >
            {filteredWords && filteredWords.words
            ?
              filteredWords.words.map((line: Array<string>, index: number) => {
                return <li key={index} className="topic__item">
                  <Typography className="topic__word" variant="body2">{line[0]  || undefined} - {line[1]  || undefined}</Typography>
                </li>
              })
              : null
            }
          </ul>
          <div className="topic__links">
            <Link to="/vocabulary" className="topic__link">Назад</Link>
            <Link to={`/vocabulary/edit/${id}`} className="topic__link">Изменить</Link>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Theme;