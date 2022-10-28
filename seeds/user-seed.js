const { User } = require('../models');

const userPeople = [
  {
    username: "user1",
    password: "password",
  },
  {
    username: "user2",
    password: "password",
  },
  {
    username: "user3",
    password: "password",
  }
];

const seedUsers = () => User.bulkCreate(userPeople,{individualHooks: true});

module.exports = seedUsers;