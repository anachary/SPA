var mongoose   = require('mongoose');

//definiendo el modelo

module.exports = mongoose.model('Nerd', {
  name: {
    type: String,
    default: ''
  }
});
