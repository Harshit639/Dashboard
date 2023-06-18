import "./App.css";
import LayoutSidebar from "./components/LayoutSidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Settings from "./pages/Settings";
import Faq from "./pages/Faq";
import Inbox from "./pages/Inbox";
import Board from "./pages/Board";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import Test from "./components/test";
import { useState } from "react";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { auth } from "./firebase";
import { useLayoutEffect, useEffect } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [authenticated, setauthenticated] = useState(false);
  const islogged = false;

  useLayoutEffect(() => {
    console.log("hello");
    auth.onAuthStateChanged((user) => {
      console.log("i am called");
      if (user) {
        console.log(user.displayName);
        setauthenticated(true);
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
      <Router>
        {authenticated ? (
          <>
            <LayoutSidebar />
            <div className="container">
              <Navbar />
              <Routes>
                <Route path="/" element={<Navigate to="/home" />}></Route>
                <Route path="/home" element={<Home />} comp />
                <Route path="/Inbox" element={<Inbox />} />
                <Route path="/board" component={<Board />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/faq" element={<Faq />} />
                {/* <Route path="/login" element={<Login />} /> */}
                {/* <Route path="/signup" element={<Signup />} /> */}
              </Routes>
            </div>
          </>
        ) : (
          <Routes>
            {/* <Route path="/" element={<Test />}></Route> */}
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
