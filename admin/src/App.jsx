import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home.jsx';
import Signup from './components/Signup.jsx';
import Signin from './components/Signin.jsx';
import AllCourses from './components/AllCourses.jsx';
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path={"/"} element={ <Home /> } />
        <Route path={"/signup"} element={ <Signup /> } />
        <Route path={"/signin"} element={ <Signin /> } />
        <Route path={"/courses"} element={ <AllCourses /> } />
      </Routes>
    </Router>
  )
}

export default App
