import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import AddNewProduct from './components/Dashboard/AddNewProduct/AddNewProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/addNewProduct">
            <AddNewProduct />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
