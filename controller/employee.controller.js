const employeeModel = require("../models/employee.model");
const employeeValidator = require('../validator/employee.validator');
const utilities = require('../utils');

/**
* Get all Employee records
*/
const getEmployees = async (req, res) => {
    try {
        let getEmployees = await employeeModel.find();
        res.status(200).json({ message: "List of Employees", status: 200, data: getEmployees });

    } catch (error) {
        console.log("[EMPLOYEE] :: [LIST] :: [EXCEPTION] :: ", error);
        if (error.message && error.status) return res.status(error.status).json(error);
        res.status(500).json({ message: "Technical error occurred", status: 500 });
    }
}

/**
* Create new Employee record
*/
const createEmployee = async (req, res) => {
    try {
        const { name, email, phoneNumber } = req.body || {};
        utilities.validatePayload({ name, email, phoneNumber }, employeeValidator.create());

        let employee = new employeeModel({ name, email, phoneNumber });
        employee = await employee.save();
        res.status(200).json({ message: "Employee created successfuly", status: 200, data: employee });

    } catch (error) {
        console.log("[EMPLOYEE] :: [CREATE] :: [EXCEPTION] :: ", error.errors);
        if (error.errors && error.errors.phoneNumber && error.errors.phoneNumber.name === "ValidatorError") return res.status(400).json({message: error.errors.phoneNumber.message, status: 400});
        if (error.message && error.status) return res.status(error.status).json(error);
        res.status(500).json({ message: "Technical error occurred", status: 500, error });
    }
}

/**
* Update existing Employee records
*/
const updateEmployee = async (req, res) => {
    try {
        const { _id } = req.params || {};
        const { name, email, phoneNumber } = req.body || {};
        utilities.validatePayload({ _id, name, email, phoneNumber }, employeeValidator.update());

        let employee = await employeeModel.findByIdAndUpdate(_id, { name, email, phoneNumber });
        if (!employee) return res.status(404).json({ message: "Data Not Found", status: 404 });
        
        res.status(200).json({ message: "Employee updated successfuly", status: 200 });

    } catch (error) {
        console.log("[EMPLOYEE] :: [UPDATE] :: [EXCEPTION] :: ", error);
        if (error.message && error.status) return res.status(error.status).json(error);
        res.status(500).json({ message: "Technical error occurred", status: 500 });
    }
}

/**
* Delete existing Employee records
*/
const deleteEmployee= async (req, res) => {
    try {

        const { _id } = req.params || {}

        /** Validate body data */
        utilities.validatePayload({ _id }, employeeValidator.deleteDoc());

        const employeeInfo = await employeeModel.deleteOne({ _id });
        if (employeeInfo && employeeInfo.deletedCount<=0) return res.status(404).json({ message: "Data Not Found", status: 404 });

        res.status(200).json({ message: "Employee Deleted Successfully!", status: 200});

    } catch (error) {
        console.log("[EMPLOYEE] :: [DELETE] :: [EXCEPTION] :: ", error);
        if (error.message && error.status) return res.status(error.status).json(error);
        res.status(500).json({ message: "Technical error occurred", status: 500 });
    }
}

module.exports = {
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee
}