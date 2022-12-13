const sequelize = require('../config/connection');
const { User, Review, Book, Comment } = require('../models');

const userData = require('./userSeedData.json');
const bookData = require('./bookSeedData.json');
const reviewData = require('./reviewSeedData.json');
const commentData = require('./commentSeedData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
    });
    await Book.bulkCreate(bookData);
    await Review.bulkCreate(reviewData);
    await Comment.bulkCreate(commentData);

    console.log('\n----- DATABASE SYNCED -----\n');
    console.log('\n----- USERS SEEDED -----\n');
    console.log('\n----- BOOKS SEEDED -----\n');
    console.log('\n----- REVIEWS SEEDED -----\n');
    console.log('\n----- COMMENTS SEEDED -----\n');

    process.exit(0);
}

seedDatabase()