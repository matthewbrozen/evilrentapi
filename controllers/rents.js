//  requirements
var Rent = require('../models/rent')

// POST one report
function addOne (req, res, next) {

  var rent = new Rent()
  rent.amount = req.body.amount
  rent.address = req.body.address
  rent.expiration = req.body.expiration
  rent.utilities = req.body.utilities
  rent.name = req.body.name
  rent.phone= req.body.phone
  rent.email = req.body.email


  rent.save(function(err, rent) {
    if (err) throw err;
      res.json(rent);
  });
}

// export functions
module.exports = {
  addOne: addOne
}
