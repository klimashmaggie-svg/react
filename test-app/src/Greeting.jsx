function Greeting() {
    const userName = "Anna";
    const currentTime = new Date().getHours();
    let timeOfDay;
    
    if (currentTime < 12) {
      timeOfDay = "Good morning";
    } else if (currentTime < 18) {
      timeOfDay = "Goor afternoon";
    } else {
      timeOfDay = "Good evening";
    }
  
    return (
      <div className="greeting-container">
        <h1 className="h1">{timeOfDay}, {userName}!</h1>
        <p>Рады видеть вас в нашем приложении.</p>
      </div>
    );
  }
  
  export default Greeting;