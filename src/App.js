import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import Footer from './pages/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Home></Home>
      <Login></Login>
      <Register></Register>
      <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
