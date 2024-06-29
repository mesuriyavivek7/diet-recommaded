import express from "express";

import { getUser, login, register, updateUser } from "../controllers/authController.js";

const router=express.Router()

router.post('/register',register)
router.post('/login',login)

router.put('/update/:id',updateUser)

router.get('/:id',getUser)

export default router