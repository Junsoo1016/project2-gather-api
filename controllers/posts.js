const express = require('express')
const router = express.Router()
const Users = require('../models/Users')
const Posts = require('../models/Posts')

router.get('/', (req, res) => {
    Posts.find({}).then(posts => {
        res.json(posts)
    })
})

router.post('/userId/:userId', (req, res) => {
    Posts.create(req.body).then(post => {
        Users.findOne({userId: req.params.userId}).then(user => {
            post.createdBy.push(user._id)
            user.myPosts.push(post._id)

            user.save()
            post.save()

            res.json(post)
        })
    })
})

router.put('/:id', (req, res) => {
    Posts.findByIdAndUpdate(req.body).then(post => {
        res.json(post)
    })
})

router.delete('/:id', (req, res) => {
    Posts.findByIdAndDelete(req.params.id).then(post => {
        res.json(post)
    })
})

router.delete('/:id/userId/:userId/', (req, res) => {
    Users.findOne({userId: req.params.userId}).then(user => {
        Posts.findByIdAndDelete(req.params.id).then(post => {
            user.myPosts.splice(indexOf(post._id), 1)
            user.save()
            res.json(user)
            res.json(post)
        })
    })
}) 

module.exports = router