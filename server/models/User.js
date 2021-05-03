const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  email: {type: String,  require: true, unique: true},
  password: {type: String,  require: true},
  words : [{type: Types.ObjectId, ref:'Words'}]
})

module.exports = model( 'User', schema)