import classes from "./style.module.css";
import { useNavigate } from "react-router-dom"; 
import { useState } from "react";

export const TopPage = () => {
    const [date, setDate] = useState("");
    const [point, setPoint] = useState("");
    const [train, setTrain] = useState("");
    const [time, setTime] = useState("");
    const [happy, setHappy] = useState("");
    const navigate = useNavigate();

    const BackToLogin = () => {
        navigate("/")
    }

    return(
        <>
            <h1>トレーニング日程の調整</h1>
            <button type="button" class={classes.loginButton}>新規登録</button>
            <br></br>
            <hr></hr>
            <div class={classes.backcolor}>
                <h3>登録したいトレーニングを入力してください</h3>
                <div>日付　　　　：　<input onChange={(e)=>setDate(e.target.value)}></input></div>
                <div>部位　　　　：　<input onChange={(e)=>setPoint(e.target.value)}></input></div>
                <div>内容　　　　：　<input onChange={(e)=>setTrain(e.target.value)}></input></div>
                <div>時間　　　　：　<input onChange={(e)=>setTime(e.target.value)}></input></div>
                <div>達成できた？：　<input onChange={(e)=>setHappy(e.target.value)}></input></div>
            </div>
            <br></br>
            <div class={classes.backcolor2}>
                <h3>前回の筋トレ記録</h3>
                <div>日付　　　　：　{date}</div>
                <div>部位　　　　：　{point}</div>
                <div>内容　　　　：　{train}</div>
                <div>時間　　　　：　{time}</div>
                <div>達成できた？：　{happy}</div>

            </div>
            <br></br>
            <button type="button" class={classes.loginButton} onClick={() => BackToLogin()}>戻る</button>
        </>
    )
}

