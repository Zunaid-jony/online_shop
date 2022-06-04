
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Componet/Shared/Navigation/Navigation';
import Home from './Componet/Home/Home/Home';
import Login from './Componet/Login/Login';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
      
       <Routes>
         <Route path='/' element={<Home></Home>}> </Route> 
         <Route path='/login' element={<Login></Login>}> </Route> 
     
       </Routes>
      </BrowserRouter> 

    </div>
  );
}

export default App;
