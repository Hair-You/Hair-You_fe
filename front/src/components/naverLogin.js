import axios from 'axios';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function NaverLogin({ setGetToken, setUserInfo }) {

    // const user = useSelector((state) => state.user)
    const [token, setToken] = useState('')

    const navigate = useNavigate();

    const { naver } = window //window 객체에서 naver 속성 추출
    const NAVER_CLIENT_ID = "H97rPtdSaHjGM4z0KtwM" // cilent_id
    const NAVER_SECRET_ID = "IeZk7zmB4e"
    const NAVER_CALLBACK_URL = "http://localhost:3000/login" //callback_url / 로그인 후 페이지 이동할 곳

    const initializeNaverLogin = () => {

        //네이버 로그인 인스턴스 생성ㄴ
        //LoginWithNaverId : 네이버 아이디로 로그인을 처리하기 위한 JavaScript Api
        const naverLogin = new naver.LoginWithNaverId({

            clientId: NAVER_CLIENT_ID,
            callbackUrl: NAVER_CALLBACK_URL,
            // 팝업창으로 로그인을 진행할거?           
            isPopup: false,
            // 버튼 타입 ( 색상, 타입, 크기 )
            loginButton: { color: 'green', type: 3, height: 58 },
            //로그인 함수를 호출할 js 함수를 호출할지, 말지 정함
            callbackHandle: true,
        })

        //naverlogin 초기화
        naverLogin.init()

        // 선언된 naverLogin 을 이용하여 유저 (사용자) 정보를 불러오는데  
        // 함수 내부에서 naverLogin을 선언하였기에 지역변수처리가 되어  
        // userinfo 정보를 추출하는 것은 지역변수와 같은 함수에서 진행주어야한다.

        // 아래와 같이 로그인한 유저 ( 사용자 ) 정보를 직접 접근하여 추출가능하다.
        // 이때, 데이터는 첫 연동시 정보 동의한 데이터만 추출 가능하다.

        // 백엔드 개발자가 정보를 전달해준다면 아래 요기! 라고 작성된 부분까지는 
        // 코드 생략이 가능하다.  


        //callbackHandle: true 로 하여 로그인한상태 자동으로 확인하여 실행하는 함수
        //getLoginStatus 메서드는 사용자의 로그인 상태를 확인하고, 상태에 따라 콜백 함수를 호출
        naverLogin.getLoginStatus(async function (status) {
            //로그인 되어 있으면 true, 아니면 false
            if (status) {
                // 아래처럼 선택하여 추출이 가능하고, 
                // const userid = naverLogin.user.getEmail()
                // const username = naverLogin.user.getName()
                console.log(naverLogin.user);

                // 정보 전체를 아래처럼 state 에 저장하여 추출하여 사용가능하다. 
                // setUserInfo(naverLogin.user)
            } else {
                console.log('error')
            }
        })
        // 요기!
    }



    // 네이버 소셜 로그인 (네아로) 는 URL 에 엑세스 어스코드가 붙어서 전달된다.
    // 우선 아래와 같이 어스코드를 추출 할 수 있으며,
    // 3부에 작성 될 Redirect 페이지를 통해 빠르고, 깨끗하게 처리가 가능하다.

    //현재 url에 access_token 있으면 getToken() 호출
    const userAccessToken = () => {
        window.location.href.includes('access_token') && getToken()
    }

    const getToken = () => {
        const token = window.location.href.split('=')[1].split('&')[0]
        // console.log, alert 창을 통해 어스코드가 잘 추출 되는지 확인하자! 

        // 이후 로컬 스토리지 또는 state에 저장하여 사용하자!   
        // localStorage.setItem('access_token', token)
        setToken(token)
    }

    // 화면 첫 렌더링이후 바로 실행하기 위해 useEffect 를 사용하였다.
    useEffect(() => {
        initializeNaverLogin()
        userAccessToken()
    }, [])

    const naverLogout = () => {

        axios.delete('https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id=' + NAVER_CLIENT_ID + '&client_secret=' + NAVER_SECRET_ID + '&access_token=' + token + '&service_provider=NAVER').then(response => console.log('성공'))
            .catch(error => console.log(error))


    };
    console.log(token)

    return (
        <>
            <div id="naverIdLogin" /><br></br>
            <button onClick={naverLogout}>로그아웃</button>
        </>
    )
}

export default NaverLogin;