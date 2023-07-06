import axios from "axios";
import { useState } from "react";

export default function Attendance() {
    const [rows, setRows] = useState([]);
    const [empID, setEmpID] = useState("");

    const fetchData = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get('http://localhost:8080/attendance/get', {
                params: {
                    empID: empID
                }
            });
            setRows(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main>
            <form onSubmit={fetchData}>
                <input type="number" value={empID} onChange={(e) => setEmpID(e.target.value)} />
                <button type="submit">Submit</button>
                {rows.length}
            </form>
        </main>
    );
}
