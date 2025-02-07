import UnorderedList from "@/components/unordered-list";
import { Fragment, memo } from "react";

const content = [
  { head: "Total", tail: "Approximately 10 minutes" },
  { head: "Preparation", tail: "5 minutes" },
  { head: "Cooking", tail: "5 minutes" },
];

const RecipeTimings = () => {
  return (
    <div className="rounded-150 bg-rose-50 p-300">
      <p className="mb-200 text-[1.25rem] leading-none font-semibold text-rose-800">
        Preparation time
      </p>
      <UnorderedList bulletColor="bg-rose-800">
        {content.map(({ head, tail }) => (
          <Fragment key={head}>
            <strong className="font-bold">{head}</strong>
            {`: ${tail}`}
          </Fragment>
        ))}
      </UnorderedList>
    </div>
  );
};

export default memo(RecipeTimings);
