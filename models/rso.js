var mongoose = require('mongoose')

var rsoSchema = mongoose.Schema({
  address: String
})

var Rso = mongoose.model('Rso', rsoSchema)
module.exports = Rso
