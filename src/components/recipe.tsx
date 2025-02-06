import omelet from "@/assets/omelet.jpg";
import H1 from "@/components/h1";
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
      <H1>Simple Omelette Recipe</H1>
    </div>
  );
};

export default memo(Recipe);
