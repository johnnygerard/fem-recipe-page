import H2 from "@/components/h2";
import UnorderedList from "@/components/unordered-list";
import { Fragment, memo } from "react";

const ingredients = [
  "2-3 large eggs",
  "Salt, to taste",
  "Pepper, to taste",
  "1 tablespoon of butter or oil",
  "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
];

const Ingredients = () => {
  return (
    <section>
      <H2>Ingredients</H2>
      <UnorderedList bulletColor="bg-brown-800">
        {ingredients.map((ingredient, index) => (
          <Fragment key={index}>{ingredient}</Fragment>
        ))}
      </UnorderedList>
    </section>
  );
};

export default memo(Ingredients);
