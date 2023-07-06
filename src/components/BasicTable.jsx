import { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';


const columns = {
    Employee: [
        { id: 'employee_id', label: 'ID' },
        { id: 'first_name', label: 'First Name', align: 'right' },
        { id: 'last_name', label: 'Last Name', align: 'right' },
        { id: 'email', label: 'Email', align: 'right' },
        { id: 'phone_number', label: 'Phone No', align: 'right' },
        { id: 'department_id', label: 'Department', align: 'right' },
    ],
    Department: [
        { id: 'department_id', label: 'ID' },
        { id: 'department_name', label: 'Department Name', align: 'left' }
    ]
};

export default function BasicTable({ rows, tableFor }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (<Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer>
            <Table stickyHeader aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {columns[tableFor].map((column) => (<TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                        >
                            {column.label}
                        </TableCell>))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => (
                            <TableRow
                                key={row.email}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {columns[tableFor].map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {row[column.id]}
                                    </TableCell>
                                ))}
                            </TableRow>))}
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </Paper >);
}