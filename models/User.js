const mongoose = require('../db/connection')
const Schema = mongoose.Schema
const Idea = require('./Idea')

const User = new Schema ({
    username: String,
    password: String,
    ideas: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Idea'
        }
    ]
})

module.exports = mongoose.model('User', User)