import { useState, useEffect } from 'react';

function WindowSizeTracker() {
  // Состояние для хранения размеров окна
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // useEffect для отслеживания изменения размера окна
  useEffect(() => {
    // Функция-обработчик изменения размера
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Добавляем слушатель события resize
    window.addEventListener('resize', handleResize);
    
    // Функция очистки - удаляем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Пустой массив зависимостей = эффект только при монтировании

  // Определяем тип экрана based on ширины
  const getScreenType = () => {
    if (windowSize.width < 768) return 'мобильный';
    if (windowSize.width < 1024) return 'планшет';
    return 'десктоп';
  };

  return (
    <div className="window-tracker">
      <h2 className='width-window'>Отслеживание размера окна</h2>
      <div className="size-info">
        <p className='size-w'>Ширина: <strong>{windowSize.width}px</strong></p>
        <p className='size-h'>Высота: <strong>{windowSize.height}px</strong></p>
        <p className='size-t'>Тип экрана: <strong>{getScreenType()}</strong></p>
      </div>
    </div>
  );
}

export default WindowSizeTracker;