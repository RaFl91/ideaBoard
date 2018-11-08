const User = require('../models/User')
const Idea = require('../models/Idea')

const userController = {
    index: (req, res) => {
        User.find({})
        .then((users) => {
            res.send(users)
        })
    },
    show: (req, res) => {
        User.findById(req.params.userId)
            .then((user) => {
                res.send(user)
            })
    },
    update: (req, res) => {

    }, 
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.userId)
            .then(() => {

            })
    },
    create: (req, res) => {
        User.create(req.body)
            then((user) =>{
                user.save()
                res.send(user)
            })
    }
    
}

module.exports = userController