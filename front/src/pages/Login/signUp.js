import Logo from "../../components/logo";
import './signUp.scss'
import { useNavigate } from "react-router-dom";

function SignUp() {

    const navigate = useNavigate();

    return (
        <div className="container">
            <Logo></Logo>
            <h1>welcome, hair you!</h1>
            <div className="sign-container">
                <div>
                    <p><img src="img/logo192.png"></img></p>
                    <button onClick={() => { navigate('/csignup') }}>customer signup</button>
                </div>
                <div>
                    <p><img src="img/logo192.png"></img></p>
                    <button onClick={() => { navigate('/dsignup') }}>designer signup</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp;