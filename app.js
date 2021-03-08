const express = require('express');
const config = require('config');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

app.use(express.json({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
  next();
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))

  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', index.html))
  })
}

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.resolve(__dirname, '../public')));
//   app.get('/*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../public/index.html'));
//   });
// }

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

// const PORT = config.get('port') || 5000;
let PORT = process.env.PORT;
if (PORT == null || PORT == "") {
  PORT = 8000;
}

app.use("/api/auth", require('./routes/auth.routes'))
app.use("/api/link", require('./routes/link.routes'))
app.use("/t", require('./routes/redirect.routes'))

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () => {console.log('Server on')})
  } catch (e) {
    console.log('Server error', e.message);
    process.exit(1);
  }
}

start()