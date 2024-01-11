import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.scss'
import CoinController from './controllers/CoinController';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailController from './controllers/DetailController';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CoinController />} />
        <Route path='/:id' element={<DetailController />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
