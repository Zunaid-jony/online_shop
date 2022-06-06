
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Componet/Shared/Navigation/Navigation';
import Home from './Componet/Home/Home/Home';
import Login from './Componet/Login/Login';
import DevidCard from './Componet/Dashboard/Devid/DevidCard'
import AddItems from './Componet/Home/SubMenu/AddItems';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from 'react-use-cart';
import DashboardHome from './Componet/Dashboard/DashboardHome/DashboardHome';



function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <Navigation></Navigation>
      
       <Routes>
         <Route path='/' element={<Home></Home>}> </Route> 
         <Route path='/buy' element={<AddItems></AddItems>}> </Route> 
          <Route path='/login' element={<Login></Login>}> </Route>  
         <Route path='/dashboard' element={<DashboardHome></DashboardHome> }> </Route> 
     
       </Routes>
      </BrowserRouter> 
      </CartProvider>

    </div>
  );
}

export default App;
