const express = require('express');

//inizializzo il router
const router = express.Router();

const postsController = require('../controllers/postsControllers');

//index
router.get('/', postsController.index);

//show
router.get('/:id', postsController.show);

//store
router.post('/', postsController.store);


//destroy
router.delete('/:id', postsController.destroy);

module.exports = router;
