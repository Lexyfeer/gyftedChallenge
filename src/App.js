import logo from './logo.svg';
import './App.css';
import { LoginRoutes, LogoutRoutes} from './Routes'

function App() {
  return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <a
            className='App-link'
            href='#'
            target='_blank'
            rel='noopener noreferrer'>
            Books
          </a>
          <i className='bi bi-cart3 carIcon'></i>
        </header>

        {/* {isAutenticated ? <LoginRoutes /> :  <LogoutRoutes /> } */}
        <LoginRoutes />
      </div>
  );
}

export default App;
