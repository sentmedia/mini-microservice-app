const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();

app.use(bodyParser.json());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {

});

app.post('/posts/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;
    
    // check to see if other comments are available for the postId
    const comments = commentsByPostId[req.params.id] || [];
});

app.listen(4001, () => {
    console.log('Listening on port 4001')
});