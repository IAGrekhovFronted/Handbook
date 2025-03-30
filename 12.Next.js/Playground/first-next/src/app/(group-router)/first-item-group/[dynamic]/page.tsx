// app/posts/[dynamic]/page.jsx
import React from "react";

type catProps = {
  params: Promise<string>;
};

const DynamicSlug: React.FC<catProps> = async ({ params }) => {
  const catFactsResponse = await fetch("https://catfact.ninja/fact");
  const catJson = await catFactsResponse.json();
  console.log(params);
  console.log(catJson);
  return (
    <div>
      <div>Динамический slug</div>
      <h2>Факт о котах:</h2>
      <p>{catJson?.fact}</p>
    </div>
  );
};
export default DynamicSlug;

export const generateStaticParams = async (): Promise<
  { dynamic: string }[]
> => {
  const slugs = ["test-static-generate1", "test-static-generate2"];
  return slugs.map((slug) => ({ dynamic: slug }));
};
