import logo from "./logo.svg";
import "./App.css";
import Create from "./Components/Create";
import { Route, Routes } from "react-router-dom";
import AllTasks from "./Components/AllTasks";
import ViewTask from "./Components/ViewTask";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllTasks />}></Route>
        <Route path="/:id" element={<ViewTask />}></Route>
      </Routes>
    </div>
  );
}

export default App;
