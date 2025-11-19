import "./TechnologyCard.css";

function TechnologyCard({ id, title, description, status, onStatusChange }) {
  const getStatusClass = () => {
    switch (status) {
      case "not-started": return "status-not-started";
      case "in-progress": return "status-in-progress";
      case "completed": return "status-completed";
      default: return "";
    }
  };


  const handleClick = () => {
    let newStatus;
    if (status === "not-started") newStatus = "in-progress";
    else if (status === "in-progress") newStatus = "completed";
    else newStatus = "not-started";

    onStatusChange(id, newStatus);
  };

  return (
    <div className={`technology-card ${getStatusClass()}`} onClick={handleClick}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="status-label">Статус: {status}</p>
    </div>
  );
}

export default TechnologyCard;
