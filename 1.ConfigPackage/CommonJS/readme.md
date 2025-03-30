**Особенности**:
- синтаксис "require" и "exports";
- если нужно импортировать ESM-модуль, то это нельзя сделать синхронно через require(). См. ниже.

**Импорт ESM-модуля в CJS-модуль:**
- в проекте с "type": "commonjs" (package.json) можно создать файл с расширением .mjs/.mts (ESM-модуль);
- экспорт стандартный;
- для импорта необходимо использовать асинхронную функцию import(). Например:
        (async () => {
            const { esmMessage } = await import('./esm.mjs');
            console.log('esmMessage', esmMessage);
        })();

**Импорт файла .env:**
1. Установка пакета (npm install dotenv)
2. Стандартный импорт через require 
        const dotenv = require('dotenv')
3. Подгрузка переменных окружения из .env
        dotenv.config();
4. Использование данных 
        const dbToken = process.env.TOKEN;