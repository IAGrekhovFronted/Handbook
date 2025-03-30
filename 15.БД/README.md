## Начало работы

1. Запуск локального сервера - указать путь к исполняемому файлу (у pgAdmin: pg_ctl.exe), указать путь к серверу
   "C:\Program Files\PostgreSQL\17\bin\pg_ctl.exe" restart -D "C:\Program Files\PostgreSQL\17\data"

## Базовые команды

### Выбрать все

```sql
SELECT * FROM authors
```

### Добавить данные

INSERT INTO author (name)
VALUES ('Хесус Паломино')
