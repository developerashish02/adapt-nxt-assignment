import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import DashboardWithPie from "./components/DashboardWithPie";

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen">
        <SideBar />
        <div className="flex-1 flex flex-col">
          <Main>
            <Routes>
              <Route path="/" element={<DashboardWithPie />} />
            </Routes>
          </Main>
        </div>
      </div>
    </Router>
  );
};

export default App;
