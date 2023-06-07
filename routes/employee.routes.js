const express = require('express');
const router = express.Router();
const employeeController = require("../controller/employee.controller")

router.get("/getEmployees", employeeController.getEmployees)
router.post("/create", employeeController.createEmployee)
router.put("/update/:_id", employeeController.updateEmployee)
router.delete("/delete/:_id", employeeController.deleteEmployee)

module.exports = router;