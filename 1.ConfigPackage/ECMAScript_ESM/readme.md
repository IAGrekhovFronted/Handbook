**Особенности**:
- синтаксис "import" и "export"
- нужно указывать расширения файлов (from "./export.js");
- могут импортировать CJS-модули через стандартный синтаксис. 
- если нужно установить типы, специфичные для Node.js (npm install --save-dev @types/node), нужно добавить параметр "moduleResolution": "node" (tsconfid.json)

**Особенности версионности:**
- es2015: import и export;
- es2020: import.meta и export * as ns from "mod" в es2015;
- es2022: await для верхнего уровня.