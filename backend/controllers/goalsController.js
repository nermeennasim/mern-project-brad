const { text } = require('express')
const  asyncHandler = require('express-async-handler')
const Goal = require('../Models/goalsModel')

//@desc          Get gOals
//@access       Private
//@route        GET /api/goals

const getGoals = asyncHandler(async(req,res )=> {
        //getting goals object from db and return as json object//
        //using await because it is async function 
        
            const goals = await Goal.find()

            
          //  console.log(` error in getGoals(): ${error}`)
        
  
  //find method is returning cursor to the document
  console.log(`goals from db: ${goals}`)
  res.status(200).json(goals)
})
        
        
    


//@desc     Set Goals
//@access   Private
//@route    POST /api/goals

const setGoals= asyncHandler(async (req,res) => {

    //sending text form api
    console.log(`printing ${req.body.text}`)

    
    if(!req.body.text){

        res.status(400)
       //
       throw new Error('Please enter a text field');
        //to avoid this we create MIDDLEWARE exception handling
    
    }

    //send goal object to db
   
        const goal = await Goal.create(
            {
            text : req.body.text ,
    
             }     
        )

              
    console.log(`inserting into db: ${req.body.text}`)
    console.log(`goal is ${goal}`)
      res.status(200).json(goal)
})
  



//@desc     Update Goal
//@access   Private
//@route    PUT /api/goals/:id

const updateGoal= asyncHandler(async (req,res )=> {

    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        
        throw new console.error(`Goal not found`);

    }
    //call update query from db
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new :true,});
    console.log(`updated goal is: ${req.body.text}`)
    res.status(200).json(updateGoal)
})

//@desc     Delete Goal
//@access   Private
//@route    Delete /api/goals/:id

const deleteGoal= asyncHandler(async (req,res )=> {

        const goal = await Goal.findByIdAndRemove(req.params.id)

        if(!goal){
            res.status(400)
            throw new Error('Goal not found')
        }

        await Goal.remove()
        console.log(` goal is deleted:`)
        res.status(200).json(deleteGoal)
}
)

module.exports = {

    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
}