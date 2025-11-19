function QuickActions({ onCompleteAll, onResetAll, onRandom }) {
    return (
      <div className="quick-actions">
        <button onClick={onCompleteAll}>Отметить все как выполненные</button>
        <button onClick={onResetAll}>Сбросить все статусы</button>
        <button onClick={onRandom}>Случайная технология</button>
      </div>
    );
  }
  
  export default QuickActions;
  