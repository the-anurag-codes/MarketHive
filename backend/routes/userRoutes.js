import express from "express"
const router = express.Router()
import {userAuth, registerUser, getUserProfile} from "../controllers/userController.js"
import { protect } from "../middleware/authMiddleware.js"

router.route('/').post(registerUser)
router.post('/login', userAuth)
router.route('/profile').get(protect, getUserProfile)


export default router