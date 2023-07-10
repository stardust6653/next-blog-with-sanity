import React from 'react';
import { BarLoader, ClockLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className=" flex justify-center items-center h-96">
      <ClockLoader size={100} color="rgb(31 41 55)" />
    </div>
  );
};

export default Loader;
