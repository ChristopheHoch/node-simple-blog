
/*
 * GET home page.
 */

var Post = require('../models').post;

exports.index = function(req, res) {
    
    Post.find(function(error, posts) {
        if(error) {
            return res.send("An error occured while fetching the post list");
        }
        res.render('index', { title: 'Express', posts: posts });
    });
    
};