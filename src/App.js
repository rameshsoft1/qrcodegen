import logo from './logo.svg';
import './App.css';

import QRcodeGen from './QRcodeGen'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Siva Cards
      </header>
      
       <body className='App-Body'>
       <QRcodeGen/>
       </body>
       
    </div>
  );
}

export default App;
