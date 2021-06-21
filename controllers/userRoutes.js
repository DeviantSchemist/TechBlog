const router = require('express').Router()
const {User, Post, Comment} = require('../models')

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

})

// update existing user by id
router.put('/users/:id', (req, res) => {

})

// delete existing user by id
router.delete('/users/:id', (req, res) => {

})