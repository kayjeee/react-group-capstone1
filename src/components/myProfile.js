import { useSelector } from "react-redux";
const MyProfile = () => {
    const {rockets} = useSelector(state => state.rockets)
    const reserveRocket = rockets.filter((rocket) => rocket.reserved);
    return (
        <section className="profile-section">
        <div className="missions">
          <h2>My Missions</h2>
          <ul className="profile-list">
              <li className="fw-bold">
                lists
              </li>
              <li className="fw-bold">
               items
              </li>
          </ul>
        </div>
        <div className="missions">
          <h2>My Rockets</h2>
          {reserveRocket == ''? <p>reserved rockets is currently empty</p> : <ul className="profile-list">
            {reserveRocket.map((rocket) => (
              <li key={rocket.id}>
                {rocket.name}
              </li>
            ))}
          </ul>}
        </div>
      </section>
    )
}
export default MyProfile;
