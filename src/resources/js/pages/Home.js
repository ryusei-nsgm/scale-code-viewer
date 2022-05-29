import React, { useState, useEffect } from 'react';
import { Button, Card } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import axios from 'axios';
import MainTable from '../components/MainTable';


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

// const scales = ['Major', 'Minor'];
// let defaultNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
// let notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const chords = ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'];

function Home() {
    //定義したスタイルを利用するための設定
    const classes = useStyles();

    // function getScale(index){

    // }

    useEffect(() => {
      getScalesData();
    },[])
    const [scales, setScales] = useState([]);
    const getScalesData = () => {
        axios
          .get('/api/major?rootNumber=4')
          .then(response => {
              setScales(response.data);     //バックエンドから返ってきたデータでpostsを更新する
              console.log(response.data); //取得データ確認用のconsole.log()
          })
          .catch(() => {
              console.log('通信に失敗しました');
          });
    }
      
    let notes = [
      scales.i,
      scales.ii,
      scales.iii,
      scales.iv,
      scales.v,
      scales.vi,
      scales.vii,
    ];
    // scales.map((scale) =>
    //   notes.push({
    //     i: scale.i,
    //     ii: scale.ii,
    //     iii: scale.iii,
    //     iv: scale.iv,
    //     v: scale.v,
    //     vi: scale.vi,
    //     vii: scale.vii,
    //   })
    // );

    // const [notes, setNotes] = useState([]);
    // setNotes(defaultNotes);

    // then(response => {
    //   setNotes(response.data); //バックエンドから返ってきたデータでpostsを更新する
    //   console.log(response.data); //取得データ確認用のconsole.log()
    // })

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
                                <Button color="secondary" variant="contained" href={'/api/major?rootNumber=' + index} className={classes.keyButton} key={index}>{item}</Button>
                              ))}
                            </div>
                            {/* テーブル部分の定義 */}
                            <MainTable majorDegree={majorDegree} functionList={functionList} notes={notes} chords={chords} />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;