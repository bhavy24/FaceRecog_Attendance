# YES MA'AM 

## Requirements
Dependency managers such as npm, yarn, brew, etc.
I would encourage the usage of npm.
Download and install NodeJS and nodemon if you don'thave them: https://nodejs.org/en/download/
Ensure the latest version of Node JS and npm have been installed in your machine.

### Step 1: Download the source code
If you have "git" installed, open CMD and type "git clone https://github.com/CodeShareCW/Attendlytical.git".
### Step 2: Install the dependency
Open project in Visual Studio Code or any IDE.
Open CMD in VSCode or terminal, change directory to "client" folder and install the dependency 
commands 
1)`cd client`
2)`npm i`
Open another terminal, change directory to "server" folder and install the dependency 
commands 
1)`cd server` 
2)`npm i`

## To run the project:
### step1)
In the server folder: cd server
then, use the command : `nodemon server` or `node index.js`

### step2)
In the client folder: cd client
then, use the command : `npm start`

## Technologies Used : 
### 1) React JS
### 2) Node Js
### 3) Express
### 4) MongoDb
### 5) Cloudinary(to store images)

I have used face-api.js which is a JavaScript face recognition API for the browser and nodejs implemented on top of tensorflow.js core (tensorflow/tfjs-core).
For further info, look into
[Face-Api](https://github.com/justadudewhohacks/face-api.js/).

### Link for my demo video:
[BhavyaMittalDEMO](https://drive.google.com/file/d/1sRZLriNq9k7xJf6kF1h5mUwfqoL1WZXv/view?usp=sharing)

## Features of YES MAAM
The web app enables tracking attendance using facial recognition. The application allows a new user to sign up as a lecturer or a student. The student upon signing up has to upload two photos(from webcam or disk) to get facial features stored in 128D. 
The student can enroll in a course based on a course id and can view his attendance. <br>The app gives functionality to the lecturer to create any course of his choice. For that given course, the teacher can create an atte ndance form either in Remote Mode or 
in Face To Face(F2F) Mode. In the attendance room, the lecturer can either select "Remote" or "F2F"<br>
For "Remote Attendance", there will be a camera opened at the student's browser when entering the room. 
For "Face to Face Attendance", there will be a camera opened at the lecturer's browser when entering the room.
The lecturer can also "Kick" a student out of a course.<br>
The face photo of the student who is kicked out will not be counted next time taking the attendance.
In the attendance list page, the lecturer can visualize the attendance data by clicking the "Attendance Record" button in the action tab.<br>
After the attendance, the teacher can even close the attendance room so that no more transactions will be done by students.



