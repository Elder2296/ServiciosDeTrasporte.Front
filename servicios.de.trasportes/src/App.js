import Nav from './Components/Navbar'
import './App.css';
import {Routes,Route } from 'react-router-dom';

import Clientes from './Components/clientes/Clientes'
import Home from './Components/Home';
import Solicitud from './Components/Solicitud/Solicitud';

function App() {
  return (
    <>
     
      <div className='pusher'>
        <div className='ui inverted vertical masthead center aligned segment altura'>
          <Nav/>
           <Routes>
              
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/Clientes' element={<Clientes/>}/>
              <Route exact path='/Solicitudes' element={<Solicitud/>}/>
           </Routes>
              
           
            
        </div>

      </div>
      
    </>
  );
}

export default App;
