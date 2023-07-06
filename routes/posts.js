const express = require('express');

const controller = require('../app/controller/controller');

const router = express.Router();

router.get('/posts', controller.getPosts);

router.post('/post', controller.createPost);

module.exports = router;