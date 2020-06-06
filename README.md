# Messenger

[![Maintainability](https://api.codeclimate.com/v1/badges/7456cf5aaa0a960c3b5f/maintainability)](https://codeclimate.com/github/youngandinnocent/messenger/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7456cf5aaa0a960c3b5f/test_coverage)](https://codeclimate.com/github/youngandinnocent/messenger/test_coverage)
[![Build Status](https://travis-ci.org/youngandinnocent/messenger.svg?branch=master)](https://travis-ci.org/youngandinnocent/messenger)

Instant messaging app

# Used by

* [Webpack]
* [Babel]
* [React]
* [Redux]
* ... and other awesome projects

# Guides

* [Введение](#intro)
* [Установка](#setting)
* [Описание проекта](#description)
* [Настройка среды разработки](#environment)
    * [Webpack](#webpack)
    * [Babel](#babel)
* [Приложение](#app)
    * [Архитектура](#architecture)
    * [Контейнеры](#containers)
    * [Компоненты](#components)
    * [npm-модули](#npmmodules)
* [Линтинг и форматирование кода](#lint)
* [Тестирование](#test)
* [Progressive Web App](#pwa)

# <a name="intro"></a>Введение

Messenger — приложение для обмена мгновенными сообщениями

### Видеообзор
Кликните на изображение ниже для воспроизведения видео

[![Watch the video](https://img.youtube.com/vi/9_o9vU3l5CA/maxresdefault.jpg)](https://www.youtube.com/watch?v=9_o9vU3l5CA)

### Необходимые инструменты разработки
* [Node.js] - среда разработки приложения, исполняющая JS
* Инструменты для сборки проекта:
    * менеджер пакетов [npm] (или [Yarn])
    * сборщик модулей Webpack - для написания модульного кода
    * компилятор Babel - чтобы писать современный код, который будет работать и в старых браузерах

# <a name="setting"></a>Установка
Склонируйте репозиторий на локальный компьютер
```sh
$ git clone https://github.com/youngandinnocent/messenger.git
```
Разверните среду разработки проекта (установить все зависимости)
```sh
$ npm i
```
Запустите режим сборки
```sh
// стандартная разработка
$ npm run dev

// разработка livereload
$ npm run dev-s

// продакшен
$ npm run build
```

# <a name="description"></a>Описание проекта
Тип приложения: система мгновенного обмена сообщениями, мессенджер

Технологии: React-Redux, SPA, PWA

Принцип работы приложения:
* index.html - оболочка для всех страниц
* при первом входе приложение подгружается
* работает в браузере пользователя как клиент, который отрисовывает все страницы и изменения, не ходя за версткой на сервер
* заимодействует с сервером по API, получая данные в JSON
* может работать без подключения к сети (offline first)
* отправляет push-уведомления

Принципы проектирования:
* организация файловой структуры проекта по функциональности и методологии Atomic Design
* декларативный код
* flux-архитектура разделения логики, данных и пользовательского интерфейса
* однонаправленный поток данных
* глобальное хранилище на верхнем уровне с доступом к состоянию для компонентов (Redux)
* принцип единственной ответственности (SRP) при разработке компонентов
* паттерн Container/Component в разделении ответственности между разными компонентами
* stateless-компонент должен быть чистой функцией
* типобезопасность данных через использование propTypes
* модульное тестирование
* отладка с React DevTools и Redux DevTools

# <a name="environment"></a>Настройка среды разработки
npm-модули, предназначенные для инструментов разработки, установлены в зависимости разработки (devDependencies)

### <a name="webpack"></a>Webpack
Сборщик модулей Webpack - инструмент, позволяющий скомпилировать JavaScript-модули в единый JS-файл:
* собрать воедино ресурсы (согласно импортам)
* транспилировать JS нового поколения в JS старого поколения (babel)
* запустить webpack-dev-server (в нём встроен локальный сервер) для разработки в режиме livereload (“живая перезагрузка браузера”))
* выполнить Tree Shaking - метод оптимизации библиотек путем удаления кода из окончательного файла, который фактически не используется

npm-модули для работы с webpack:
* webpack - сам бандлер
* webpack-cli - набор команд для конфигурации webpack по нужным сценариям исполнения
* webpack-dev-server - встроенный локальный сервер для разработки в режиме livereload

Режимы сборки (заданы через скрипты в package.json):
* webpack --mode development - стандартная разработка (порт 8080)
* webpack-dev-server --mode development --port 3000 - разработка в режиме livereload (порт 3000)
* webpack --mode production - режим продакшен

Настройка webpack выполнена в файле webpack.config.js в корне проекта:
* Точка входа ./src/index.js - путь к файлу, с которого начинается сборка проекта
* Вывод ./dist/bundle.js - путь к файлу, в который собирается проект
* Загрузчики модулей - инструменты webpack, которые определенным образом преобразуют исходный код модулей:
    * для скриптов:
        * babel-loader позволяет webpack транспилировать новый код js и jsx-файлов в старый эквивалент
    * npm-модули:
        * babel-loader

    * для стилей:
        * sass-loader загружает scss-файлы и компилирует их в CSS
        * css-loader интерпретирует директиву import 'style.css' в CSS
        * MiniCssExtractPlugin.loader минифицирует файл
        * style-loader внедряет итоговый CSS в DOM, используя тег style
    * npm-модули:
        * css-loader
        * mini-css-extract-plugin
        * sass-loader
        * style-loader

* Плагины - программные модули, расширяющие возможности webpack:
    * HTMLWebpackPlugin - автоматически создает HTML-файл с подключенным js-скриптом
        * npm-модули:
        * html-webpack-plugin
    
    * MiniCssExtractPlugin - сжимает CSS-файлы
        * npm-модули:
        * mini-css-extract-plugin

    * CopyWebpackPlugin - копирует файлы и директории в сборку
        * npm-модули:
        * copy-webpack-plugin

* devtool - свойство, которое управляет генерацией source map (содержит информацию о том, как транспилировать код обратно в исходный):
    * eval-source-map - одна из лучших опций для разработки: первоначально медленный, но обеспечивает быструю скорость восстановления и возвращает исходный код.

* devServer - свойство, которое регулирует поведение встроенного сервера
    * historyApiFallback: true - сервер отвечает главной страницей на все запросы по незнакомым URL

### <a name="babel"></a>Babel

# <a name="app"></a>Приложение
### <a name="architecture"></a>Архитектура
### <a name="containers"></a>Контейнеры
### <a name="components"></a>Компоненты
### <a name="npmmodules"></a>npm-модули

# <a name="lint"></a>Линтинг и форматирование кода

# <a name="test"></a>Тестирование

# <a name="pwa"></a>Progressive Web App



[Webpack]: <https://webpack.js.org>
[Babel]: <https://babeljs.io>
[React]: <https://reactjs.org>
[Redux]: <https://redux.js.org>
[Node.js]: <https://nodejs.org/en/>
[npm]: <https://www.npmjs.com>
[Yarn]: <https://yarnpkg.com>