import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/about">about페이지 이동</Link>
        </li>
        <li>
          <Link to="/">홈페이지 이동</Link>
        </li>
        <li>
          <Link to="/profile/junhyeok">junhyeok프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong프로필</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={["/about", "/info"]} element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
