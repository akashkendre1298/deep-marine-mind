import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Skeleton Loader Component
const SkeletonLoader = () => (
  <TableRow>
    <TableCell>
      <div style={{ width: 80, height: 20, backgroundColor: 'rgba(0,0,0,0.1)' }}></div>
    </TableCell>
    <TableCell align="right">
      <div style={{ width: 80, height: 20, backgroundColor: 'rgba(0,0,0,0.1)' }}></div>
    </TableCell>
    <TableCell align="right">
      <div style={{ width: 80, height: 20, backgroundColor: 'rgba(0,0,0,0.1)' }}></div>
    </TableCell>
    <TableCell align="right">
      <div style={{ width: 80, height: 20, backgroundColor: 'rgba(0,0,0,0.1)' }}></div>
    </TableCell>
  </TableRow>
);

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
    backgroundColor: theme.palette.primary.light,
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
  const [isLoading, setIsLoading] = React.useState(true);

  // Simulating loading delay
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
       <div className='flex justify-between pb-3 align-middle'>
      <div>

    <h2 className='text-2xl font-bold'>Applied Jobs </h2>
      </div>
      <div>
        <button className='font-bold border-black-100'>View All</button>
      </div>
    </div>

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
          {isLoading ? (
           
            <>
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
            </>
          ) : (
            // Show actual data when loaded
            latestJobData.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.title}
                </StyledTableCell>
                <StyledTableCell align="right">{row.company}</StyledTableCell>
                <StyledTableCell align="right">{row.shipType}</StyledTableCell>
                <StyledTableCell align="right">{row.rank}</StyledTableCell>
              </StyledTableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
