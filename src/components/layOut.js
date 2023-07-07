import { Outlet } from 'react-router-dom';
import NavBar from './navBar';

const Layout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);
export default Layout;
