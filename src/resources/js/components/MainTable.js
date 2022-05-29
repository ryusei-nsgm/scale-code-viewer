import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import purple from '@material-ui/core/colors/purple';
import { makeStyles, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => createStyles({
    card: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
    table: {
        minWidth: 650,
      },
    tableHead: {
        backgroundColor: purple['A100'],
    },
}));

function MainTable(props) {
  //定義したスタイルを利用するための設定
  const classes = useStyles();

  //親コンポーネントからpropsで受け取る
  const {majorDegree, functionList, notes, chords} = props; 

  return (
    <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          {/* ヘッダー部分 */}
          <TableHead className={classes.tableHead}>
              <TableRow>
                  {majorDegree.map((item, index) => (
                      <TableCell align="center" key={index}>{item}</TableCell>
                  ))}
              </TableRow>
              <TableRow>
                  {functionList.map((item, index) => (
                      <TableCell align="center" key={index}>{item}</TableCell>
                  ))}
              </TableRow>
          </TableHead>
          {/* ボディ部分 */}
          <TableBody>
              <TableRow>
                  <TableCell align="center">構成音</TableCell>
                  {notes.map((note, index) => (
                    <TableCell align="center" key={index}>{note}</TableCell>
                  ))}
              </TableRow>
              <TableRow>
                  <TableCell align="center">ダイアトニックコード</TableCell>
                  {chords.map((chord, index) => (
                    <TableCell align="center" key={index}>{chord}</TableCell>
                  ))}
              </TableRow>
          </TableBody>
        </Table>
    </TableContainer>
  );
}

export default MainTable;