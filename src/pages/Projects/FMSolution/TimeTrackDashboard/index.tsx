import React, { useState } from 'react';
import './index.scss';
import './color.scss';

type time = {
  title: string
  duration: number
  lastDuration: number
}

const User = 'Jeremy Robson';
const TimeTab = ['Daily', 'Weekly', 'Monthly'];
const data : time[][] = [
  [{
    title: 'Work',
    duration: 32,
    lastDuration: 36,
  },
  {
    title: 'Exercise',
    duration: 4,
    lastDuration: 5,
  }],
  [{
    title: 'Play',
    duration: 10,
    lastDuration: 8,
  },
  {
    title: 'Social',
    duration: 5,
    lastDuration: 10,
  }],
  [{
    title: 'Study',
    duration: 4,
    lastDuration: 7,
  },
  {
    title: 'Self Care',
    duration: 2,
    lastDuration: 2,
  }],
];

export default function TimeTrackDashboard() {
  const [timeTab, setTimeTab] = useState('Weekly');

  return (
    <div className="f-db f-db-bg-dark-blue flex justify-center items-center">
      <div className="f-db-container grid grid-cols-4 gap-2">
        <div className="h-full">
          <div>{User}</div>
          <div>
            {TimeTab.map((item) => <p>{item}</p>)}

          </div>

        </div>
        {data.map((item) => <div className="grid grid-rows-2 gap-2">{item.map((timeItem: time) => <div>{timeItem.title}</div>)}</div>)}

      </div>

    </div>
  );
}
