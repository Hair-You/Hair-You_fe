import logo from './logo.svg';
import './App.scss';
import First from './pages/Index/First';
import Login from './pages/Login/login';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes, Link } from 'react-router-dom';
import DesignerSignUp from './pages/Login/designerSignUp';
import CustomerSignUp from './pages/Login/customerSignUp';
import SignUp from './pages/Login/signUp';
import CustomerMain from './pages/Main/customerMain';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<First />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/csignup' element={<CustomerSignUp ></CustomerSignUp>}></Route>
        <Route path='/dsignup' element={<DesignerSignUp></DesignerSignUp>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

        <Route path='/cmain' element={<CustomerMain></CustomerMain>}></Route>
      </Routes >
    </div >
  );
}

export default App;
