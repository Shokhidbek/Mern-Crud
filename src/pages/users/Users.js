import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid, Button } from '@mui/material'



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


const rowsThead = [
  { id: 1, name: "#", align: "left", maxWidth: "30" },
  { id: 1, name: "Name", align: "left", maxWidth: "150" },
  { id: 2, name: "Last name", align: "left", maxWidth: "150" },
  { id: 3, name: "Phone", align: "left", maxWidth: "150" },
  { id: 4, name: "Street", align: "left", maxWidth: "150" },
  { id: 5, name: "Email", align: "left", maxWidth: "150" },
  { id: 6, name: "Actions", align: "center", maxWidth: "80" },
]


const rows = [
  { number: 1, id: 1, name: 'Shoxidbek', lastName: "Kimsanboyev", phone: "+998901478771", street: "Dehqonobod", email: "shox7316@gmail.com" }
];

const Users = () => {
  return (

    <Grid container spacing={2}>
      <Grid item sm={12} xs={12} md={10} style={{ margin: "auto", marginTop: '30px' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                {
                  rowsThead && rowsThead.map(rowThead => {
                    return (
                      <StyledTableCell maxWidth={`${rowsThead.maxWidth}px`} align={rowThead.align} key={rowThead.id}>{rowThead.name}</StyledTableCell>
                    )
                  })
                }

              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell scope="row">
                    {row.number}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.name}</StyledTableCell>
                  <StyledTableCell align="left">{row.lastName}</StyledTableCell>
                  <StyledTableCell align="left">{row.phone}</StyledTableCell>
                  <StyledTableCell align="left">{row.street}</StyledTableCell>
                  <StyledTableCell align="left">{row.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Button variant='outlined'>
                      Edit
                    </Button>
                    <Button variant='outlined' color='error' style={{marginLeft: '10px'}}>
                      Delete
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

    </Grid>

  );
}

export default Users;