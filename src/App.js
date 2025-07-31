import './App.css';
import Header from './components/Header';
import Employees from './pages/Employees';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
   return (
    <div className="App">
      <BrowserRouter>
      <Header>
        <Routes>
        <Route path='/' element={<Employees/>}/>
        <Route path='/home' element={<Employees/>}/>
        </Routes>
      </Header>
      </BrowserRouter>
    </div>
  );
}

export default App;
