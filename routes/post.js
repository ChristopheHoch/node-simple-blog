/* global module, require */

var Post = require('../models').post;

function findAll(req, res) {
    
    Post.find(function(error, posts) {
        if(error) {
            return res.send("An error occured while fetching the post list");
        }
        res.json({ posts: posts });
    });
    
};

function find(req, res) {
    var id = req.param('id')
    
    Post.findById(id, function(error, post) {
        if(error) {
            return res.send("An error occured while fetching the post " + id);
        }
        res.render('post', { post: post });
    });
    
};

function newPost(req, res) {
    res.render('newPost');
};

function create(req, res) {
    
    console.log(req.body);
    
    var title = req.body.title,
        author = req.body.author,
        content = req.body.content;

    Post.create({
        title: title,
        author: author,
        content: content
    }, function(error, post) {
        console.log(post);
        if(error) {
            return res.send("An error occured while creating the post " + title);
        }
        res.redirect('/post/' + post.id);
    });
    
};

exports.findAll = findAll;
exports.find = find;
exports.new = newPost;
exports.create = create;
