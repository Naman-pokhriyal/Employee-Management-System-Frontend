import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddEmployee() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [sal, setSal] = useState("");
    const [dept, setDept] = useState("");
    const date = new Date();
    const departments = [{ "department_name": "HR" }, { "department_name": "Finance" }, { "department_name": "Sales" }];


    const handleSubmit = async (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/employee/add', {
            first_name: fname,
            last_name: lname,
            email: email,
            phone_number: phone,
            salary: sal,
            hire_date: date.getDate(),
            department_id: dept,
            role_id: 1
        }
        ).then(console.log("Done"))
            .catch((e) => console.log(e))

    };
    // Back button Config
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate(-1);
    };
    return (
        <main>
            <button onClick={handleBackButtonClick}>{'<'}</button>
            <form onSubmit={handleSubmit}>
                <div className="form-grp" >
                    <label htmlFor="first_name">First Name</label>
                    <input id="first_name" type="text" value={fname} onChange={(e) => setFname(e.target.value)} />
                </div>
                <div className="form-grp">
                    <label htmlFor="last_name">Last Name</label>
                    <input id="last_name" type="text" value={lname} onChange={(e) => setLname(e.target.value)} />
                </div>
                <div className="form-grp">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-grp">
                    <label htmlFor="phone_number">Phone Number</label>
                    <input id="phone_number" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="form-grp">
                    <label htmlFor="salary">Salary</label>
                    <input id="salary" type="text" value={sal} onChange={(e) => setSal(e.target.value)} />
                </div>
                <div className="form-grp">
                    <label htmlFor="department">Department</label>
                    <select id="department" name="department" onChange={(e) => setDept(e.target.value + 1)}>
                        {
                            departments.map((dept, index) => {
                                return <option key={index} value={index + 1}>{dept.department_name}</option>
                            })
                        }
                    </select>
                </div>
                <button type="Submit">Submit</button>
            </form>
        </main>
    );
}