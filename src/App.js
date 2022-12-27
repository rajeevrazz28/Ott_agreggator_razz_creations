import { BrowserRouter as Router ,Routes, Route} from 'react-router-dom';
import Header from './components/header.js';
import Login from './components/login.js';
import Home from './components/Home';
import './App.css';
import Detail from './components/Detail.js';

function App() {
  return (
    <div className="App">
    <Router>
      
      <Header />
      <Routes>
      <Route exact path="/" element = {<Login/>}/>
      <Route exact path="/Home" element = {<Home/>}/>
      <Route exact path="/detail/:id" element = {<Detail/>}></Route>
          
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;