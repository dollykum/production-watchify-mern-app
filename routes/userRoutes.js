import express from "express";
import {isAdmin,requireSignIn} from './../middlewares/authMiddleware.js';
import { getuserController,deleteuserCOntroller } from "../controllers/userController.js";
const router = express.Router();
//fetch all user
router.get("/get-user",requireSignIn,isAdmin,getuserController);

//delete user
router.delete(
    "/delete-user/:id",
    requireSignIn,
    isAdmin,
    deleteuserCOntroller
  );
export default router;