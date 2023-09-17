# ToDo-dexie
[![Netlify Status](https://api.netlify.com/api/v1/badges/fbd87a26-512f-4805-8242-29b4f8bed02c/deploy-status)](https://main--chimerical-nasturtium-a69d0c.netlify.app/)

## [Netlify (DEPLOY)](https://main--chimerical-nasturtium-a69d0c.netlify.app/)

стек: React + TypeScript + Vite + dexie.js (библиотека для работы с IndexedDB)

### Установка и запуск
- Скопировать репозиторий  
```shell 
git clone https://github.com/viacheslavorlov/todo-dexie.git
```
- Установить зависимости
```shell 
npm i
```
- Запустить проект
```shell 
npm run dev
```

### Особенности приложения
- Приложение имеет адаптивный дизайн
- Приложение написано с использованием IndexedDB. Так что все данные которые вы вносите в него будут сохраняться в браузере.

### Инструкция
- Для внесения новой задачи наберите в строке инпута ('Whats need to be done?') название задачи, затем нажмите Enter или зелефную кнопку Create.
- Задачи отображаются списком. Для фильтрации задач нажимайте кнопки All, Active, Complited в низу списка задач для отображения всех, активных или выполненных задач соответственно.
- Для удаления всех выполненных задач в правом нижнем углу имеется кнопка Clear Complited

### Предложения по улучшению
Можно сделать из этого приложения PWA для минимализации взаимодействия с сетью
