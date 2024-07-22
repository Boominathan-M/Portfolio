import './App.css';
import HomePage from './HomePage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HomePage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
