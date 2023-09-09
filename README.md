<div align="center">
  <h1>UPSKILL ACADEMY - DOCUMENTATION</h1>
</div>

Upskill Academy is responsive full stack courses selling web app built majorly using MERN stack ( ReactJS, NodeJS, ExpressJS, MongoDB ).

# Table of Contents

1. Admin Dashboard
2. User Dashboard
3. Tech Stack Used
4. Hosting WebApp Locally - Youtube Video
5. Hosting WebApp Locally


## Admin Dashboard

1. This dashboard is only accessible to admins.
2. Admins can SIGNUP and LOGIN to get authenticated and futher authentication happens using JWT.
3. Admins can execute the CRUD operations includes
    1. Admins can CREATE courses.
    2. Admins can READ courses.
    3. Admins can UPDATE courses.
    4. Admins can DELETE courses.
4. Admins can only execute CRUD operations on the courses they create.

## User Dashboard

1. Users can SIGNUP and LOGIN to get authenticated and futher authentication happens using JWT.
2. Users can only get to view the published courses by admins.
3. Users can purchase the courses and get access to the purchased courses.

## Tech Stack Used

Javascipt Frameworks

- React
- NodeJS
- ExpressJS
- MongoDB

Recoil - State management library for React

Axios - Promise based HTTP client for the browser and node.js

Material UI - React component library

Mongoose -  MongoDB ODM (Object Database Modelling)

JWT - Javascript Web Tokens

## Hosting the UpskillAcademy Web App locally

https://www.youtube.com/

## Hosting WebApp Locally

Install NodeJS and NPM before proceeding futher.


- Clone your repository.
   ```sh
   git clone https://github.com/sriram2k4/UpskillAcademy.git
   ```
- Change directory to cloned repo.
    ```sh
   cd UpskillAcademy
   ```

### Server Setup



1. Change directory to the server repo.
   ```sh
   cd server
   ```
2. Install the required npm packages.
   ```sh
   npm install
   ```
3. Edit the .env file inside server repo and Add the SECRET and MONGODB_URI.
   ```sh
    SECRET = "QbMNR7TQ7L1Wc3MPpYnNLfP24GcA7NGp"
    MONGODB_URI = "mongodb://localhost:27017/"
   ```
4. Start the server.
   ```sh
   node index.js
   ```

### Admin Dashboard

1. Change directory to Admin Repo.
   ```sh
   cd admin
   ```
2. Install the required npm packages.
   ```sh
   npm install
   ```
3. Edit the .env file inside Admin repo and Add VITE_BASE_URL ( Server's Port ).
   ```sh
   VITE_BASE_URL = "http://localhost:3000"
   ```
4. Run the Admin Dashboard.
   ```sh
   npm run dev
   ```

### User Client Setup

1. Change directory to the User Repo.
   ```sh
   cd user
   ```
2. Install the required npm packages.
   ```sh
   npm install
   ```
3. Edit the .env file inside User repo and Add VITE_BASE_URL ( Server's Port ).
   ```sh
   VITE_BASE_URL = "http://localhost:3000"
   ```
4. Run the User Dashboard.
   ```sh
   npm run dev
   ```