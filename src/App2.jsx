
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App'
import Cart  from "./components/Cart"
import Header from './components/Header';
function App2() {
  return (
    <Router>

       
      <Header/>

  
      <Routes>
    <Route path="/" element={  <App /> } />  
    
         <Route path="/cart" element={  <Cart/>} />
         
   

         
         
       
          
          
       
        </Routes>
    
      
      

      
      </Router>
  )
}

export default App2