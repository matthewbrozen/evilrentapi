//  requirements
var Rso = require('../models/rso')


function compare(req, res, next) {
  console.log("checking");

  Rso.find({"Address":{$eq: req.body.address}}, function(err, rsos) {
    if (err) next(err);

    if(rsos!=""){
      res.json("RSO");
    console.log("RSO");}
    else {
      res.json("NOT RSO");
      console.log("NOT RSO");
    }
  });
};


// POST one report
// function addOne (req, res, next) {
//
//   var rso = new Rso()
//   rso.address = req.body.address
//
//
//   rso.save(function(err, rso) {
//     if (err) throw err;
//       res.json(rso);
//   });
// }

// function findOne(req, res, next){
//   rso.find({$where: Address:req.body.address});
//   res.json(rso);
// }

// export functions
module.exports = {
  // addOne: addOne,
  // findOne: findOne
  compare: compare
}
