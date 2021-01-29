import React from 'react';
import JogCard from '../components/JogCard/JogCard'

const data = [
  {
    date: '20.12.2017',
    speed: 15,
    distance: 10,
    time: 60
  },
  {
    date: '20.12.2017',
    speed: 15,
    distance: 10,
    time: 60
  },
  {
    date: '20.12.2017',
    speed: 15,
    distance: 10,
    time: 60
  }
]

const JogsPage = () => {
  return (
    <div >
      {data.map((item, index) => {
        return (<JogCard
          style={index > 0 ? { marginTop: 80 } : null}
          date={item.date}
          speed={item.speed}
          distance={item.distance}
          time={item.time}
        />)
      })}
    </div>
  );
}

export default JogsPage;
