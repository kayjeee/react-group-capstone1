import { NavLink } from 'react-router-dom';
import planet from '../planet.png';

const links = [
  { path: '/', text: 'Rockets' },
  { path: 'missions', text: 'Missions' },
  { path: 'myprofile', text: 'My Profile' },
];
const NavBar = () => (
  <header className="flex">
    <div className="logo-details flex">
      <NavLink to={links[0].path}><img className="img-logo" src={planet} alt="planets" /></NavLink>
      <h2>Space Travelers&rsquo; Hub</h2>
    </div>
    <ul className="list-container flex">
      {links.map((link) => (
        <li key={link.text}>
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  </header>
);
export default NavBar;
