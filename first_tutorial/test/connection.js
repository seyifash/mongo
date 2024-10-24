const mongoose = require('mongoose');
//Es6 Promise

// mongoose.Promise = global.Promise

// Connect to the database before test runs
before(function(done){

    // Connect to mongodb
    mongoose.connect('mongodb://localhost/testaroo');
    mongoose.connection.once('open', function(){
        console.log('Connection has been made, now fireworks....')
        done();
    }).on('error', function(error){
        console.log('Connection Error:', error)
    })
})

// Drop the characters collection before each test

beforeEach(function(done){
    //Drop the collection

    mongoose.connection.collections.mariochars.drop(function(){
        done();
    })
})

