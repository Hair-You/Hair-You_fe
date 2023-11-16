import Logo from "../../components/logo";
import './signUp.scss'
import { useNavigate } from "react-router-dom";

function SignUp() {

    const navigate = useNavigate();

    return (
        <div className="container">
            <Logo></Logo>
            <div className="sign-container">
                <div>
                    <p><img src="img/logo192.png"></img></p>
                    <button className="signUp-btn" onClick={() => { navigate('/csignup') }}>일반 회원 회원가입</button>
                </div>
                <div>
                    <p><img src="img/logo192.png"></img></p>
                    <button className="signUp-btn" onClick={() => { navigate('/dsignup') }}>디자이너 회원가입</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp;