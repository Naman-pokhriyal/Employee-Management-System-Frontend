import React, { useEffect, useState } from 'react';
import BigBadge from "../components/BigBadge";
import BasicTable from "../components/BasicTable";
import BasicGrid from "../components/BasicGrid";
import { BsGrid, BsListUl, BsPlusCircleFill } from "react-icons/bs";
import axios from "axios";
import "../Styles/employee.css";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
    const [cards, setCards] = useState(false);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/employee');
            setRows(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (value) => {
        setCards(value);
    };
    // Back button Config
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate(-1);
    };
    return (
        <main>
            <button onClick={handleBackButtonClick}>{'<'}</button>
            <div className="badgeWrap">
                <BigBadge title="Total Employees" value={rows.length} />
                <Link to="/addEmployee" className="">
                    <BsPlusCircleFill size={40} />
                </Link>
            </div>
            <div className="toggleGroup">
                <button
                    onClick={() => handleChange(false)}
                    className={cards ? '' : 'toggleActive'}
                >
                    <BsListUl size={20} />
                </button>
                <button
                    onClick={() => handleChange(true)}
                    className={!cards ? '' : 'toggleActive'}
                >
                    <BsGrid size={20} />
                </button>
            </div>



            {(cards) ? <BasicGrid rows={rows} /> : <BasicTable rows={rows} tableFor={"Employee"} />}
        </main>);
}