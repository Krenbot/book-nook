const sequelize = require('../config/connection');
const { User, Review, Book, Comment } = require('../models');

const userSeedData = require('./user-seeds');
const bookSeedData = require('./book-seeds');
const reviewSeedData = require('./review-seeds');
const commentSeedData = require('./comment-seeds');