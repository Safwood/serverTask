const express = require('express');
const config = require('config');
const path = require('path');
const mongoose = require('mongoose');
const corsMiddleware = require('./middleware/cors.middleware');


const app = express();

app.use(corsMiddleware)
app.use(express.json({ extended: true }))

// if (process.env.NODE_ENV === 'production') {
//   app.use('/', express.static(path.join(__dirname, 'client', 'build')))

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//   })
// }

const PORT = config.get('port') || 5000;

app.use("/api/auth", require('./routes/auth.routes'))
app.use("/api/words", require('./routes/words.routes'))

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })


    app.listen(PORT, () => {console.log('Server on')})
  } catch (e) {
    console.log('Server error', e.message);
    process.exit(1);
  }
}

start()

