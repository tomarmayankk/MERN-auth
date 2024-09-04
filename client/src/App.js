import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/login';
import Home from './Pages/home';
import Register from './Pages/register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/login' element = {<Login/>}/>
        <Route exact path='/register' element = {<Register/>}/>
        <Route exact path='/home' element = {<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
 