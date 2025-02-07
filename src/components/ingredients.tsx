import H2 from "@/components/h2";
import UnorderedList from "@/components/unordered-list";
import { Fragment, memo } from "react";

const Ingredients = () => {
  return (
    <section>
      <H2>Ingredients</H2>
      <UnorderedList bulletColor="bg-brown-800">
        {[
          "2-3 large eggs",
          "Salt, to taste",
          "Pepper, to taste",
          "1 tablespoon of butter or oil",
          "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
        ].map((ingredient) => (
          <Fragment key={ingredient}>{ingredient}</Fragment>
        ))}
      </UnorderedList>
    </section>
  );
};

export default memo(Ingredients);
