import './App.css';

import Greeting from './Greeting';
import UserCard from './UserCard';
import TaskList from './TaskList';
import Counter from './Counter';
import RegistrationForm from './RegistrationForm';
import ColorPicker from './ColorPicker';

import ProgressHeader from './ProgressHeader';
import QuickActions from './QuickActions';
import TechnologyCard from './TechnologyCard'; // ← исправлено название файла

import { useState } from "react";

function App() {

  // ← ДОБАВЛЕНО: состояние technologies
  const [technologies, setTechnologies] = useState([
    { id: 1, title: "React Components", description: "Изучение базовых компонентов", status: "not-started" },
    { id: 2, title: "JSX Syntax", description: "Освоение синтаксиса JSX", status: "not-started" },
    { id: 3, title: "State Management", description: "Работа со состоянием", status: "not-started" }
  ]);

  // ← ДОБАВЛЕНО: функция изменения статуса
  const changeStatus = (id, newStatus) => {
    setTechnologies(prev =>
      prev.map(t => (t.id === id ? { ...t, status: newStatus } : t))
    );
  };
  // ← ДОБАВЛЕНО: функции для QuickActions
  const markAllCompleted = () => {
    setTechnologies(prev => prev.map(t => ({ ...t, status: "completed" })));
  };

  const resetAll = () => {
    setTechnologies(prev => prev.map(t => ({ ...t, status: "not-started" })));
  };

  const randomTech = () => {
    const item = technologies[Math.floor(Math.random() * technologies.length)];
    alert("Следующая технология: " + item.title);
  };

  return (
    <div className="App">

      <Greeting />

      <UserCard
        name="Klimash Anna"
        role="Студент ЭФБО-14-24"
        avatarUrl="https://i.pinimg.com/736x/63/27/66/6327660c6ea328e8f14912f0824b9279.jpg"
        isOnline={true}
      />
      <TaskList />
      <Counter />
      <RegistrationForm />
      <ColorPicker />
      {/* ← теперь technologies определён */}
      <ProgressHeader technologies={technologies} />
      <QuickActions
        onCompleteAll={markAllCompleted}
        onResetAll={resetAll}
        onRandom={randomTech}
      />
      {/* ← вывод всех карточек */}
      {technologies.map(t => (
        <TechnologyCard
          key={t.id}
          id={t.id}
          title={t.title}
          description={t.description}
          status={t.status}
          onStatusChange={changeStatus}
        />
      ))}

    </div>
  );
}

export default App;
