import React from 'react'
import { Link } from 'react-router-dom'

export default function OrgHome() {
    return (
        <div>
            <Link to="employee">Employees</Link>
            <Link to="department">Departments</Link>
        </div>
    )
}
