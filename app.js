var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Genre = require('./models/genre'); 
Books = require('./models/book');

mongoose.connect('mongodb://localhost/bookstore');

var db = mongoose.connection;

//routes to get the data
app.get('/', function(req, res){
    res.send('use /api/books or /api/genres');
});

app.get('/api/genres', function(req, res){
    Genre.getGenres(function(err, genres){
        if(err){
            throw err;
        }
        res.json(genres);
    });
});

app.post('/api/genres', function(req, res){ 
    var genre = req.body;
    Genre.addGenre(genre, function(err, genre){ 
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

app.put('/api/genres/:_id', function(req, res){ 
    var id = req.params._id;
    var genre = req.body;
    Genre.updateGenre(id, genre, {}, function(err, genre){ 
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

app.delete('/api/genres/:_id', function(req, res){ 
    var id = req.params._id;
    Genre.deleteGenre(id, function(err, genre){ 
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

app.put('/api/books/:_id', function(req, res){ 
    var id = req.params._id;
    var book = req.body;
    Books.updateBook(id, book, {}, function(err, genre){ 
        if(err){
            throw err;
        }
        res.json(book);
    });
});

app.get('/api/books', function(req, res){
    Books.getBooks(function(err, books){
        if(err){
            throw err;
        }
        res.json(books);
    });
});

app.post('/api/books', function(req, res){
    var book = req.body;
    Books.addBook(book, function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});

app.get('/api/books/:_id', function(req, res){
    Books.getBookById(req.params._id, function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});

app.listen(3000);

console.log('running on port 3000');