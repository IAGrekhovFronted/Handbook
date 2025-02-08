**Особенности**:
- синтаксис "require" и "exports";
- если нужно импортировать ESM-модуль, то это нельзя сделать синхронно через require(). См. ниже.

**Импорт ESM-модуля в CJS-модуль**:
- в проекте с "type": "commonjs" (package.json) можно создать файл с расширением .mjs/.mts (ESM-модуль);
- экспорт стандартный;
- для импорта необходимо использовать асинхронную функцию import(). Например:
        (async () => {
            const { esmMessage } = await import('./esm.mjs');
            console.log('esmMessage', esmMessage);
        })();