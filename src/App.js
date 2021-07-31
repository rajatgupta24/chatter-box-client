import pic from './assets/pic.svg';
import Navbar from './components/Navbar/Navbar';
import { useAuth0 } from '@auth0/auth0-react';

import styles from "./styles.module.css"

function App() {
  const {isAuthenticated, user} = useAuth0();

  return (
    <div className={styles.app}>
      <Navbar/>
      <header className="App-header">
        {isAuthenticated ? JSON.stringify(user) : (
          <img src={pic}  alt="logo" />
        )}
      </header>
    </div>
  );
}

export default App;
