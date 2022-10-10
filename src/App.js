import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import Overview from "./pages/Overview";
import { Reports, ReportsOne, ReportsThree, ReportsTwo } from "./pages/Reports";
import Team from "./pages/Team";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/overview" exact element={<Overview />} />
        <Route path="/reports" exact element={<Reports />} />
        <Route path="/reports/reports1" exact element={<ReportsOne />} />
        <Route path="/reports/reports2" exact element={<ReportsTwo />} />
        <Route path="/reports/reports3" exact element={<ReportsThree />} />
        <Route path="/team" exact element={<Team />} />
      </Routes>
    </>
  );
}

export default App;
