var express = require('express');
var router = express.Router()
    , board = require('./controllers/boardDAO');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('intro', {title: 'Maison Interior'});
});
//서브용 인덱스
router.get('/sample', function (req, res) {
    res.render('indexsub', {title: 'Maison Interior'});
});

router.get('/index', function (req, res) {
    res.render('index', {title: 'Maison Interior'});
});

router.get('/introduce', function (req, res) {
    res.render('introduce', {title: 'Maison Interior'});
});

router.get('/organization', function (req, res) {
    res.render('organization', {title: 'Maison Interior'});
});

router.get('/portfolio', function (req, res) {
    res.render('portfolio', {title: 'Maison Interior'});
});

router.get('/portfolio1', function (req, res) {
    res.render('portfolio1', {title: 'Maison Interior'});
});
router.get('/portfolio2', function (req, res) {
    res.render('portfolio2', {title: 'Maison Interior'});
});
router.get('/portfolio3', function (req, res) {
    res.render('portfolio3', {title: 'Maison Interior'});
});
router.get('/portfolio4', function (req, res) {
    res.render('portfolio4', {title: 'Maison Interior'});
});
router.get('/portfolio5', function (req, res) {
    res.render('portfolio5', {title: 'Maison Interior'});
});
router.get('/portfolio6', function (req, res) {
    res.render('portfolio6', {title: 'Maison Interior'});
});
router.get('/portfolio7', function (req, res) {
    res.render('portfolio7', {title: 'Maison Interior'});
});
router.get('/portfolio8', function (req, res) {
    res.render('portfolio8', {title: 'Maison Interior'});
});
router.get('/portfolio9', function (req, res) {
    res.render('portfolio9', {title: 'Maison Interior'});
});
router.get('/portfolio10', function (req, res) {
    res.render('portfolio10', {title: 'Maison Interior'});
});
router.get('/portfolio11', function (req, res) {
    res.render('portfolio11', {title: 'Maison Interior'});
});
router.get('/portfolio12', function (req, res) {
    res.render('portfolio12', {title: 'Maison Interior'});
});


router.get('/requestWrite', function (req, res) {
    res.render('requestWrite', {title: 'Maison Interior'});
});

router.post('/requestList', function (req, res) {
    var aa = req.body.role;
    if(aa==1){
        res.render('requestList', {title: 'Maison Interior'});
    }else{
        res.render('requestWrite', {title: 'Maison Interior'});
    }
});

router.get('/contract', function (req, res) {
    res.render('contract', {title: 'Maison Interior'});
});

router.get('/direction', function (req, res) {
    res.render('direction', {title: 'Maison Interior'});
});

router.get('/login', function (req, res) {
    res.render('login', {title: 'Maison Interior'});
});


//게시판용 routing
router.get('/insertboard', function (req, res) {
    res.render('requestWrite', {title: 'Maison Interior'});
});
router.get('/listboard', function (req, res) {
    res.render('content/1400-request/050-1410-requestList', {title: 'Maison Interior'});
});
router.get('/detailboard', function (req, res) {
    res.render('requestDetail', {title: 'Maison Interior'});
});

/* POST request. */
router.post('/getdata', board.chk);

router.post('/getlist', board.list);

router.post('/getboard', board.get);

router.post('/insertboard', board.insert);

router.post('/updateboard', board.update);

router.post('/deleteboard', board.delete);

module.exports = router;

