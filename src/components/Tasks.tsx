import React from 'react';
import OngoingService from './OngoingService';

const Tasks = () => {
  return (
    <div className='grid grid-cols-3 gap-4'>
      {[1, 2, 2, 3, 3, 3, 33, 3, 33, 3, 3, 3, 3, 3, 33, 3, 3, 33, 33, 3, 3, 3, 3].map((t, i) => (
        <OngoingService key={i} />
      ))}
    </div>
  );
};

export default Tasks;
