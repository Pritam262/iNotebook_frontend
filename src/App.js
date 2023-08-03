// App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar.js"
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import AuthWrapper from './components/AuthWrapper'; // Import the AuthWrapper component

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          {/*  <Alert message="Post deleted" /> */}
          <div className="container">
            {/* Wrap the routes with the AuthWrapper */}
            <AuthWrapper>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
              </Routes>
            </AuthWrapper>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
