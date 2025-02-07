import omelet from "@/assets/omelet.jpg";
import Divider from "@/components/divider";
import H1 from "@/components/h1";
import Ingredients from "@/components/ingredients";
import Instructions from "@/components/instructions";
import RecipeTimings from "@/components/recipe-timings";
import { clsx } from "clsx";
import Image from "next/image";
import { memo } from "react";

const Recipe = () => {
  return (
    <div
      className={clsx(
        "tb:rounded-300 bg-white",
        "tb:w-[38.5rem] dt:w-[46rem] tb:p-500 pb-500",
      )}
    >
      <div className="tb:h-[18.75rem] relative h-[10.6875rem] w-full">
        <Image
          className="tb:rounded-150 object-cover"
          src={omelet}
          alt="A white plate topped with an omelet and greens"
          sizes="(min-width: 64em) 41rem, (min-width: 48em) 33.5rem, 100vw"
          fill
          placeholder="blur"
          priority
        />
      </div>
      <div className="max-tb:px-400 mt-[2.5rem]">
        <H1>Simple Omelette Recipe</H1>
        <div className="flex flex-col gap-400">
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          <RecipeTimings />
          <Ingredients />
          <Divider />
          <Instructions />
          <Divider />
        </div>
      </div>
    </div>
  );
};

export default memo(Recipe);
