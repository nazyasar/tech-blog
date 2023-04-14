const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "test",
    email: "test@test.com",
    password: "123456",
  },
  {
    username: "travellernaz",
    email: "test@test2.com",
    password: "123456",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
