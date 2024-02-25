import { Route, Routes } from "react-router-dom";
import NewPage from "./components/NewPage";

function App() {
  return (
    <Routes>
      <Route path="/:category?" element={<NewPage />}></Route>
    </Routes>
  );
}

export default App;
