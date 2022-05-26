const express= require('express');
const { uptime } = require('os');
const router = express.Router();
const {getGoals, setGoals,updateGoal, deleteGoal} = require('../controllers/goalsController')

//instead of all this code we can get rid of more lines here
//router.route('/).get(getGoals).post(setGoals)
//router.route('/:id).put(udpateGoals).delete(deleteGoals)
router.route('/').get(getGoals).post(setGoals)
//more cleaner version
router.route('/:id').put(updateGoal).delete(deleteGoal)




module.exports = router;