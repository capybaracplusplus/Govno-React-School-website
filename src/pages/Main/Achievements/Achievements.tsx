import React from 'react';
import './Achievements.css';

const Achievements: React.FC = () => {
  const items = ['Школа признана лучшей в городе', 'Ученик занял 1 место на олимпиаде', 'Сборная футбола школы заняла первое место на соревнованиях', 'я не знаю что писать'];

  return (
    <div className="achievements">
      <h2 className="achievements-title">Достижения</h2>
      {items.map((item, index) => (
        <div key={index} className="achievement-item">
          {item}
        </div>
      ))}
    </div>
  );
};

export default Achievements;
