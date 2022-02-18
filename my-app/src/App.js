import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Tryouts from './components/Tryouts';
import Team from './components/Team';
import Signup from './components/Signup';
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Top from './components/Top';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
    
    <Navbar/>
    <Top />
    <Switch>
    
    <Route exact path ="/" component ={Home}/>
    <Route path ="/tryouts" component ={Tryouts}/>
    <Route path ='/team' component ={Team}/>
    <Route path ='/signup' component ={Signup}/>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
