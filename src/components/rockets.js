import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../features/rockets/rocketSlice';
import RocketItem from './RocketItem';

const Rockets = () => {
  const { rockets, isLoading, error } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rockets.length]);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong...</p>;
  }
  return (
    <section className="container flex">
      {rockets.map((rocket) => <RocketItem rocket={rocket} key={rocket.id} />)}
    </section>
  );
};
export default Rockets;
