import React from 'react'
import { Button } from '@mui/material';
import { Checkbox } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
const ArchieveData = () => {

    function createData( fat, carbs) {
        return { fat, carbs };
    }

    const rows = [
        createData( 6.0, 24),
        createData( 9.0, 37),
        createData( 16.0, 24),
        createData( 3.7, 67),
        createData( 16.0, 49),
    ];
    return (
        <>
            <TableBody>
                {rows.map((row, index) => (
                    <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {index + 1}
                        </TableCell>
                        <TableCell><Checkbox /></TableCell>
                        <TableCell>{row.fat}</TableCell>
                        <TableCell>{row.carbs}</TableCell>
                        <TableCell><Button variant="contained" color="error">Delete</Button></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </>
    )
}

export default ArchieveData