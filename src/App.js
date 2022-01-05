import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import Footer from './pages/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import Navigation from "../src/pages/Home/Navigation"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Route>
            <Navigation></Navigation>
          </Route>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>

          <Route>
            <Footer></Footer>
          </Route>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
