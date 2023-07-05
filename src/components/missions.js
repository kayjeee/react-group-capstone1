import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../features/missions/missionSlice';
import './Missions.css';

export default function Missions() {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions.length) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions.length]);

  return (
    <section className="container">
      <h2>Missions</h2>
      <table className="missionTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
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
              <td className="mission-action-cell">
                {!mission.joined && (
                  <button
                    type="button"
                    className="action-button join-button"
                    onClick={() => dispatch(joinMission(mission.id))}
                    aria-label={`Join Mission ${mission.name}`}
                  >
                    Join Mission
                  </button>
                )}
                {mission.joined && (
                  <button
                    type="button"
                    className="action-button leave-button"
                    onClick={() => dispatch(leaveMission(mission.id))}
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
}
