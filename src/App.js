import { BrowserRouter, Routes, Route, Switch} from "react-router-dom";
import { TopPage } from "./TopPage";
import { Login } from './Login';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/TopPage" element={<TopPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;