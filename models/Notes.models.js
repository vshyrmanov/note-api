const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    title: {type: String},
    markdown: {type: String},
    tags: [{type: String}],
    tagsId: [{type: String}],
    imgs: [{id: String, imageUrl: String}]
})


module.exports = model("Notes", schema);