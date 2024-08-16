import { Route, Routes } from "react-router-dom";
import "./App.css";
import Introduce from "./modules/introduces/Introduce";
import Main from "./page/Main";
import MainLayout from "./layout/MainLayout";
import ProjectDetails from "./page/ProjectDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route path="" element={<Introduce></Introduce>}></Route>
        <Route path="main" element={<Main></Main>}></Route>
        <Route
          path="/project/:slug"
          element={<ProjectDetails></ProjectDetails>}
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
