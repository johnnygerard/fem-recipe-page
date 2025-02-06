import H1 from "@/components/h1";
import { clsx } from "clsx";
import { memo } from "react";

const Recipe = () => {
  return (
    <div
      className={clsx(
        "tb:rounded-300 bg-white",
        "tb:w-[38.5rem] dt:w-[46rem] tb:p-500 px-400 pb-500",
      )}
    >
      <H1>Simple Omelette Recipe</H1>
    </div>
  );
};

export default memo(Recipe);
