import './App.css';

import Greeting from './Greeting';
import UserCard from './UserCard';
import TaskList from './TaskList';
import Counter from './Counter';
import RegistrationForm from './RegistrationForm';
import ColorPicker from './ColorPicker';
import WindowSizeTracker from './WindowSizeTracker';
import UserProfile from './UserProfile';
import ContactForm from './ContactForm';
import UserSettings from './UserSettings';

import Modal from './Modal';
import SimpleModalExample from './SimpleModalExample';
import ProgressBar from './ProgressBar';
import ProgressDashboard from './ProgressDashboard';
import TechnologyModal from './TechnologyModal';

import ProgressHeader from './ProgressHeader';
import QuickActions from './QuickActions';
import TechnologyCard from './TechnologyCard';
import TechnologyNotes from './TechnologyNotes';

import { useState, useEffect } from "react";

function App() {

  /* TECHNOLOGIES STATE */
  const [technologies, setTechnologies] = useState([
    { id: 1, title: 'React Components', description: 'Изучение базовых компонентов', status: 'not-started', notes: '' },
    { id: 2, title: 'React Props', description: 'Передача данных между компонентами', status: 'in-progress', notes: '' },
    { id: 3, title: 'React State', description: 'Работа с состоянием и ререндерингом', status: 'completed', notes: '' }
  ]);

  /* LOCAL STORAGE SAVE */
  useEffect(() => {
    localStorage.setItem("techTrackerData", JSON.stringify(technologies));
  }, [technologies]);

  /* LOCAL STORAGE LOAD */
  useEffect(() => {
    const saved = localStorage.getItem("techTrackerData");
    if (saved) setTechnologies(JSON.parse(saved));
  }, []);

  /* UPDATE STATUS */
  const changeStatus = (id, newStatus) => {
    setTechnologies(prev =>
      prev.map(t => (t.id === id ? { ...t, status: newStatus } : t))
    );
  };

  /* UPDATE NOTES */
  const updateTechnologyNotes = (techId, newNotes) => {
    setTechnologies(prev =>
      prev.map(t => (t.id === techId ? { ...t, notes: newNotes } : t))
    );
  };

  /* QUICK ACTIONS */
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

  /* SEARCH */
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTechnologies = technologies.filter(tech =>
    tech.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tech.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  /* RENDER */
  return (
    <div className="App">

      <Greeting />

      <UserCard
        name="Климаш Анна Сергеевна"
        role="Студент 2 курса РТУ МИРЭА, института ИПТИП, группы ЭФБО-14-24. Направление - Фуллстек разработка. Дисциплина: Фронтенд и бэкенд разработка."
        avatarUrl="https://i.pinimg.com/736x/63/27/66/6327660c6ea328e8f14912f0824b9279.jpg"
        isOnline={true}
      />

      <TaskList />
      <Counter />
      <RegistrationForm />
      <ColorPicker />

      <ProgressHeader technologies={technologies} />

      <QuickActions
        onCompleteAll={markAllCompleted}
        onResetAll={resetAll}
        onRandom={randomTech}
      />

      <WindowSizeTracker />
      <UserProfile />
      <ContactForm />
      <UserSettings />

      <SimpleModalExample />
      <ProgressDashboard />
      <TechnologyModal />

      {/* SEARCH FIELD */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Поиск технологий..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <span>Найдено: {filteredTechnologies.length}</span>
      </div>

      {/* TECHNOLOGY LIST */}
      <div className="technologies-grid">
        {filteredTechnologies.map(t => (
          <div className="tech-appear" key={t.id}>
            <TechnologyCard
              id={t.id}
              title={t.title}
              description={t.description}
              status={t.status}
              onStatusChange={changeStatus}
            />

            <TechnologyNotes
              notes={t.notes}
              techId={t.id}
              onNotesChange={updateTechnologyNotes}
            />
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
