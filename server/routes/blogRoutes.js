import express from "express";
import {
  addBlog,
  addComment,
  deleteBlogById,
  generateContent,
  getAllBlogs,
  getBlogById,
  getBlogComments,
  togglePublish,
} from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const blogRounter = express.Router();

blogRounter.post("/add", upload.single("image"), auth, addBlog);
blogRounter.get("/all", getAllBlogs);
blogRounter.get("/:blogId", getBlogById);
blogRounter.post("/delete", auth, deleteBlogById);
blogRounter.post("/toggle-publish", auth, togglePublish);
blogRounter.post("/add-comment", addComment);
blogRounter.post("/comments", getBlogComments);
blogRounter.post("/generate", auth, generateContent);

export default blogRounter;
