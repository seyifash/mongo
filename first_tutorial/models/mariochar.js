const mongoose = require('mongoose')
const schema = mongoose.Schema;

// create Schema and Model


const MarioCharSchema =  new schema({
    name: String,
    weight: Number
});

const MarioChar = mongoose.model('marioChar', MarioCharSchema);

module.exports = MarioChar
