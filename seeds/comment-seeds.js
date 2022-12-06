const { Comment } = require('../models/Comment');

const commentData = [
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;