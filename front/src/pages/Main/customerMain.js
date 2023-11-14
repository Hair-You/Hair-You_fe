import { useDispatch, useSelector } from "react-redux";

function CustomerMain() {

    const user = useSelector((state) => state.user)
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logout());
    }

    return (
        <>
            <div>
                {user.id}님 환영합니다
                <button> 로그아웃 </button>
            </div>
        </>
    )
}

export default CustomerMain;