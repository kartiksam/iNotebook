import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <NoteState>
        <Router>
          <Navbar></Navbar>
          <Alert alert={alert} />

          <Routes>
            <Route
              exact
              path="/"
              element={<Home showAlert={showAlert}></Home>}
            />
            \
            <Route exact path="/about" element={<About></About>} />
            <Route
              exact
              path="/login"
              element={<Login showAlert={showAlert}></Login>}
            />
            <Route
              exact
              path="/signup"
              element={<Signup showAlert={showAlert}></Signup>}
            />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
//use that functionlaity uiser acc show in side and when sigin ghetnoTE SHOW ALL NOTES ACC TO TOKEN THAT MIX WITH THE DIFFEREMNT MAILS NEED TO DO ONLY THAT NOTES WITGH THAT PRATICUKLAR MAIL
