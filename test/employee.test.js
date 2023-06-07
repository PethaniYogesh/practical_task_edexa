const chai = require("chai");
const chaiHttp = require("chai-http");
const dotenv = require("dotenv").config();

//Assertion Style
chai.should();
chai.use(chaiHttp);


describe("Employee API", ()=>{
    let _id = "";
    /**
     * Employee GET method || Get all Employee records
     */
    describe("GET /api/v1/employee/getEmployees", ()=>{

        it("Get all the Employees recoreds", (done)=>{
            chai.request(process.env.BASE_URL)
                .get(`/api/v1/employee/getEmployees`)
                .end((err, response)=>{
                    response.should.have.status(200);
                done();
                })
        })
        
        it("Not getting the Employees recoreds || Wrong routes", (done)=>{
            chai.request(process.env.BASE_URL)
                .get(`/api/v1/employee/getEmployee`)
                .end((err, response)=>{
                    response.should.have.status(400);
                done();
                })
        })

    });

    /**
     * Employee POST method || Create new Employee records
     */
    describe("POST /api/v1/employee/create", ()=>{

        it("Create new Employee recoreds", (done)=>{
            const payload = {
                name: "Test",
                email: "test@gmail.com",
                phoneNumber: 9988774455,
            }
            chai.request(process.env.BASE_URL)
                .post(`/api/v1/employee/create`)
                .send(payload)
                .end((err, response)=>{
                    _id = response.body.data._id || ""
                    response.should.have.status(200);
                done();
                })
        })
        
        
        it("Not create a new Employee record without the name field", (done)=>{
            const payload = {
                email: "test@gmail.com",
                phoneNumber: 9988774455,
            }
    
            chai.request(process.env.BASE_URL)
                .post(`/api/v1/employee/create`)
                .send(payload)
                .end((err, response)=>{
                    response.should.have.status(400);
                    response.body.message.should.be.eq('"name" is required');
                done();
                })
        })

        it("Email are not valid", (done)=>{
            const payload = {
                name: "Test",
                email: "test@.com",
                phoneNumber: 9988774455,
            }
    
            chai.request(process.env.BASE_URL)
                .post(`/api/v1/employee/create`)
                .send(payload)
                .end((err, response)=>{
                    response.should.have.status(400);
                    response.body.message.should.be.eq('"email" must be a valid email');
                done();
                })
        })

    });

    /**
     * Employee PUT method || Update Employee records
     */
    describe("PUT /api/v1/employee/update",()=>{

        it("Update Employee recored", (done)=>{
            const payload = {
                name: "Test_Update",
                email: "test@gmail.com",
                phoneNumber: 9988774455,
            }
            chai.request(process.env.BASE_URL)
                .put(`/api/v1/employee/update/${_id}`)
                .send(payload)
                .end((err, response)=>{
                    response.should.have.status(200);
                done();
                })
        })

        it("Wrong Employee _id", (done)=>{
            const payload = {
                name: "Test_Update",
                email: "test@gmail.com",
                phoneNumber: 9988774455,
            }
            const wrong_id = "647f69fb29e1abb37c5e20ac"
            chai.request(process.env.BASE_URL)
                .put(`/api/v1/employee/update/${wrong_id}`)
                .send(payload)
                .end((err, response)=>{
                    response.should.have.status(404);
                    response.body.message.should.be.eq('Data Not Found');
                done();
                })
        })
    })

     /**
     * Employee DELETE method || Delete Employee records
     */
     describe("DELETE /api/v1/employee/delete",()=>{

         it("Delete Employee recored", (done) => {
            //  const _id = "647f6d82743a4e2764f26936"
             chai.request(process.env.BASE_URL)
                 .delete(`/api/v1/employee/delete/${_id}`)
                 .end((err, response) => {
                     response.should.have.status(200);
                     done();
                 })
         })

        it("Wrong Employee _id", (done)=>{
            const wrong_id = "647f69fb29e1abb37c5e20ac"
            chai.request(process.env.BASE_URL)
                .delete(`/api/v1/employee/delete/${wrong_id}`)
                .end((err, response)=>{
                    response.should.have.status(404);
                    response.body.message.should.be.eq('Data Not Found');
                done();
                })
        })
    })

});