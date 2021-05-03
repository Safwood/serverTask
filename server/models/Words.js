  
const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  topic: {type: String, required: true},
  words: {type: Array,  required: true},
  user: [{type: Types.ObjectId, ref: 'User'}],
  parent: {type: Types.ObjectId, ref: 'Words'},
  children: [{type: Types.ObjectId, ref: 'Words'}]
})

module.exports = model('Words', schema)