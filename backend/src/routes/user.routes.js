import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js";
import { verifyJWTToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverPicture", maxCount: 1 },
  ]),
  registerUser
  );


router.route("/login").post(loginUser);

// secured route
router.route("/logout").post(verifyJWTToken, logoutUser);


export default router;