import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Rockets from './components/rockets';
import Missions from './components/Missions';
import MyProfile from './components/myProfile';
import NotMatch from './components/noMatch';
import Layout from './components/layOut';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Rockets />} />
        <Route path="missions" element={<Missions />} />
        <Route path="myprofile" element={<MyProfile />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
