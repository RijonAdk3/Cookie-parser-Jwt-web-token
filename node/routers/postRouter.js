import express from "express";
import { deleteUser, getSingleUser, getUser, post, updateUser } from "../controllers/post.js";



const router = express.Router();

router.post("/post", post);
router.get("/getuser", getUser);
router.put("/update/:id", updateUser);
router.put("/delete/:id", deleteUser);
router.get("/getsingleuser/:id", getSingleUser);
// router.get('/checkauth',verifyToken,(req,res,next)=>{
//     res.send("hello user,you are sign in")
// })
// router.get('/checkuser/:id',verifyUser,(req,res,next)=>{
//     res.send("You can do it user!!")
// })
// router.get('/checkadmin/:id',verifyAdmin,(req,res,next)=>{
//     res.send("You can do it anithing Admin!!")
// })

export default router;
