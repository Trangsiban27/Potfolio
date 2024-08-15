import { Route, Routes } from "react-router-dom";
import "./App.css";
import Introduce from "./modules/introduces/Introduce";
import Main from "./page/Main";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route path="" element={<Introduce></Introduce>}></Route>
        <Route path="main" element={<Main></Main>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
