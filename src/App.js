import './App.css';
import { Route, Routes } from 'react-router-dom';
import Missions from './pages/Missions';
import MyProfile from './pages/Profile';
import Rockets from './pages/Rockets';
import Layout from './components/layOut';
import NotMatch from './components/noMatch';

function App() {
  return (
    <div className="App full-screen"> {/* Add the "full-screen" class */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Rockets />} />
          <Route path="missions" element={<Missions />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
