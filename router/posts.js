const express = require('express');

//inizializzo il router
const router = express.Router();

const postsController = require('../controllers/postsControllers');

//index
router.get('/', postsController.index);

//show
router.get('/:id', postsController.show);

//destroy
router.delete('/:id', postsController.destroy);

module.exports = router;
