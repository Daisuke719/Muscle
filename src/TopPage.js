import classes from "./style.module.css";
import { useNavigate } from "react-router-dom"; 

export const TopPage = () => {

    const navigate = useNavigate();

    const BackToLogin = () => {
        navigate("/")
    }

    return(
        <>
            <h1>TOPPAGEだお</h1>
            <button type="button" class={classes.loginButton} onClick={() => BackToLogin()}>戻る</button>
        </>
    )
}

