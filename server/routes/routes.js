import express from 'express'
import { Register, Login, Auth, Admin,AdminLogin} from '../controller/userController.js'
const router = express.Router()
import { body } from 'express-validator'
import { VerifyUser } from '../middleware/VerifyUser.js'
import { createMachine, getMachines, getMachine, updateMachine, deleteMachine, searchMachines} from '../controller/machineController.js'
import { VerifyAdmin } from '../middleware/VerifyAdmin.js'



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
router.post('/admin-login',[
    body('email').trim().notEmpty().withMessage("Email ID is Required")
    .isEmail().withMessage("Email Invalid"),
    body('password').trim().notEmpty().withMessage("Password is Required")
    .isLength({min: 5, max: 30}).withMessage("Password Length must Be 3-50 Characters")
], AdminLogin)

router.post('/make-admin',[
    body('name').trim().notEmpty().withMessage("Name is Required"),
    body('email').trim().notEmpty().withMessage("Email ID is Required")
    .isEmail().withMessage("Email Invalid"),
    body('password').trim().notEmpty().withMessage("Password is Required")
    .isLength({min: 5, max: 30}).withMessage("Password Length must Be 3-50 Characters")
], Admin )


router.get('/verify', VerifyUser,Auth )

router.get('/admin/check', VerifyAdmin, (req, res) => {
    // If the middleware passes, the user is an admin
    res.json({ isAdmin: true });
  });
  

// MACHINE ROUTES

router.post('/add-machine', VerifyUser, VerifyAdmin, createMachine)
router.get('/machines', VerifyUser, getMachines)
router.get('/machine/:id', VerifyUser, getMachine)
router.put('/update-machine/:id', VerifyUser, updateMachine)
router.delete('/machine/:id', VerifyUser, VerifyAdmin, deleteMachine)
router.get('/search', VerifyUser,searchMachines); // New search route

export { router as Router };