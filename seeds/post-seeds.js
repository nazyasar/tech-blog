const { Post } = require('../models');

const postdata = [
  {
    title: 'burhan altintop geri gelsin',
    post_text: 'evrupaaaa yakasiiiii',
    user_id: 1
  },
  {
    title: 'test',
    post_text: 'test',
    user_id: 2
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;