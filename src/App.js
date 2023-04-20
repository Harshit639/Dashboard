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
function App() {
  return (
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
      <Router>
        <LayoutSidebar />
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />}></Route>
            <Route path="/home" element={<Home />} />
            <Route path="/Inbox" element={<Inbox />} />
            <Route path="/board" component={<Board />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
