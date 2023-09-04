import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import About from './views/About'
import Detail from './views/Detail'
import LandingPage from './views/LandingPage';
import Favorites from './views/Favorites'



function App() {

   const location = useLocation();

   const navigate = useNavigate();
   const [ access, setAccess ] = useState(false);

   const email = 'ramiro.s.pagella@gmail.com'
   const password = '12345678'


   function login (userData) {
      if (userData.email === email && userData.password === password) {
         setAccess(true);
         navigate('/home')
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access])




   return (
      <div className='App'>
         
         
         {location.pathname !== '/' && (
            <Nav  />
         )}

         <Routes>

            <Route path='/' element={<LandingPage login={login} />} /> 

            <Route path='/home' element={ <Cards /> } />

            <Route path='/favorites' element={ <Favorites/> } />

            <Route path='/about' element={ <About/> } />

            <Route path='/detail/:id' element={ <Detail /> } />


         </Routes>


         

      </div>
   );

}

export default App;
