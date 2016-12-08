//  requirements
var Rent = require('../models/rent')
var nodemailer = require('nodemailer')

// POST one report
function addOne (req, res, next) {

  var rent = new Rent()
  rent.amount = req.body.amount
  rent.address = req.body.address
  rent.apartment = req.body.apartment
  rent.utilities = req.body.utilities
  rent.name = req.body.name
  rent.phone= req.body.phone
  rent.email = req.body.email

  var rsoincrease = (rent.email*.04)


  rent.save()
    .then(function (newRent) {
      // nodemailer set up on report save
      var sendMailTo = function (req, res, next) {
        var transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
            user: 'evilrentsetup@gmail.com',
            pass: 'testword'
          }
        })

        var mailOptions = {
          from: 'Evilrent.com',
          to: newRent.email,
          subject: 'Evil Rent - Rent Review of ' + newRent.address,
          text: ' Thanks for visiting Evilrent.com. We believe your rental at ' + newRent.address + ' could be rent controlled. If your current rent is $' + newRent.amount + ' then your next rent increase should be $' + (newRent.amount * .04) + ". If you didn't upload your lease and still want us to review your lease further go to https://evilrent.herokuapp.com/views/upload.html",
          html: 'Thanks for visiting Evilrent.com. We believe your rental at ' + newRent.address + ' could be rent controlled. If your current rent is $' + newRent.amount + ' then your next rent increase should be $' + (newRent.amount * .04)  + ". If you didn't upload your lease and still want us to review your lease further go to https://evilrent.herokuapp.com/views/upload.html"
        }
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error)
          } else {
            console.log('Message Sent: ' + info.response)
          }
        })
      }

      sendMailTo()
    })






}

// export functions
module.exports = {
  addOne: addOne
}
