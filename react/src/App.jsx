import { useState, useEffect } from 'react';
import ProductsList from './components/Products/ProductsList';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

import HomePage from './pages/HomePage'; 
import ProductDetailPage from './pages/ProductDetailPage';
import ProductNewPage from './pages/ProductNewPage';
import LoginPage from './pages/LoginPage';

import * as authService from './services/users.services';

import './App.css'

function RoutePrivate({isAutenticate, children}){
  const navigate = useNavigate();

  useEffect(() => {
    if(!isAutenticate){
        navigate('/login');    
    }
  }, [isAutenticate])


  return isAutenticate ? children : null
}

function App() {
  const navigate = useNavigate();
  const [isAutenticate, setIsAutenticate] = useState(null);

  useEffect(() => {
    if(localStorage.getItem('token')){
      setIsAutenticate(true);
    }
    else{
      setIsAutenticate(false);
    }
  }, [])

  function onLogin(token, user){
    if(token){
      localStorage.setItem('token', token);

      setIsAutenticate(true);
      navigate('/');
    }
    else{
      localStorage.removeItem('token');

      setIsAutenticate(false);
    }
  }

  function onLogout(){
    localStorage.removeItem('token');
    setIsAutenticate(false);
    navigate('/login');
    authService.logout();
  }

  if(isAutenticate === null){
    return <div>Loading...</div>
  }

  return (
    <div className="App">
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/products'>Productos</Link>
          <Link to='/products/new'>Nuevo</Link>
          {isAutenticate && <> 
          | <a onClick={onLogout}>Logout</a>
          </>}
        </nav>

        <Routes>
          <Route path="/login" element={<LoginPage onLogin={onLogin}/>} />
          <Route path="/" element={<RoutePrivate isAutenticate={isAutenticate}><HomePage /></RoutePrivate>} />
          <Route path="/products" element={<RoutePrivate isAutenticate={isAutenticate}><ProductsList /></RoutePrivate>} />
          <Route path="/products/new" element={<RoutePrivate isAutenticate={isAutenticate}><ProductNewPage /></RoutePrivate>} />
          <Route path="/products/:id" element={<RoutePrivate isAutenticate={isAutenticate}><ProductDetailPage /></RoutePrivate>} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
    </div>
  )
}

export default App
