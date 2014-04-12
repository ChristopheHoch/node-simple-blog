var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    PostSchema;

Post = new Schema({
    title : String,
    author : String,
    content : String
});

exports.post = mongoose.model('Post', Post);