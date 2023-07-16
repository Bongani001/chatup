import { useContext } from 'react';
import SignIn from './components/Sign-in/SignIn';
import { AuthContext } from './context/AuthContext';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.js';


function App() {

  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute = ({children}) => {
    if(!currentUser) {
      return <Navigate to="/sign-in" />
    }

    return children;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute>
            <Homepage/>
            </ProtectedRoute>} />
          <Route path="/sign-in" element={<SignIn/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
