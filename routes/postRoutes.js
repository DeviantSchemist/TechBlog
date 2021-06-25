const router = require('express').Router()
const { Post, Comment, User } = require('../models')
const passport = require('passport')

// get all posts
router.get('/posts', (req, res) => {
  Post.findAll({
    include: [
      {model: Comment},
      {model: User}
    ]
  })
  .then(posts => res.json(posts))
  .catch(err => console.log(err))
})

// get a single post
router.get('/posts/:id', (req, res) => {
  Post.findOne({
    where: { id: req.params.id },
    include: [
      {model: Comment},
      {model: User}
    ]
  })
  .then(post => res.json(post))
  .catch(err => console.log(err))
})

// create a new post
router.post('/posts', passport.authenticate('jwt'), (req, res) => {
  Post.create({
    post_title: req.body.post_title,
    post_content: req.body.post_content,
    user_id: req.user.id
  })
  .then(post => res.json(post))
  .catch(err => console.log(err))
})

// update a post
router.put('/posts/:id', (req, res) => {
  Post.update(req.body, { where: { id: req.params.id } })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err))
})

// delete a post
router.delete('/posts/:id', (req, res) => {
  Post.destroy({ where: { id: req.params.id } })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err))
})

module.exports = router