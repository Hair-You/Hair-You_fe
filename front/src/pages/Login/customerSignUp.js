import './signUp.scss'
import Logo from '../../components/logo'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/user';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CustomerSignUp() {

    //const dispatch = useDispatch();
    const navigate = useNavigate();
    const config = { "Content-Type": 'application/json' }; //json 형태로
    const [formData, setFormData] = useState({
        id: '',
        password: '',
        username: '',
        number: '',
        gender: 'MALE',
        //job: 'customer'
    });

    const [validData, setValidData] = useState({
        id: false,
        password: false,
        username: false,
        number: false
    })

    const ID_REGEX = /^[a-z]+[a-z0-9]{8,}$/g; //영문자로 시작하는 영문,숫자, 8자 이상
    const PWD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,}$/; //영문, 숫자, 특수문자를 최소 한가지씩 조합, 8자 이상
    const NAME_REGEX = /^[ㄱ-ㅎ|가-힣]+$/; //한글만
    const TEL_REGEX = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/; //핸드폰

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

    //name 유효성 검사
    useEffect(() => {
        const result = NAME_REGEX.test(formData.username);
        setValidData({ ...validData, username: result })
    }, [formData.username])

    //tel 유효성 검사
    useEffect(() => {
        const result = TEL_REGEX.test(formData.number);
        setValidData({ ...validData, number: result })
    }, [formData.number])

    //formData 값 넣기
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    //submit axios처리
    const handleRegister = (e) => {
        e.preventDefault();
        // 회원가입 로직 처리 (백엔드 서버와 통신 등)
        axios.post('/api/auth/user/sign-up', formData, config)
            .then(response => {
                // 성공 시 처리
                console.log(response.data);
            })
            .catch(error => {
                // 오류 시 처리
                console.error(error);
            });

        //const user = {}; // 가입 후 사용자 정보
        //dispatch(login(user)); 
        { console.log(formData) }
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
                                <input type='text' name='username' placeholder='NAME' onChange={handleChange} ></input>
                            </li>
                            <li>
                                <input type='tel' name='number' placeholder='TEL' onChange={handleChange} ></input>
                            </li>
                            <li>
                                <label>
                                    <input type="radio" name="gender" value="MEN" onChange={handleChange} checked />
                                    MEN
                                </label>
                                <label>
                                    <input type="radio" name="gender" value="WOMEN" onChange={handleChange} />
                                    WOMEN
                                </label>
                            </li>

                        </ul>
                        {console.log(validData)}
                        <button disabled={(!validData.id || !validData.password || !validData.username) ? true : false} type='submit' onClick={handleRegister}> signup</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CustomerSignUp;