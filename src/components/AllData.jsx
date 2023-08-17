import React, { useContext } from 'react'
import { Button } from '@mui/material';
import { Checkbox } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { contextApi } from '../App';

const AllData = () => {

    const { todoData, setTodoData } = useContext(contextApi)

    const handleDelete = (e, id) => {
        // console.log("Click on Delete Button.",id)
    }

    return (
        <>
            <TableBody>
                {todoData.length !== 0 && todoData.map((todo, index) => (

                    <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0} }}
                        title={`Priority : ${todo.priority}`}
                    >
                        <TableCell component="th" scope="row">
                            {index + 1}
                        </TableCell>
                        <TableCell><Checkbox /></TableCell>
                        <TableCell>{todo.title}</TableCell>
                        <TableCell>{todo.status === false ? "Pending" : "Completed"}</TableCell>
                        <TableCell><Button variant="contained" color="error" onClick={(e) => handleDelete(e, todo.id)}>Delete</Button></TableCell>
                    </TableRow>

                ))}
            </TableBody>
        </>
    )
}

export default AllData