import { NavLink } from "react-router-dom";
import { MdSpaceDashboard, MdOutlineAutoMode } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { FaCalendarCheck } from "react-icons/fa";
import "../Styles/navbar.css"

export default function Navbar() {
    return (
        <nav>
            <div className="logo"><span>&lt; EMS &gt;</span></div>
            <NavLink to="/dashboard"><MdSpaceDashboard className="icon" />Dashboard</NavLink>
            <NavLink to="/organization"><BsPeopleFill className="icon" />Organization</NavLink>
            <NavLink to="/attendance"><FaCalendarCheck className="icon" />Attendance</NavLink>
            <NavLink to="tools"><MdOutlineAutoMode className="icon" />Tools</NavLink>
        </nav>
    );
}