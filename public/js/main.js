$(function() {
    "use strict";

    $('#newPost').validate({
        rules: {
            title: {
                required: true,
                maxlength: 140
            },
            author: {
                required: true,
                maxlength: 140
            },
            content: {
                required: true
            }
        },
        messages: {
            title: {
                required: "Please enter a title for your post",
                maxlength: "Your title really should fit in a tweet..."
            },
            author: {
                required: "Please enter a title for your post",
                maxlength: "Is your name really that long ?"
            },
            content: {
                required: "Oups, you forgot to add the content of your post..."
            }
        }
    });

});