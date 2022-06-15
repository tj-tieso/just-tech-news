// File is responsible for importing the User model and exporting an object with it as a property
const User = require("./User");
const Post = require("./Post");
const Vote = require("./Vote");

// define table relationships
User.hasMany(Post, { foreignKey: "user_id" });
Post.belongsTo(User, { foreignKey: "user_id" });

// allow User and Post models
// to query each other's information
// in the context of a vote
User.belongsToMany(Post, {
  through: Vote,
  as: "voted_posts",
  foreignKey: "user_id",
});
//many to many
Post.belongsToMany(User, {
  through: Vote,
  as: "voted_posts",
  foreignKey: "post_id",
});

// connect User to Vote
Vote.belongsTo(User, {
  foreignKey: "user_id",
});

// connect Post to Vote
Vote.belongsTo(Post, {
  foreignKey: "post_id",
});

User.hasMany(Vote, {
  foreignKey: "user_id",
});

Post.hasMany(Vote, {
  foreignKey: "post_id",
});

module.exports = { User, Post, Vote };
