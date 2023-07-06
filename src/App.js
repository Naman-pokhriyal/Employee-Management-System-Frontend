import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Attendance from "./pages/Attendance";
import Tools from "./pages/Tools";
import AddEmployee from "./pages/AddEmployee";
import Organization from './pages/Organization';

function App() {
    return (
        <div className="main-wrap">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/dashboard" Component={Dashboard} />
                    <Route path="organization/*" Component={Organization} />
                    <Route path="/attendance" Component={Attendance} />
                    <Route path="/tools" Component={Tools} />
                    <Route path="/addEmployee" Component={AddEmployee} />
                    <Route path="/*" Component={NotFound} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
