import './signUp.scss'
import Logo from '../../components/logo'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/user';
import { useNavigate } from 'react-router-dom';

function CustomerSignUp() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userid: '',
        userpasswd: '',
        username: '',
        usersex: '',
        usertel: '',
        select: 'customer'
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // 회원가입 로직 처리 (백엔드 서버와 통신 등)

        // 가입 후 로그인 처리 (임시: 사용자 정보를 Redux 스토어에 저장)
        const user = { userid: formData.userid }; // 가입 후 사용자 정보
        dispatch(login(user));
        navigate('/')
    };

    return (
        <div className="container">
            <Logo></Logo>
            <div className='main-container'>
                <h1>customer signup</h1>
                <hr></hr>
                <div className='sign'>
                    <form className='signForm'>
                        <ul>
                            <li>
                                <input type='text' name="userid" placeholder='ID' onChange={handleChange} ></input>
                            </li>
                            <li>
                                <input type='password' name='userpasswd' placeholder='PASSWORD' onChange={handleChange}></input>
                            </li>
                            <li>
                                <input type='text' name='username' placeholder='NAME' onChange={handleChange}></input>
                            </li>
                            <li>

                            </li>
                            <li>
                                <input type='tel' name='usertel' placeholder='TEL' onChange={handleChange}></input>
                            </li>
                        </ul>
                        <button type='submit' onClick={handleRegister}>signup</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CustomerSignUp;