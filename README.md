<h1 align="center">UPSKILL ACADEMY - DOCUMENTATION</h1>

Upskill Academy is responsive full stack courses selling web app built majorly using MERN stack ( ReactJS, NodeJS, ExpressJS, MongoDB ).

# Table of Contents
- [Admin Dashboard](#admin-dashboard)
- [User Dashboard](#user-dashboard)
- [Tech Stack Used](#tech-stack-used)
- [Hosting WebApp Locally - YouTube Video](#hosting-webapp-locally-youtube-video)
- [Hosting WebApp Locally](#hosting-webapp-locally)



## Admin Dashboard

1. This dashboard is only accessible to admins.
2. Admins can SIGNUP and LOGIN to get authenticated and further authentication happens using JWT.
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

Javascript Frameworks

- React
- NodeJS
- ExpressJS
- MongoDB

Recoil - State management library for React

Axios - Promise based HTTP client for the browser and node.js

Material UI - React component library

Mongoose -  MongoDB ODM (Object Database Modelling)

JWT - Javascript Web Tokens

## Hosting WebApp Locally - YouTube Video

[Watch the video here](https://www.youtube.com/watch?v=WInXKw-CY5I)

## Hosting WebApp Locally

Install NodeJS and NPM before proceeding further.


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