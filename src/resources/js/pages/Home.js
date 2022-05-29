import React from 'react';
import { Button, Card } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import purple from '@material-ui/core/colors/purple';

//スタイルの定義
const useStyles = makeStyles((theme) => createStyles({
    card: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
    keyButton: {
      textTransform: 'none',
    },
    table: {
        minWidth: 800,
      },
    tableHead: {
        backgroundColor: purple['A100'],
    },
}));

const keyList = ['C', 'C#-Db', 'D', 'D#-Eb', 'E', 'F', 'F#-Gb', 'G', 'G#-Ab', 'A', 'A#-Bb', 'B']

//ヘッダーのコンテンツ用の配列定義
const majorDegree = ['度数', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
const functionList = ['機能', 'T', '代理SD', '代理T', 'SD', 'D', '代理T,SD', '代理D'];

function Home() {
    //定義したスタイルを利用するための設定
    const classes = useStyles();

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <h1>作曲補助アプリ</h1>
                        <p>スケールの構成音とダイアトニックコードを表示</p>
                        <Card className={classes.card}>
                            {/* キー選択 */}
                            <div>
                              {keyList.map((item, index) => (
                                <Button color="secondary" variant="contained" href={'/'+item} className={classes.keyButton} key={index}>{item}</Button>
                              ))}
                            </div>
                            {/* テーブル部分の定義 */}
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
                                            <TableCell align="center">C</TableCell>
                                            <TableCell align="center">D</TableCell>
                                            <TableCell align="center">E</TableCell>
                                            <TableCell align="center">F</TableCell>
                                            <TableCell align="center">G</TableCell>
                                            <TableCell align="center">A</TableCell>
                                            <TableCell align="center">B</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="center">ダイアトニックコード</TableCell>
                                            <TableCell align="center">
                                              C
                                            </TableCell>
                                            <TableCell align="center">Dm</TableCell>
                                            <TableCell align="center">Em</TableCell>
                                            <TableCell align="center">F</TableCell>
                                            <TableCell align="center">G</TableCell>
                                            <TableCell align="center">Am</TableCell>
                                            <TableCell align="center">Bdim</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;