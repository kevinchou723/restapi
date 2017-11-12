var mongoose = require('mongoose');

//Book Schema
var booksSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    publisher:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    pages:{
        type: String,
        required: true
    },
    buy_url:{
        type: String,
        required: true
    },
    image_url:{
        type: String,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Books = module.exports = mongoose.model('Books', booksSchema);

// Get Books
module.exports.getBooks = function(callback, limit){
    Books.find(callback).limit(limit);
};

// Get Book by id
module.exports.getBookById = function(id, callback){
    Books.findById(id, callback);
};

// Add a book
module.exports.addBook = function(book, callback){
    Books.create(book, callback);
}

// Update book
module.exports.updateBook = function(id, book, options, callback){
    var query = {_id: id};
    var update = {
        title: book.title,
        pages: book.pages,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        image_url: book.image_url,
        buy_url: book.buy_url
    };
    Book.findOneAndUpdate(query, update, options, callback);
}