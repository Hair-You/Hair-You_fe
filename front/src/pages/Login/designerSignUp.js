import { useState, useEffect } from "react";
import Logo from "../../components/logo";
import './signUp.scss'
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DesignerSignUp() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: '',
        password: '',
        designer_name: '',
        career: '',
        nickname: '',
        //profile: '',
        manager: ''
        //gender: 'MEN',
        //tel: '',
        //job: 'designer'
    })

    const [validData, setValidData] = useState({
        id: false,
        password: false,
        designer_name: false,
    })

    const ID_REGEX = /^[a-z]+[a-z0-9]{8,}$/g; //영문자로 시작하는 영문,숫자, 8자 이상
    const PWD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,}$/; //영문, 숫자, 특수문자를 최소 한가지씩 조합, 8자 이상
    const NAME_REGEX = /^[ㄱ-ㅎ|가-힣]+$/; //한글만
    // const TEL_REGEX = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/; //핸드폰


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
        const result = NAME_REGEX.test(formData.designer_name);
        setValidData({ ...validData, designer_name: result })
    }, [formData.name])

    // //tel 유효성 검사
    // useEffect(() => {
    //     const result = TEL_REGEX.test(formData.tel);
    //     setValidData({ ...validData, tel: result })
    // }, [formData.tel])

    //formData 값 넣기
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    //submit axios처리
    const handleRegister = (e) => {
        e.preventDefault();
        // 회원가입 로직 처리 (백엔드 서버와 통신 등)
        axios.post('/hair/designer', formData)
            .then(response => { console.log(formData) })
            .catch(error => { console.log(error) })

        // 가입 후 로그인 처리 (임시: 사용자 정보를 Redux 스토어에 저장)
        //const user = {}; // 가입 후 사용자 정보
        //dispatch(login(user)); 
        { console.log(formData) }
        navigate('/login')
    };

    return (
        <div className="container">
            <Logo></Logo>
            <div className='main-container'>
                <h1>designer signup</h1>
                <hr></hr>
                <div className='sign'>
                    <form className='signForm'>
                        <ul>
                            <li>
                                <input type='id' name='id' placeholder='ID' onChange={handleChange}></input>
                            </li>
                            <li>
                                <input type='password' name='password' placeholder='PASSWORD' onChange={handleChange}></input>
                            </li>
                            <li>
                                <input type='text' name='designer_name' placeholder='NAME' onChange={handleChange}></input>
                            </li>
                            <li>
                                <input type='text' name='nickname' placeholder='NICKNAME' onChange={handleChange}></input>
                            </li>
                            <li>
                                <input type='text' name='career' placeholder='CAREER' onChange={handleChange}></input>
                            </li>
                            <li>
                                <input type='text' name='manager' placeholder='MANAGER' onChange={handleChange}></input>
                            </li>
                        </ul>
                        <button disabled={(!validData.id || !validData.password || !validData.designer_name) ? true : false} type='submit' onClick={handleRegister}>signup</button>
                        {console.log(validData)}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DesignerSignUp;