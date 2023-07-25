import React, { useEffect, useState } from 'react';
import BigBadge from "../components/BigBadge";
import BasicTable from "../components/BasicTable";
import axios from "axios";
import "../Styles/employee.css";
import { useNavigate } from 'react-router-dom';

export default function Department() {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/department');
            setRows(response.data);
        } catch (error) {
            console.log(error);
        }
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
                <BigBadge title="Total Departments" value={rows.length} />
            </div>
            <BasicTable rows={rows} tableFor={"Department"} />
        </main>
    )

}
