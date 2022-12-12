const {Router} = require('express');
const router = Router()
const controller = require('../controllers/Notes.controllers');

router.post('/create',  controller.addNotes);
router.get('/getAll',  controller.getNotes);


module.exports = router