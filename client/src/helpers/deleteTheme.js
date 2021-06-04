export function deleteTheme(id, themeWords) {
  let filteredWords = {};
  
  for (let i in themeWords) {
    let list = themeWords[i]
    if (i !== id) {
      filteredWords[i] = list
    }
  }

  return filteredWords;
}