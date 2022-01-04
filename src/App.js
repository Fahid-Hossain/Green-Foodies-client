import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import Footer from './pages/Footer/Footer';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      {/* <AuthProvider> */}
      <Home></Home>
      <Footer></Footer>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
