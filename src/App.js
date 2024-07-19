import Group from './assets/img/icon/Group 23.png';
import './assets/style/App.scss';

// Dependencies
import { Routes, Route } from 'react-router-dom';

// Components
import DogsComponents from './components/DogsContructions'


function App() {
  return (
    <div className="App">

      <div className='App_construction'>
        <h1 className='App_construction-tittle'>En Construccion</h1>
        <DogsComponents/>
        </div>
      


      <Routes>
              <Route path="/" element={''} />
              <Route path="/about" element={'<AboutUs />'} />
              <Route path="/contact" element={''} />
              <Route path="/menu" element={''} />
      </Routes>
    </div>
  );
}

export default App;
