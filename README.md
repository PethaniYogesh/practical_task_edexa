# practical_task_edexa

******** CRUD Operation for Employee ********

-> The main technologies used are: Nodejs, Mongoose (Database)
-> Create 4 APIs to get all Employee records, create Employee records, update Employee records and delete Employee records with the help of the Express JS framework.
-> Apply some validation like all fields are mandatory, the name must contain a minimum of 3 characters, Email validation, the mobile number should be 10 digits, etc.

******* How can I use this project *******

Just go to my project folder and then open that folder in any code editor which will support node js and javascript after that go to package.json and download all the dependencies list that is in the dependencies key before downloading Dependencies, you have to download npm first.
That's it you have successfully imported my projects and executed them on your computer.

******* Command for starting the code *******

—> npm i  (it is used to publish, discover, install, and develop node programs)

—> npm start   (it is used to start the code) OR
      nodemon start   (it is used to restart automatically our code or applications)


******* Command for run test cases *******

—> npm test 


******* How can test and access API *******

—> URL for testing or accessing API:

	GET: http://localhost:3000/api/v1/employee/getEmployees  (To get all Employee records)

	POST: http://localhost:3000/api/v1/employee/create   (To create new Employee records)
	pass payload: {
    "name": "Test", 
    "email": "TEST@gmail.com",  
    "phoneNumber": 9801423121
    }

	PUT: http://localhost:3000/api/v1/employee/update/:_id   (To update existing Employee records)
	pass _id: “64801d339b5c6178222303b1”
 	payload: {
    "name": "Test_Update”,
    "email": "TEST@gmail.com",  
    "phoneNumber": 9801423121
    }

	DELETE: http://localhost:3000/api/v1/employee/delete/:_id  (To delete existing Employee records)
	pass _id: “64801d339b5c6178222303b1”
