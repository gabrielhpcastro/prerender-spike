import { Helmet } from 'react-helmet';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta property="og:title" content="My Title" />
        <meta property="og:description" content="My Description" />
        <meta property="og:image" content="https://example.com/image.jpg" />
        <meta property="og:url" content={window.location.href} />
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
