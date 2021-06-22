const router = require('express').Router()
const {User, Post, Comment} = require('../models')
const jwt = require('jsonwebtoken')

//get all users
router.get('/users', (req, res) => {
  User.findAll({
    include: [
      { model: Post },
      { model: Comment }
    ]
  })
  .then(users => res.json(users))
  .catch(err => console.log(err))
})

//get one user by their id
router.get('/users/:id', (req, res) => {
  User.findOne({
    where: {id: req.params.id},
    include: [
      { model: Post },
      { model: Comment }
    ]
  })
  .then(user => res.json(user))
  .catch(err => console.log(err))
})

// create new user
router.post('/users', (req, res) => {
  User.create(req.body)
  .then(user => res.json(user))
  .catch(err => console.log(err))
})

// update existing user by id
router.put('/users/:id', (req, res) => {
  User.update(req.body, { where: { id: req.params.id } })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err))
})

// delete existing user by id
router.delete('/users/:id', (req, res) => {
  User.destroy({ where: {id: req.params.id } })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err))
})

// route for new users registering for site
router.post('/users/register', (req, res) => {
  const { name, email, username } = req.body
  User.register(new User({ name, email, username }), req.body.password, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

// route for existing users logging in
router.post('/users/login', (req, res) => {
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) { console.log(err) }
    res.json(user ? jwt.sign({ id: user.id }, process.env.SECRET) : null)
  })
})

module.exports = router