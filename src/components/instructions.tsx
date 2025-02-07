import H2 from "@/components/h2";
import { memo } from "react";

const items = [
  {
    head: "Beat the eggs",
    tail: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
  },
  {
    head: "Heat the pan",
    tail: "Place a non-stick frying pan over medium heat and add butter or oil.",
  },
  {
    head: "Cook the omelette",
    tail: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
  },
  {
    head: "Add fillings (optional)",
    tail: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
  },
  {
    head: "Fold and serve",
    tail: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
  },
  {
    head: "Enjoy",
    tail: "Serve hot, with additional salt and pepper if needed.",
  },
];

const Instructions = () => {
  return (
    <section>
      <H2>Instructions</H2>
      <ol className="flex flex-col gap-100">
        {items.map(({ head, tail }, index) => (
          <li className="relative pl-500" key={index}>
            <span className="text-brown-800 absolute left-100 font-bold">
              {`${index + 1}.`}
            </span>
            <strong className="font-bold">{head}</strong>
            {`: ${tail}`}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default memo(Instructions);
