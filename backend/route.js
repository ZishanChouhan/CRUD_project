const express    = require('express');
const controller = require('./controller');

const router     = express.Router();

router.get('/employee', controller.getData);
router.post('/remove', controller.remove);
router.post('/search', controller.searchData);
router.post('/addEmployee', controller.addEmployee);

module.exports = router;