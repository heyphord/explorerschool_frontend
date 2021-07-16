import logo from './logo.svg';
import './App.css';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import RootLayout from './layouts/RootLayourt';


const hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist} >
     <RootLayout/>
    </Router>
  );
}

export default App;
