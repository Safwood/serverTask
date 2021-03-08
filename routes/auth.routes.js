const {Router} = require('express');
const User = require('../models/User');
const router = Router();
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');

//   /api/auth/register
router.post('/register', 
[
  check('email', 'Некорректный почтовый адрес').isEmail(),
  check('password', 'Минимальная длина пароля 6 символов').isLength({ min:6 })
],
async (req, res) => {
  try {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      return res.status(400).json({ 
        errors: errors.array(),
        message: 'Некорректные данные'
      })
    }

    const {email, password} = req.body;
    const candidate = await User.findOne({ email })

    if(candidate) {
      return res.status(400).json({ message: "Такой пользователь уже существует" })
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({email, password: hashedPassword});

    await user.save();
    const savedUser = await User.findOne({ email })

    res.status(201).json({ userId: savedUser.id, message: "Пользователь  создан"})


  } catch (e) {
    res.status(500).json({ message: "Что-то  пошло не так..."})
  }
})

//   /api/auth/login
router.post('/login', 
[
  check('email', 'Некорректный почтовый адрес').normalizeEmail().isEmail(),
  check('password', 'Некорректный пароль').exists()
],
async (req, res) => {
  try {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      return res.status(400).json({ 
        errors: errors.array(),
        message: 'Некорректные данные'
      })
    }

    const {email, password} = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Пользователь не  зарегистрирован" })
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) {
      return res.status(400).json({ message: "Некорректные данные" })
    }

    const token = jwt.sign(
      { userId: user.id},
      config.get('jwtSecret'),
      {expiresIn: '1h'}
    )

    res.json({ token, userId: user.id })


  } catch (e) {
    res.status(500).json({ message: "Что-то  пошло не так..."})
  }
})

module.exports = router;