const User = require('./User')
const Book = require('./Book')
const Review = require('./Review')
const Comment = require('./Comment')

User.hasMany(Book, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

User.hasMany(Review, {
    foreignKey: 'user_id'
})

User.hasMany(Comment, {
    foreignKey: 'user_id'
})

Book.hasOne(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Book.hasMany(Comment, {
    foreignKey: 'user_id'
})

Book.hasMany(Review, {
    foreignKey: 'user_id'
})

Review.belongsTo(Book, {
    foreignKey: 'book_id'
})

Comment.belongsTo(Book, {
    foreignKey: 'book_id'
})

module.exports = {
    User, Book, Review, Comment
}