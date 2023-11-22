import { useDispatch, useSelector } from "react-redux";
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';

import Logo from '../../components/logo'
import './main.scss'
import { useEffect, useState } from "react";

function CustomerMain() {

    // const user = useSelector((state) => state.user)
    // const dispatch = useDispatch();

    // const logout = () => {
    //     dispatch(logout());
    // }
    const [location, setLocation] = useState({
        latitude: '',//위도
        longitude: ''//경도
    })
    const [address, setAddress] = useState('')


    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
        }, error => {
            console.error('Error getting geolocation:', error);
        });
    }, []); //내 위도 경도 찾기

    useEffect(() => {
        axios.get("https://dapi.kakao.com/v2/local/geo/coord2address.json?input_coord=WGS84&y=37.3358159&x=126.7301096", {
            headers: {
                Authorization: "KakaoAK 7931ae232262fe5569c4a428111b96ab"
            }
        })
            .then((res) => {
                setAddress(res.data.documents[0].address.region_2depth_name + ' ' + res.data.documents[0].address.region_3depth_name)
            })
            .catch((error) => { console.log(error) })
    }, [location]); // 효과는 'location' 상태에 의존합니다.


    return (
        <>
            <Logo></Logo>
            <div className="container">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {address}
                    </Dropdown.Toggle>

                    {/* <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">경기도 파주시</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">서울시 마포구</Dropdown.Item>
                    </Dropdown.Menu> */}
                </Dropdown>
            </div>
        </>
    )
}

export default CustomerMain;