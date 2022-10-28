const Post=require('../models/post')

const userPeople = [
    {
      title: "I like coding",
      content: "Gary is cool",
      user_id:1
    },
    {
      title: "SICK",
      content: "coding is to cool",
      user_id:2
    },
    {
      title: "Can't figure this out",
      content: "coding sucks",
      user_id:3
    }
  ];
  
  const seedUsers = () => Post.bulkCreate(userPeople,{individualHooks: true});
  
  module.exports = seedUsers;