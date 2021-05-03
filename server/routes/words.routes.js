const {Router} = require('express');
const Words = require('../models/Words');
const router = Router();
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const authMiddleware = require('../middleware/auth.middleware')


//   /api/words/save
router.post('/save', authMiddleware, 
    async (req, res) => {
    try {
     
      const {topic, words} = req.body;
      console.log(topic, words)
      const oldWords = await Words.findAll({ topic })
      console.log(oldWords)

      const newWords = new Words({topic, words, user: req.user.userId || req.user.id});

      await newWords.save();
      const savedWords = await Words.findOne({ topic })

      res.status(201).json({ wordsId: savedWords.id, message: "Список слов добавлен"})


    } catch (e) {
      res.status(500).json({ message: "Что-то  пошло не так..."})
    }
})

// /api/words/data
// router.get('/data', authMiddleware,
//   async (req, res) => {
//     try {
//       const user = await User.findOne({_id: req.user.userId || req.user.id})
//       console.log(user)
//       const token = jwt.sign({id: user.id}, config.get("jwtSecret"), {expiresIn: "1h"})
//       return res.json({ token, userId: user.id })

//     } catch (e) {
//       res.status(500).json({ message: "Что-то  пошло не так в dataFetch..."})
//     }
// })

module.exports = router;