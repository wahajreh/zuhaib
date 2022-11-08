const { Router } = require('express');
const { json } = require('body-parser');
const { query } = require('express');
const express = require('express')
var fs = require('fs');
var pdf = require('html-pdf');
const Parse = require('parse/node')
Parse.initialize('vGTWTCEPqeIBXZnn1u4fwfTuXdPXLb7y0H6WT7Zv', 'ooXQKjl7MGUfOFR3RChuNQ5uEGAKOnvuNyzokRon'); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/'


const router = new Router();

router.post('/',async (req,res)=>{
    console.log(req.body)
    res.json({a:'a',s:'l'})
})

module.exports =router