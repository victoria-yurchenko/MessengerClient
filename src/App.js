import './App.css';
import AppRouter from './components/AppRouter';

function App() {

  const baseUrl = 'http://localhost:5187';

  return (
    <div className='row' style={{ backgroundColor: '#000814', height: '740px' }}>
      <div className="container">
        <nav className="menu-nav navbar">
          <div className="container-fluid">
            <a href='http://localhost:3000/chat' className="navbar-brand btn btn-outline-dark" style={{ backgroundColor: "#ffe" }}>Chat</a>
            <a href='http://localhost:3000/login' className="navbar-brand btn btn-outline-dark" style={{ backgroundColor: "#ffe" }}>Login</a>
            <a href='http://localhost:3000/register' className="navbar-brand btn btn-outline-dark" style={{ backgroundColor: "#ffe" }}>Register</a>
          </div>
        </nav>
        <AppRouter url={baseUrl} />
      </div>
    </div>

  );
}

export default App;
