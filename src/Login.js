import classes from "./style.module.css";
import { useNavigate } from "react-router-dom"; 
import { useState } from "react";

export const Login = () => {

  const [adress, setAdress] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const GoTopPage = () => {
    navigate("/TopPage")
  }

  return (
    <div>
      <h1>筋肉管理委員会</h1>
      <input placeholder="メールアドレス" onChange={(e)=>setAdress(e.target.value)}></input>
      <br></br>
      <input placeholder="パスワード" onChange={(e)=>setPassword(e.target.value)}></input>
      <br></br>
      <br></br>
      <p>入力したアドレスは"{adress}"です。</p>
      <p>入力したパスワードは"{password}"です。</p>
   
        <button type="button" class={classes.loginButton} onClick={() => GoTopPage()} >ログイン</button>

    </div>
  );
}

