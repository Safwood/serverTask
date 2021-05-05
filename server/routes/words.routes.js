const {Router} = require('express');
const Words = require('../models/Words');
const router = Router();
// const bcrypt = require('bcryptjs');
// const {check, validationResult} = require('express-validator');
// const jwt = require('jsonwebtoken');
// const config = require('config');
const authMiddleware = require('../middleware/auth.middleware')


//   /api/words/save
router.post('/save', authMiddleware, 
    async (req, res) => {
    try {
      const {topic, words, wordsId} = req.body;
      let oldWords;

      if(wordsId !== null) {
        oldWords = await Words.findOneAndUpdate( wordsId, {words: words, topic: topic}, function(err, user){
          if(err) {
            return console.log(err);
          } else {
            console.log("Обновленный объект", user);
          }
        })

        res.status(201).json({ 
          wordsId: oldWords._id, 
          words: oldWords.words, 
          topic: oldWords.topic, 
          message: "Список слов обновлен"
        })
      } else {
        const newWords = new Words({topic, words, user: req.user.userId || req.user.id});
        await newWords.save();
        const savedWords = await Words.findOne({ topic })

        res.status(201).json({ wordsId: savedWords.id, message: "Список слов добавлен"})
      }
      
    } catch (e) {
      res.status(500).json({ message: "Что-то  пошло не так..."})
    }
})

// /api/words/get
router.get('/get', authMiddleware,
  async (req, res) => {
    try {
      const wordList = await Words.find({user: req.user.userId || req.user.id})
      console.log(wordList)

      return res.json({ wordList, message: "Список слов найден"})
    } catch (e) {
      res.status(500).json({ message: "Что-то  пошло не так в wordsFetch..."})
    }
})

module.exports = router;