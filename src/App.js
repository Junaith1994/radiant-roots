import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Register from './Pages/RegisterVolunteer/Register';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './Pages/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
        <Route path='/volunteer-register/:title' element={
          <RequireAuth>
            <Register></Register>
          </RequireAuth>
        }></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
