const router = require('express').Router()
const { Comment, User, Post } = require('../models')
const passport = require('passport')

// find all comments
router.get('/comments', (req, res) => {
  Comment.findAll({
    include: [
      {model: User},
      {model: Post}
    ]
  })
  .then(comments => res.json(comments))
  .catch(err => console.log(err))
})

// find a single comment by its id
router.get('/comments/:id', (req, res) => {
  Comment.findOne({
    where: {id: req.params.id},
    include: [
      {model: User},
      {model: Post}
    ]
  })
  .then(comment => res.json(comment))
  .catch(err => console.log(err))
})

// create a new comment
router.post('/comments', passport.authenticate('jwt'), (req, res) => {
  Comment.create({
    comment_content: req.body.comment_content,
    user_id: req.user.id
  })
  .then(comment => res.json(comment))
  .catch(err => console.log(err))
})

// update an existing comment
router.put('/comments/:id', (req, res) => {
  Comment.update(req.body, { where: { id: req.params.id } })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err))
})

// delete a comment
router.delete('/comments/:id', (req, res) => {
  Comment.destroy({ where: { id: req.params.id } })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err))
})

module.exports = router