const {Router} = require ("express");
const {   signup, login } = require("../controllers/ToDoController"); 

const assignmentController = require('../controllers/assigmentController.js');
 
const router = Router()
 
 

router.put('/assignments/:id', assignmentController.editAssignment);
router.get('/assignments/:id', assignmentController.checkAssignment);
router.post('/assignments/:id/grade', assignmentController.gradeAssignment);
router.put('/assignments/:id/regrade', assignmentController.regradeAssignment);
  
router.post('/signup', signup);
router.post('/login',login ); 

module.exports = router;