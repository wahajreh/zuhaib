const express = require('express');

const router = new express();

router.use('/purchase',require('./purchase'))

module.exports =router