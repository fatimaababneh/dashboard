import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24),
  createData('Ice cream sandwich', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
];

export default function DataTable({columns, data, onViewDetails}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <StyledTableCell key={col.id} align={col.align || 'left'}>
                {col.label}
              </StyledTableCell>
            ))}
            {onViewDetails && (
              <StyledTableCell align="center">Actions</StyledTableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <StyledTableRow key={rowIndex}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.phone}</StyledTableCell>
              {onViewDetails && (
                  <StyledTableCell align="center">
                    <Button onClick={() => onViewDetails(row)}
                    >Details</Button>
                  </StyledTableCell>
              )}
            </StyledTableRow>

          ))}

        </TableBody>
      </Table>
    </TableContainer>
  );
}