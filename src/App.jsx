import './App.css';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Appbar from './components/Appbar';
import Flags from './components/Flags';
import FlagDetail from './components/FlagDetail';

function App() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
    <BrowserRouter>
      <div
        className={`${darkMode ? 'dark' : 'light'} text-foreground bg-background h-screen overflow-y-scroll`}
      >
         <Appbar />
        <Routes>
          <Route path='/' element={<Flags />} />
          <Route path='/name/:name' element={<FlagDetail />} />
        </Routes>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
