const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    categoryName: { type: String, default: '' },
    image: { type: String, default: '' },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() }

})
module.exports = mongoose.model("category",categorySchema)