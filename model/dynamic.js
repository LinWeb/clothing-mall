let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.Types.ObjectId

let dynamicSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 200
    },
    images: [String],
    address: String,
    create_time: {
        type: Number,
        default: Math.floor(Date.now() / 1000)
    },
    _category: {
        type: ObjectId,
        required: true,
        ref: 'category'
    },
    _author: {
        type: ObjectId,
        required: true,
        ref: 'user'
    },
    _likes: [{
        type: String,
        ref: 'user'
    }] // user表id集合
})
let dynamicModel = mongoose.model('dynamic', dynamicSchema, 'dynamic')
module.exports = dynamicModel