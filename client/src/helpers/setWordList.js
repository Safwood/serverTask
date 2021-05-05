export function setWordList(wordList) {
  const result = {}
   wordList.forEach((topic) => {
    result[topic._id] = {
        topic: topic.topic,
        words: topic.words,
        wordsId: topic._id
    }
  });
  // console.log(result)

  return result
}