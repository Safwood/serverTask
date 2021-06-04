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
      if(wordsId && wordsId !== 'null' && wordsId !== null) {
        oldWords = await Words.findOneAndUpdate( { _id: wordsId}, {words: words, topic: topic}, function(err, user){
          if(err) {
            return console.log(err);
          } else {
            console.log("Обновленный объект", user);
          }
        })
        res.status(201).json({ 
          wordsId: wordsId, 
          words: oldWords.words, 
          topic: oldWords.topic, 
          message: "Список слов обновлен"
        })
      } else {
        console.log( "новые слова")
        const newWords = new Words({topic, words, user: req.user.userId || req.user.id});
        await newWords.save();
        const savedWords = await Words.findOne({ topic })
        console.log( savedWords)

        res.status(201).json({ 
          wordsId: savedWords.id, 
          words: savedWords.words, 
          topic: savedWords.topic, 
          message: "Список слов добавлен"})
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

      if(wordList.length) {
        return res.json({ wordList, message: "Список слов найден."})
      } else {
        res.status(500).json({ message: "Список слов пуст."})
      }

      
    } catch (e) {
      res.status(500).json({ message: "Что-то  пошло не так в wordsFetch..."})
    }
})
// /api/words/delete
router.post('/delete', authMiddleware,
  async (req, res) => {
    try {
      const {topic, wordsId} = req.body;
      
      await Words.findOneAndDelete({_id: wordsId}, function(err, user){
        if(user) {
          return res.status(201).json({ topic, wordsId, message: "Список слов удалён."})
        } else {
          return res.status(500).json({ message: "Список слов не найден."})
        }
      })

    } catch (e) {
      res.status(500).json({ message: "Что-то  пошло не так при удалении слов..."})
    }
})

module.exports = router;