const router = require('express').Router();
const { getUpTime } = require('../controller/index');

/*
    * @swagger
    * /
    * get:
    *   description: Check if the server is up
*/

router.get('/', getUpTime);

module.exports = router;
