const sequelize = require('../config/connect');
const seedUsers = require('./user-seed');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("User----------");
  await seedUsers();
  console.log("Product-----------------------------");
  await seedPosts();
  console.log("Cart Item-------------------------------------");
  await seedComments();

  
  process.exit(0);
};

seedAll();