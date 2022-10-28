const Comment=require('../models/comment')

const userPeople = [
    {
      
      content: "to cool",
      user_id:1,
      post_id:2
    },
    {
      
      content: "I like this page",
      user_id:2,
      post_id:1
    },
    {
      content: "coding sucks",
      user_id:3,
      post_id:3
    }
  ];
  
  const seedUsers = () => Comment.bulkCreate(userPeople,{individualHooks: true});
  
  module.exports = seedUsers;