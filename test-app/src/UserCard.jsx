function UserCard({ name, role, avatarUrl, isOnline }) {
    return (
      <div className="user-card">
        <div className="avatar-section">

          <div className="me">
          <img className="me" src={avatarUrl} alt={`Аватар ${name}`} />
          </div>

          <p>Статус: {isOnline? 'online':'offline'}</p>
        </div>
        <div className="user-info">
          <h3 className="h3">{name}</h3>
          <p className="role">{role}</p>
        </div>
      </div>
    );
  }
  
  export default UserCard;