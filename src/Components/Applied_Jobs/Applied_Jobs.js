import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
  '&:hover': {
    backgroundColor: theme.palette.primary.light, // Adjust the color here
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const latestJobData = [
  {
    id: 1,
    title: "Job Title 1",
    company: "Company 1",
    shipType: "Ship Type 1",
    rank: "Rank 1",
  },
  {
    id: 2,
    title: "Job Title 2",
    company: "Company 2",
    shipType: "Ship Type 2",
    rank: "Rank 2",
  },
  {
    id: 3,
    title: "Job Title 3",
    company: "Company 3",
    shipType: "Ship Type 3",
    rank: "Rank 3",
  },
  {
    id: 4,
    title: "Job Title 4",
    company: "Company 4",
    shipType: "Ship Type 4",
    rank: "Rank 4",
  },
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="right">Company</StyledTableCell>
            <StyledTableCell align="right">Ship Type</StyledTableCell>
            <StyledTableCell align="right">Rank</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {latestJobData.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.title}
              </StyledTableCell>
              <StyledTableCell align="right">{row.company}</StyledTableCell>
              <StyledTableCell align="right">{row.shipType}</StyledTableCell>
              <StyledTableCell align="right">{row.rank}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
