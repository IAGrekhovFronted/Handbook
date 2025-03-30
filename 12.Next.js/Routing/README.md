## Корень приложения

### Расположение - src/app

### Файлы:

1. page.tsx - возвращаемый компонент JSX.Element (ReactNode), при переходе на главную страницу (url "/").
2. layout.tsx - контейнер для рендера страниц
3. global.css - установка глобальных стилей в проекте

## Простые маршруты

### Создание:

1. Создать папку в 'src/app'
2. Создать page.tsx
3. Экспортировать компонент в page.tsx

```ts
// src/app/simple-page/page.tsx
const SimplePage = () => {
  return <div>Simple Page - Test Route</div>;
};
export default SimplePage;
```

## Группы маршрутов

### Применение:

1. Создать для группы общий layout
2. Логическая организация кода

### Создание:

1. Создать папку в 'src/app' по типу (test-group)
2. Поместить в нее папки для роутинга (например, first-item, second-item)
3. Создать page.tsx и экспортировать компонент в page.tsx

Полный путь до page.tsx: src/app/(test-group)/first-item/page.tsx
Урл - http://localhost:3000/first-item

## Динамические маршруты

_Один динамический сегмент:_

```
|-app
   |-static-slug
      |-[dynamic-slug]
            |-page.tsx
```

### Создание:

1. Создать папку в 'src/app', заключить ее в квадратные скобки, по типу [test-group]
2. Создать page.tsx и экспортировать компонент в page.tsx

### Получение динамических параметров:

```
const DynamicSlug = async ({params}: {
    params: Promise<{ dynamic: string }>
  }) => {
    const slug = await params
    console.log(slug)
    return (
        <div>
            <div>Динамический slug</div>
            <div>{slug.dynamic}</div>
        </div>
    )
}

export default DynamicSlug
```

## Универсальные сегменты:

```
|-app
   |-static-slug
      |-[...dynamic-slug]
            |-page.tsx
```

### Создание:

1. Создать папку в 'src/app', заключить ее в квадратные скобки с многоточием, по типу [...test-group]
2. Создать page.tsx и экспортировать компонент в page.tsx

### Получение динамических параметров:

```
const DynamicSlug = async ({params}: {
    params: Promise<{ 'dynamic-segment': string[] }>
  }) => {
    const slug = await params
    console.log(slug)
    return (
        <div>
            <div>Динамический slug</div>
            <div>{slug["dynamic-segment"].toLocaleString()}</div>
        </div>
    )
}

export default DynamicSlug
```

## Необязательные универсальные сегменты:

```
|-app
   |-static-slug
      |-[[...dynamic-slug]]
            |-page.tsx
```

Основное отличие от универсальных сегментов - соответствие корневому каталогу.

```
    app/shop/[[...slug]]/page.js соответствует /shop, /shop/slug и другим
    app/shop/[...slug]/page.js не соответствует /shop, но соответствует /shop/slug и другим
```

## Генерация статических параметров. Автоматическое кэширование

### Создание:

1. Добавить функцию generateStaticParams, которая запрашивает данные.

```
export const generateStaticParams = async (): Promise<
  { dynamic: string }[]
> => {
  const slugs = ["test-static-generate1", "test-static-generate2"];
  return slugs.map((slug) => ({ dynamic: slug }));
};
```

2. Полученные данные автоматически закешируются в продовом режиме. Поэтому при повторном обращении к странице, будет уже прогретой. Но данные не обновятся.

```
type catProps = {
  params: Promise<string>;
};

const DynamicSlug: React.FC<catProps> = async ({ params }) => {
  const catFactsResponse = await fetch("https://catfact.ninja/fact");
  const catJson = await catFactsResponse.json();
  return (
    <div>
      <div>Динамический slug</div>
      <h2>Факт о котах:</h2>
      <p>{catJson?.fact}</p>
    </div>
  );
};
export default DynamicSlug;
```

3. Время жизни кеша generateStaticParams неограничено - страница включается в бандл при билде. Поэтому использовать только для статичных данных

## Неучитываемые маршруты

### Создание:

1. Добавить "\_" к названию папки. Например, "\_foldername"
