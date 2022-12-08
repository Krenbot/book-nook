const { User } = require('../models/User');

const userData = [
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

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;