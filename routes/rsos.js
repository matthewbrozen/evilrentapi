// express router
var express = require('express')
var router = express.Router()

// requirements
var rsosController = require('../controllers/rsos')

// cors header
router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})


// POST one report
router.post('/', rsosController.compare)


// export router
module.exports = router
