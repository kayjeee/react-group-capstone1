import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../features/missions/missionsSlice';
import './missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missions);
  useEffect(() => {
    if (!missions.length) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions.length]);
  return (
    <section className="container">
      <table className="missionTable">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td className="font-sm">{mission.description}</td>
              <td className="mission-status-cell">
                {!mission.reserved && (
                  <>
                    <span className="status-badge">Not a member</span>
                  </>
                )}
                {mission.reserved && (
                  <>
                    <span className="status-badge joined">Active Member</span>
                  </>
                )}
              </td>
              <td className="mission-action-cell">
                {!mission.reserved && (
                  <button
                    type="button"
                    className="action-button join-button"
                    onClick={() => dispatch(joinMission(mission.mission_id))}
                    aria-label={`Join Mission ${mission.name}`}
                  >
                    Join Mission
                  </button>
                )}
                {mission.reserved && (
                  <button
                    type="button"
                    className="action-button leave-button"
                    onClick={() => dispatch(leaveMission(mission.mission_id))}
                    aria-label={`Leave Mission ${mission.name}`}
                  >
                    Leave Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
export default Missions;
