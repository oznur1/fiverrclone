import express from "express";
import { register, login, logout,getProfile } from "../controllers/auth.controller.js";
import protect from "../middlewares/protect.js";
import upload from "../utils/multer.js";
const router = express.Router();



// 2) endpoint'leri belirle
router.route("/register").post(upload.single("profilePicture"), register);router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/profile").get(protect ,getProfile);

export default router;