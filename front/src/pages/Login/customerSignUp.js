import './signUp.scss'
import Logo from '../../components/logo'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/user';
import { useNavigate } from 'react-router-dom';

function CustomerSignUp() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: '',
        password: '',
        name: '',
        tel: '',
        job: 'customer'
    });

    const [validData, setValidData] = useState({
        id: false,
        password: false,
        name: false,
        tel: false
    })


    const ID_REGEX = /^[a-z]+[a-z0-9]{8,}$/g;
    const PWD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,}$/;

    //id 유효성 검사
    useEffect(() => {
        const result = ID_REGEX.test(formData.id)
        setValidData({ ...validData, id: result })
    }, [formData.id])

    //password 유효성 검사
    useEffect(() => {
        const result = PWD_REGEX.test(formData.password);
        setValidData({ ...validData, password: result });
    }, [formData.password]);

    //formData 값 넣기
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    //submit axios처리
    const handleRegister = (e) => {
        e.preventDefault();
        // 회원가입 로직 처리 (백엔드 서버와 통신 등)

        // 가입 후 로그인 처리 (임시: 사용자 정보를 Redux 스토어에 저장)
        //const user = {}; // 가입 후 사용자 정보
        //dispatch(login(user)); 
        navigate('/login')
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
                                <input type='text' name="id" placeholder='ID' onChange={handleChange} ></input>
                            </li>
                            <li>
                                <input type='password' name='password' placeholder='PASSWORD' onChange={handleChange}></input>
                            </li>
                            <li>
                                <input type='text' name='name' placeholder='NAME' onChange={handleChange} required></input>
                            </li>
                            <li>
                                <input type='tel' name='tel' placeholder='TEL' onChange={handleChange} required></input>
                            </li>
                        </ul>
                        <button disabled={!validData.id || !validData.password ? true : false} type='submit' onClick={handleRegister}>signup</button>
                    </form>
                    {console.log(validData.password)}
                </div>
            </div>
        </div>
    )
}

export default CustomerSignUp;