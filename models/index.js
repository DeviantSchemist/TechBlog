const User = require('./User')
const Post = require('./Post')
const Comment = require('./Comment')

// User has many posts
User.hasMany(Post, {
  foreignKey: 'user_id'
})

// post belongs to a single user
Post.belongsTo(User, {
  foreignKey: 'user_id'
})

// User has many comments
User.hasMany(Comment, {
  foreignKey: 'user_id'
})

// comment belongs to a single user
Comment.belongsTo(User, {
  foreignKey: 'user_id'
})

// Post has many comments
Post.hasMany(Comment, {
  foreignKey: 'post_id'
})

// comment belongs to a single post
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
})