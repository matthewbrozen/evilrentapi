var mongoose = require('mongoose')

var rentSchema = mongoose.Schema({
  amount: Number,
  address: String,
  apartment: String,
  utilities:String,
  name: String,
  phone: Number,
  email: String

})

var Rent = mongoose.model('Rent', rentSchema)
module.exports = Rent
