var express = require('express');
var router = express.Router();
const upload = require('../utility/fileUtility');

/* GET home page. */
router.post('/', upload.single('file'),function(req, res, next) {
  res.send('mantap');
});

module.exports = router;
