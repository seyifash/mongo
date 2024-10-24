const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe("Updating records", function(){
    //create test
    var char

    beforeEach(function(done){
        char = new MarioChar({
            name: 'Mario',
            weight: 50
        });

        char.save().then(function() {
            done();
        });

    })

    it("Updates one record from the database", function(done){
        MarioChar.findOneAndUpdate({name: 'Mario'}, {name: 'Luigi'}).then(function(){
            MarioChar.findOne({_id: char._id}).then(function(result){
                assert(result.name === 'Luigi')
                done()
            })
        })
    });
    // next test

    it("Increments the weight by one ", function(done){
        MarioChar.updateMany({}, {$inc: {weight: 1}}).then(function(){
            MarioChar.findOne({name: 'Mario'}).then(function(record){
                assert(record.weight === 51)
                done()
            })
        })
    });


})