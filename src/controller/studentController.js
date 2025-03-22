import { error } from "console";
import prisma from "../../db.js";

//creating student
export const createStudent = async (req, res) => {
  try {
    const {
      registrationNo,
      name,
      class: studentClass,
      rollNo,
      contactNumber,
    } = req.body;
    if (
      [registrationNo, name, studentClass, rollNo, contactNumber].some(
        (feilds) => feilds?.trim() === ""
      )
    ) {
      return res.status(400).json({ error: "All feilds are required" });
    }
    const student = await prisma.student.create({
      data: {
        registrationNo,
        name,
        class: studentClass,
        rollNo,
        contactNumber,
      },
    });

    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Students
export const getAllStudents = async (req, res) => {
  try {
    const students = await prisma.student.findMany();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Student by Registration Number
export const getStudentByRegNo = async (req, res) => {
  try {
    const student = await prisma.student.findUnique({
      where: { registrationNo: req.params.regNo },
    });

    if (!student) return res.status(404).json({ error: "Student not found" });

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Student
export const updateStudent = async (req, res) => {
  try {
    const student = await prisma.student.update({
      where: { registrationNo: req.params.regNo },
      data: req.body,
    });

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Student
export const deleteStudent = async (req, res) => {
  try {
    const student = await prisma.student.update({
      where: { registrationNo: req.params.regNo },
      data: { status: false },
    });

    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
