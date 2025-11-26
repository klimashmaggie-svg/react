// TechnologyModal.jsx
import Modal from "./Modal";

function TechnologyModal({ 
  isOpen, 
  onClose, 
  technology, 
  onStatusChange, 
  onNotesChange 
}) {
  if (!technology) return null;

  const statuses = [
    { value: "not-started", label: "Не начато" },
    { value: "in-progress", label: "В процессе" },
    { value: "completed", label: "Завершено" },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={technology.title}>
      <div className="technology-modal">

        {/* Описание */}
        <p><strong>Описание:</strong> {technology.description}</p>

        {/* Категория */}
        <p><strong>Категория:</strong> {technology.category}</p>

        {/* Статус */}
        <div className="modal-section">
          <label><strong>Статус:</strong></label>
          <select
            value={technology.status}
            onChange={(e) => onStatusChange(technology.id, e.target.value)}
          >
            {statuses.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        {/* Заметки */}
        <div className="modal-section">
          <label><strong>Заметки:</strong></label>
          <textarea
            rows="4"
            value={technology.notes}
            onChange={(e) => onNotesChange(technology.id, e.target.value)}
            placeholder="Ваши заметки по технологии..."
          />
        </div>

        {/* Кнопка закрытия */}
        <button 
          className="btn btn-primary" 
          onClick={onClose}
          style={{ marginTop: "15px" }}
        >
          Закрыть
        </button>
      </div>
    </Modal>
  );
}

export default TechnologyModal;
