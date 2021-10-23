import React, { useState } from 'react';
import './index.scss';
import './color.scss';

type time = {
  name: string
  title: string
  duration: number
  lastDuration: number
  image: any
}

const User = 'Jeremy Robson';
const TimeTab = ['Daily', 'Weekly', 'Monthly'];
const data : time[][] = [
  [{
    name: 'work',
    title: 'Work',
    duration: 32,
    lastDuration: 36,
    image: require('../../../../images/icon-work.svg'),
  },
  {
    name: 'exercise',
    title: 'Exercise',
    duration: 4,
    lastDuration: 5,
    image: require('../../../../images/icon-exercise.svg'),
  }],
  [{
    name: 'play',
    title: 'Play',
    duration: 10,
    lastDuration: 8,
    image: require('../../../../images/icon-play.svg'),
  },
  {
    name: 'social',
    title: 'Social',
    duration: 5,
    lastDuration: 10,
    image: require('../../../../images/icon-social.svg'),
  }],
  [{
    name: 'study',
    title: 'Study',
    duration: 4,
    lastDuration: 7,
    image: require('../../../../images/icon-study.svg'),
  },
  {
    name: 'self-care',
    title: 'Self Care',
    duration: 2,
    lastDuration: 2,
    image: require('../../../../images/icon-self-care.svg'),
  }],
];

export default function TimeTrackDashboard() {
  const [timeTab, setTimeTab] = useState('Weekly');

  return (

    <div className="f-db f-db-bg-very-dark-blue">
      <div className="f-db-container">
        <div className="relative f-db-container-item">
          <div className="f-db-bg-purple f-db-rounded f-db-container-user absolute top-0 left-0 right-0 z-1">
            <img className="f-db-container-user-avatar" src={require('../../../../images/image-jeremy.png').default} alt="user" />
            <div className="f-db-container-user-pad">
              <p className="font-light text-xs f-db-text-pale-blue">Report for</p>
              <p className="font-light f-db-container-user-name">{User}</p>
            </div>
          </div>
          <div className="h-full f-db-bg-dark-blue f-db-rounded relative f-db-container-time-pad">
            <div className="absolute f-db-container-time-pad-info flex ">
              {TimeTab.map((item) => (
                <button
                  type="button"
                  onClick={() => setTimeTab(item)}
                  className={`font-light f-db-container-time-pad-info-item pointer-cursor flex text-base ${item === timeTab ? 'f-db-text-white' : 'f-db-text-desaturated-blue'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
        {data.map((item) => (
          <div className="f-db-container-projects">
            {item.map((timeItem: time) => (
              <div className={`f-db-bg-${timeItem.name} f-db-rounded relative f-db-container-projects-item`}>
                <div className="relative">
                  <img className="absolute top-0 right-0" src={timeItem.image} alt={timeItem.name} />
                </div>
                <div className="f-db-bg-dark-blue absolute bottom-0 left-0 right-0 f-db-rounded f-db-container-pad">
                  <div className="flex justify-between items-center">
                    <p>{timeItem.title}</p>
                    <img className="pointer-cursor" src={require('../../../../images/icon-ellipsis.svg')} alt="ellipsis" />
                  </div>
                  <div className="f-db-container-pad-info">
                    <p className="font-light f-db-container-pad-info-main">{`${timeItem.duration}hrs`}</p>
                    <p className="font-light f-db-text-desaturated-blue text-base f-db-container-pad-info-last">{`Last Week - ${timeItem.lastDuration}hrs`}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
