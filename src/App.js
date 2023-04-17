import "./App.css";
import LayoutSidebar from "./components/LayoutSidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Inbox from "./pages/Inbox";
import Board from "./pages/Board";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
      <Router>
        <LayoutSidebar />
        <div className="container">
          <Navbar />
          <Routes>
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
