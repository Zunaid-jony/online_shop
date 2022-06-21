
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
import Register from './Componet/Login/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Componet/Login/PrivateRoute/PrivateRoute';

import AddProduct from './Componet/Dashboard/DashboardHome/AddProduct';
import DashboardHeader from './Componet/Dashboard/DashboardHome/DashboardHeader';
import ItemTest from './Componet/Dashboard/DashboardHome/ItemTest';
import { Items } from './Componet/data';
import Ites from './Componet/Dashboard/DashboardHome/Ites';



function App() {
  return (
    <div className="App">
     
     <CartProvider>
     <AuthProvider>
      <BrowserRouter>
        <Navigation></Navigation>
      
       <Routes>
         <Route path='/' element={<Home></Home>}> </Route> 
         <Route path='/buy' element={<AddItems></AddItems>}> </Route> 
          <Route path='/login' element={<Login></Login>}> </Route>  
          <Route path='/register' element={<Register></Register>}> </Route>  
         <Route path='/dashboard' element={<PrivateRoute><DashboardHome></DashboardHome></PrivateRoute> }> </Route> 
         <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <DashboardHome/>
                  </PrivateRoute>
                }
                >
                       <Route index element={<DashboardHeader></DashboardHeader>} /> 
                    
                      {/* <Route path="abc" element={<Abc></Abc>}  /> */}
                      <Route path="addproduct" element={<AddProduct></AddProduct>}  />
                      <Route path="additem" element={<Ites></Ites>}/>
                      <Route path="test" element={<ItemTest></ItemTest>}  />
                      {/* payment/:appointmentId ata akto spesell */}
                 

              </Route>
     
       </Routes>
      </BrowserRouter> 
      </AuthProvider>
      </CartProvider>

   
    </div>
  );
}

export default App;
