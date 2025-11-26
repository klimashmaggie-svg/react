1. Убедись, что установлен Node.js
Скачай и установи LTS-версию:
https://nodejs.org/
Проверка версии:
node -v
npm -v

2. Открой терминал в папке проекта
Если проект лежит, например:
C:/Users/username/Desktop/my-react-app
то в терминале:
cd C:/Users/username/Desktop/my-react-app

3. Установи зависимости
Выполни:
npm install

4. Запуск приложения
npm start
После запуска откроется браузер по адресу:
http://localhost:3000
Если не открылся — просто введи этот адрес вручную.

Если появится ошибка "react-scripts не найден"
Сделай:
npm install react-scripts
и снова:
npm start

