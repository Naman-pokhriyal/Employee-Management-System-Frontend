import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Employee from './Employee'
import Department from './Department'
import OrgHome from './OrgHome'

export default function Organization() {
    return (
        <div className='Org-wrap'>
            <Routes>
                <Route path="*" Component={OrgHome} />
                <Route path="employee" Component={Employee} />
                <Route path="department" Component={Department} />
            </Routes>
        </div>
    )
}
