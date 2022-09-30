const mongoose = require('mongoose')
const Schema = mongoose.Schema

const assetSchema = new Schema({
    codeAsset: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    serial: {
        type: String,
        required: true
    },
    warranty: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: true
    }
},{versionKey:false})

module.exports = mongoose.model('Asset', assetSchema)
