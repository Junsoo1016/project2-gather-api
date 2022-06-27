const express = require('express')
const router = express.Router()
const Users = require('../models/Users')
const Posts = require('../models/Posts')

router.get('/', (req, res) => {
    Users.find({}).then(users => {
        res.json(users)
    })
})

router.get('/userId/:userId', (req, res) => {
    Users.find({userId: req.params.userId}).then(user => {
        res.json(user)
    })
})

router.post('/', (req, res) => {
    console.log("inpost");
    console.log(req.body);
    Users.create(req.body).then(user => {
        res.json(user)
    })
})

router.put('/userId/:userId', (req, res) => {
    Users.findOneAndUpdate(req.params.userId, req.body, {new: true}).then(user => {
        res.json(user)
    })
})

router.put('/userId/:userId/postId/:postId', (req, res) => {
    Users.findOne({userId: req.params.userId}).then(user => {
        Posts.findById(req.params.postId).then(post => {
            user.savedPosts.push(post._id)
            user.save()
            res.json(user)
        })
    })
}) 

router.delete('/userId/:userId', (req, res) => {
    Users.findOneAndDelete({userId: req.params.userId}).then(user => {
        res.json(user)
    })
})

router.delete('/:id', (req, res) => {
    Users.findByIdAndDelete(req.params.id).then(user => {
        res.json(user)
    })
})

router.delete('/userId/:userId/postId/:postId', (req, res) => {
    Users.findOne({userId: req.params.userId}).then(user => {
        Posts.findById(req.params.postId).then(post => {
            user.savedPosts.splice(indexOf(post._id), 1)
            user.save()
            res.json(user)
        })
    })
}) 

module.exports = router