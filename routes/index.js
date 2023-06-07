const employeeRoutes = require("./employee.routes");

module.exports = (app)=>{
    app.use("/api/v1/employee", employeeRoutes)

    app.use((req, res) => {
        return res.status(400).json({ message: "Bad Request", status: 400 });
    });
}