## Полезные ссылки

1. Сайт с образами - hub.docker.com

## Команды

1. Установка среды исполнения. Должен быть запущен Docker desktop
   docker pull [...run-time enviroment]
   Например, docker pull node.

2. Посмотреть имеющиеся образы на компьютере
   docker images

3. Посмотреть список всех контейнеров (без --а показывает только запущенные контейнеры)
   docker ps --a

4. Запуск образа (images)
   docker run [... id images or repository name]

5. Запустить интерактивну среду разработки контейнера (выйти ".exit")
   docker run -it node

6. Удалить контейнер
   docker rm [... id containers]
   Например, docker rm asdasdasd asdasdasda (удалить 2 контейнера)

7. Удалить все контейнеры
   docker container prune

8. Создание образа
   docker build [... path]

9. Остановить контейнер
   docker stop [... name or id containers]
