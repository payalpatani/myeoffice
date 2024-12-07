
import './App.css';
import Header from './Componet/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "font-awesome/css/font-awesome.min.css";
import Home from './Componet/Home';
import Shadowboxs from './Componet/Shadowboxs';



function App() {
  return (
    <div className="App">
     <Header/>
     <Home/>
     <Shadowboxs/>
    </div>
  );
}

export default App;
