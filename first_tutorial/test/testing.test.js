const assert = require('assert');
const mongoose = require('mongoose')

const Author = require('../models/Author')

//Describe oyur tests

describe('Nesting records', function(){

    //creates test
    beforeEach(function(done){
        mongoose.connection.collections.authors.drop(function(){
            done();
        })
    })

    it('creates an author with sub-documents', function(done){
        var pat = new Author({
            name: 'Patrick Rothfuss',
            books: [{title: "Name of the wind", pages: 400}]
        });

        pat.save().then(function(){
            Author.findOne({name: 'Patrick Rothfuss'}).then(function(record){
                assert(record.books.length === 1);
                done()
            })
        })
    })

    it('Adds a new author to the database', function(done){
        var pat = new Author({
            name: 'Patrick Rothfuss',
            books: [{title: "Name of the wind", pages: 400}]
        });

        pat.save().then(function(){
        Author.findOne({name: 'Patrick Rothfuss'}).then(function(record){
            record.books.push({title: "wise Man's Fear", pages: 500})
            record.save().then(function(){
                Author.findOne({name: 'Patrick Rothfuss'}).then(function(result){
                    assert(result.books.length === 2)
                    done()
                })
            })
        })
        })
 
    })
})