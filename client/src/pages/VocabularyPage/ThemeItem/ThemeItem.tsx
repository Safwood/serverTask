
import React, {useCallback} from 'react';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import './ThemeItem.css'
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { RootState } from '../../../redux/rootReducer'

type ThemeItemPropType = {
  theme: string | null
  id: string | null
  onChange: (e: React.ChangeEvent) => void
  checked: boolean
}

function ThemeItem({theme, id, onChange, checked}: ThemeItemPropType) {
  const themeWords = useSelector((state: RootState) => state.words.wordList);
  const dispatch = useDispatch();
  const deleteWords = useCallback((topic, wordsId, wordList) => dispatch({type: 'words/DELETE_WORDS', payload: {topic, wordsId, wordList}}), [dispatch]); 

  // const handleChange = (event: any) => {
    // const data = {id: event.target.checked}
    // onChange(event.target.id);
  // };

  const handleClick = (): void => {
    deleteWords(theme, id, themeWords)
  };

  return (
    <div className="theme__content">
      {
      // id ?  <Checkbox
      //     className="theme__checkbox"
      //     checked={checked}
      //     onChange={handleChange}
      //     id={id ? `${id}` : "null"}
      //   />
      // : 
      <div className="theme__checkbox theme__checkbox--invisible"></div>}
      <div className={id ? "theme" : "theme theme--add"} id={id ? id : "null"}>
        <Link to={id ? `/vocabulary/topic/${id}` : `/vocabulary/edit/${id}`} className="theme__link">
          <Typography className="theme__title" variant="body1">{theme ? theme : "Добавить"}</Typography>
        </Link>
      </div>
      {id
      ?
      <>
        <Link to={`/vocabulary/edit/${id}`} className="theme__edit">
          <EditIcon />
        </Link >
        <button className="theme__delete" onClick={handleClick}>
          <DeleteIcon />
        </button>
      </>
      : 
      <>
        <div className="theme__checkbox theme__checkbox--invisible"></div>
        <div className="theme__checkbox theme__checkbox--invisible"></div>
      </>
      }
    </div>
  )
}

export default ThemeItem;