import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home.jsx';
import Signup from './components/Signup.jsx';
import Signin from './components/Signin.jsx';
import AllCourses from './components/AllCourses.jsx';
import CreateCourse from './components/CreateCourse.jsx';
import UpdateCourse from './components/UpdateCourse.jsx';

import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path={"/"} element={ <Home /> } />
        <Route path={"/signup"} element={ <Signup /> } />
        <Route path={"/signin"} element={ <Signin /> } />
        <Route path={"/courses"} element={ <AllCourses /> } />
        <Route path={"/create_course"} element={ <CreateCourse /> } />
        <Route path={"/update_course/:courseId"} element={ <UpdateCourse /> } />

      </Routes>
    </Router>
  )
}

export default App
