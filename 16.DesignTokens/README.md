1. Создать токены в Figma. Общая схема:
   [Category]-[Type]-[Item]-[SubItem]-[State]

Category – категория токена (color, font);
Type – тип токена (text, background, border);
Item – элемент (button, table, input);
SubItem – тип элемента (primary, secondary);
State – состояние элемента (default, hover, active).

2. Добавить плагин "DesignTokens" в Figma. Экспортировать токены

3. Реализовать токены в проекте

   3.1. Через css/scss

   - Сгенерировать конфиг через Amason Style Dictionary
   - установить в проект style-dictionary:
     npm install style-dictionary --save-dev
   - запустить генерацию:
     npx style-dictionary build
   - использовать переменные

     3.2. Через Tailwind

   - просто подтянуть в файл конфига переменные из token.json
