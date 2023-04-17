import "./App.css";
import LayoutSidebar from "./components/LayoutSidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Team from "./pages/Team";
import Faq from "./pages/Faq";
import Contacts from "./pages/Contacts";
import Profile from "./pages/Profile";
import Calendar from "./pages/Calendar";
function App() {
  return (
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
      <Router>
        <LayoutSidebar />
        <main>
          <h1 style={{ marginLeft: "5rem" }}>Infinit-I</h1>
        </main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/profile" component={<Profile />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
