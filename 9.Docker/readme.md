## Полезные ссылки

1. Сайт с образами - hub.docker.com

## Команды

1.  Установка среды исполнения. Должен быть запущен Docker desktop
    docker pull [...run-time enviroment]
    Например, docker pull node.

2.  Посмотреть имеющиеся образы на компьютере
    docker images

3.  Посмотреть список всех контейнеров (без --а показывает только запущенные контейнеры)
    docker ps --a

4.  Создание нового экземпляра и запуск образа (images)
    docker run [... id images or repository name]

         Параметры:
         -p 80:3000  - первое значение это порт, на котором будет запущено приложение. Второй параметр - порт, который будет маппится из исполняемых файлов
         -d  - не запускать консоль run-time enviroment
         --name  - задать имя образа
         --rm  - удалить контейнер после остановки
         -e  - задать переменную среды
         --env-file ./config/.env  - запустить с переменной среды из .env файлаы
         -v  - указание определенного volume (-v logs:/data)

    Запуск существующего контейнера:
    docker start [... id containers ]

5.  Запустить интерактивну среду разработки контейнера (выйти ".exit")
    docker run -it node

6.  Удалить контейнер
    docker rm [... id containers]
    Например, docker rm asdasdasd asdasdasda (удалить 2 контейнера)

7.  Удалить все контейнеры
    docker container prune

8.  Создание образа
    docker build [... path]
    -t - задать наименование репозитория, чтобы можно было обращаться к образу
    -t [... name image]:[... tag] - задать имя и тэг образа

9.  Остановить контейнер
    docker stop [... name or id containers]

10. Посмотреть логи в контейнере
    docker logs [... id containers]

11. Подключиться к контейнеру
    docker attach [... id containers]
