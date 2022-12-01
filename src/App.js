import './App.css';
import Header from './components/Header';
import DrawPanel from './components/DrawPanel';
import TokenPanel from './components/TokenPanel';
import SealPanel from './components/SealPanel';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="panel">
        <DrawPanel />
      </div>
      <div className="panel">
        <TokenPanel />
      </div>
      <div className="panel">
        <SealPanel />
      </div>
    </div>
  );
}

export default App;
