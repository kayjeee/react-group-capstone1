import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../redux/features/missions/missions';
import './Missions.css';

export default function Missions() {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions.length) dispatch(fetchMissions());
  }, []);

  return (
    <section className="container">
      <h2>Missions</h2>
      <table className="missionTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th> {/* New column for active member and leave mission buttons */}
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.id}>
              <td>{mission.name}</td>
              <td className="font-sm">{mission.description}</td>
              <td className="mission-status-cell">
                {!mission.joined && (
                  <>
                    <span className="status-badge">Not a member</span>
                  </>
                )}
                {mission.joined && (
                  <>
                    <span className="status-badge joined">Active Member</span>
                  </>
                )}
              </td>
              <td className="mission-action-cell"> {/* New column for active member and leave mission buttons */}
                {!mission.joined && (
                  <button
                    type="button"
                    className="action-button join-button"
                    onClick={() => dispatch(joinMission(mission.id))}
                  >
                    Join Mission
                  </button>
                )}
                {mission.joined && (
                  <button
                    type="button"
                    className="action-button leave-button"
                    onClick={() => dispatch(leaveMission(mission.id))}
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
}
