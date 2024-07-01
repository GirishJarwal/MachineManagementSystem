import express from 'express'
import { Register, Login, Auth } from '../controller/userController.js'
const router = express.Router()
import { body } from 'express-validator'
import { VerifyUser } from '../middleware/VerifyUser.js'
import { createMachine, getMachines, getMachine, updateMachine, deleteMachine, searchMachines } from '../controller/machineController.js'


// USER ROUTES
router.post('/register',[
    body('name').trim().notEmpty().withMessage("Name is Required"),
    body('email').trim().notEmpty().withMessage("Email ID is Required")
    .isEmail().withMessage("Email Invalid"),
    body('password').trim().notEmpty().withMessage("Password is Required")
    .isLength({min: 5, max: 30}).withMessage("Password Length must Be 3-50 Characters")
], Register )

router.post('/login',[
    body('email').trim().notEmpty().withMessage("Email ID is Required")
    .isEmail().withMessage("Email Invalid"),
    body('password').trim().notEmpty().withMessage("Password is Required")
    .isLength({min: 5, max: 30}).withMessage("Password Length must Be 3-50 Characters")
], Login )

router.get('/verify', VerifyUser,Auth )

// MACHINE ROUTES

router.post('/add-machine', VerifyUser, createMachine)
router.get('/machines', VerifyUser, getMachines)
router.get('/machine/:id', VerifyUser, getMachine)
router.put('/update-machine/:id', VerifyUser, updateMachine)
router.delete('/machine/:id', VerifyUser, deleteMachine)
router.get('/search', VerifyUser,searchMachines); // New search route

export { router as Router };