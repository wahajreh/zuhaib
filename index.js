var express = require('express');
var app = express();
const cors = require('cors');

const Parse = require('parse/node')
Parse.initialize('vGTWTCEPqeIBXZnn1u4fwfTuXdPXLb7y0H6WT7Zv', 'ooXQKjl7MGUfOFR3RChuNQ5uEGAKOnvuNyzokRon'); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/'

app.use(express.json())

app.use(cors())

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// about page
app.get('/product', function(req, res) {
  res.render('pages/product');
});

app.get('/purchase', async(req, res)=> {
    var q=new Parse.Query('Product')
    var d =await q.find();
    d=JSON.stringify(d)
    d=JSON.parse(d)
    var q1=new Parse.Query('Supplier')
    var d1 =await q1.find();
    d1=JSON.stringify(d1)
    d1=JSON.parse(d1)
    console.log(d1)
    res.render('pages/purchase',{d,d1});
  });


//   ------<><><><><><><><>for api</></></></></></></>

app.use('/api',require('./api'))

//   ------<><><><><><><><>for api</></></></></></></>

var port = process.env.port|8080

app.listen(port);
console.log('Server is listening on port ',port);