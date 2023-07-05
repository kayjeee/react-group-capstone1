import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { updateReserve, removeReserve } from '../features/rockets/rocketSlice';
import './Rocket.css';

const RocketItem = ({ rocket }) => {
  const dispatch = useDispatch();
  return (
    <div className="rockets-item">
      <img className="rocket-image" src={rocket.flickr_images[0]} alt="rockets" />
      <div className="rockets-description">
        <h1 className="heading">{rocket.name}</h1>
        <p className="paragraph">
          {' '}
          {rocket.reserved && <span className="reserved">reserved</span>}
          {rocket.description}
        </p>
        {rocket.reserved ? (
          <button
            className="cancel-btn btn"
            onClick={() => {
              dispatch(removeReserve(rocket.id));
            }}
            type="button"
          >
            cancel reservation
          </button>
        ) : (
          <button
            className="rocket-btn btn"
            onClick={() => {
              dispatch(updateReserve(rocket.id));
            }}
            type="button"
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
};
RocketItem.propTypes = {

  rocket: PropTypes.string.isRequired,
};
export default RocketItem;
