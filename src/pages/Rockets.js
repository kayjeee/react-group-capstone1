import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRocketsFromServer, bookRocket, cancelBooking } from '../redux/features/rockets/rockets';
import './Rockets.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    // Fetch rockets from the server only if the rockets array is empty
    if (!rockets.length) {
      dispatch(fetchRocketsFromServer());
    }
  }, []);

  return (
    <div className="rocket">
      {loading ? (
        <div className="loader"></div> // Display loader while rockets are being fetched
      ) : (
        rockets.map((rocket) => {
          const {
            id, name, description, images, reserved,
          } = rocket;

          return (
            <div key={id} className="eachRocket container">
              <div className="rocket-top"></div> {/* Additional div on top of each container */}
              <img src={images} alt="rocket" className="rocket-image" />
              <div className="rocket-info">
                <h3>{name}</h3>
                <div className="reserve-content"> {/* Wrap text and button in a div */}
                  <p className="reserve-sect">
                    {reserved && (
                      <span className="rev-word">
                        Reserved
                      </span>
                    )}
                    {' '}
                    {description}
                  </p>
                  {reserved ? (
                    <button type="button" className="cancel-book" onClick={() => dispatch(cancelBooking(id))}>
                      Cancel Reservation
                    </button>
                  ) : (
                    <button className="reserveBtn" type="button" onClick={() => dispatch(bookRocket(id))}>
                      Reserve Rocket
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Rockets;
