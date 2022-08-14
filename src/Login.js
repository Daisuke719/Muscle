import classes from "./style.module.css";
import { useNavigate } from "react-router-dom"; 

export const Login = () => {

  const navigate = useNavigate();

  const GoTopPage = () => {
    navigate("/TopPage")
  }

  return (
    <div>
      <h1>筋肉管理委員会</h1>
      <input value="メールアドレス"></input>
      <br></br>
      <input value="パスワード"></input>
      <br></br>
      <br></br>
   
        <button type="button" class={classes.loginButton} onClick={() => GoTopPage()} >ログイン</button>

    </div>
  );
}

