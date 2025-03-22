import express from "express";
import {
  createStudent,
  deleteStudent,
  getAllStudents,
  getStudentByRegNo,
  updateStudent,
} from "../controller/studentController";

const router = express.Router();

router.post("/create", createStudent);
router.get("/getStdu", getAllStudents);
router.get("/:regNo", getStudentByRegNo);
router.put("/:regNo", updateStudent);
router.delete("/:regNo", deleteStudent);

export default router;
