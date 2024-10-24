const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe("Deletes records", function(){
    //create test
    var char

    beforeEach(function(done){
        char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(function() {
            assert(char.isNew === false);
            done();
        });

    })

    it("Deletes one record from the database", function(done){
        MarioChar.findOneAndDelete({name: 'Mario'}).then(function(){
            MarioChar.findOne({name: 'Mario'}).then(function(result){
                assert(result === null)
                done();
            })
        })
    });
    // next test


})