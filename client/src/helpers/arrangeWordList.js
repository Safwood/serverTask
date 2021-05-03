export function arrangeWordList(words) {
  let result = [];
  let currentIndex = 0;
  let filteredWords = words
  .toLowerCase()
  .split('')
  .map(letter => letter.charCodeAt(0) === 10 ? ' ' : letter)
  .join('')
  
  let arrayWithWords = filteredWords.trim().split(" ")

  if(arrayWithWords.length % 2 !== 0) {
    arrayWithWords = arrayWithWords.slice(0, -1);
  }

  
  arrayWithWords.forEach((word, index) => {
    let currentArray = [];
    if (word && index === currentIndex) {
      currentArray.push(word)
      currentIndex++
      currentArray.push(arrayWithWords[currentIndex])
      currentIndex++
      result.push(currentArray)
    }
  })

  return result
}