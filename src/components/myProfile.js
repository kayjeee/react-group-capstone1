import { useSelector } from 'react-redux';
import './profile.css';

const MyProfile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const reserveRocket = rockets.filter((rocket) => rocket.reserved);
  const { missions } = useSelector((state) => state.missions);
  const updateMissions = missions.filter((mission) => mission.reserved);
  return (
    <section className="profile-section">
      <div className="missions">
        <h2>My Missions</h2>
        {updateMissions === '' ? <p>reserved missions is currently empty</p> : (
          <ul className="profile-list">
            {updateMissions.map((mission) => (
              <li key={mission.mission_id}>
                {mission.mission_name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="missions">
        <h2>My Rockets</h2>
        {reserveRocket === '' ? <p>reserved rockets is currently empty</p> : (
          <ul className="profile-list">
            {reserveRocket.map((rocket) => (
              <li key={rocket.id}>
                {rocket.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
export default MyProfile;
