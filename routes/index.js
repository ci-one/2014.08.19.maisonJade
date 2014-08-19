var express = require('express');
var router = express.Router()
, board = require('./controllers/boardDAO');

/* GET home page. */
router.get('/',function(req, res){
    res.render('index',{title:'Mesong'});
});
router.get('/sample',function(req, res){
    res.render('index2',{title:'Mesong'});
});


//게시판용 routing
router.get('/insertboard',function(req, res){
    res.render('content/1400-request/050-1400-requestWrite',{title:'Mesong'});
});
router.get('/listboard',function(req, res){
    res.render('content/1400-request/050-1410-requestList',{title:'Mesong'});
});
router.get('/detailboard',function(req, res){
    res.render('content/1400-request/050-1420-requestDetail',{title:'Mesong'});
});

/* POST request. */
router.post('/getdata',board.chk);

router.post('/getlist',board.list);

router.post('/getboard',board.get);

router.post('/insertboard', board.insert);

router.post('/updateboard', board.update);

router.post('/deleteboard',board.delete);

module.exports = router;

