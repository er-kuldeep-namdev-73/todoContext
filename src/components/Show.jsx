import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import AllData from './AllData';
import ArchieveData from './ArchieveData';



const color = "#000000";

export default function Show() {
    return (
        <div style={{background:color,padding:"20px",margin:"10px"}}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{fontSize:"20px",fontWeight:"bold"}}>Id</TableCell>
                            <TableCell style={{fontSize:"20px",fontWeight:"bold"}}>Completed</TableCell>
                            <TableCell style={{fontSize:"20px",fontWeight:"bold"}}>Item Name</TableCell>
                            <TableCell style={{fontSize:"20px",fontWeight:"bold"}}>Status</TableCell>
                            <TableCell style={{fontSize:"20px",fontWeight:"bold"}}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <AllData/>
                    {/* <ArchieveData/> */}
                </Table>
            </TableContainer>
        </div>
    );
}