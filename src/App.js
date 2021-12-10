import { ToastContainer } from 'react-toastify';
import { Routes , Route } from 'react-router-dom';

import './App.css';
import AddStudent from './components/AddStudent';
import Home from './components/Home';
import EditStudent from './components/EditStudent';
function App() {
  return (
    <div className="App">
       
      <ToastContainer />
      
      <Routes>  
      <Route exact path="/" element={<Home />}>
      <>Welcome to Employee details</>
      </Route>
    <Route path="/add" element={<AddStudent />}>
    
    </Route>

    <Route path="/edit/:id" element={ <EditStudent />} >
  
    </Route>
      
      </Routes>
    </div>
  );
}

export default App;
