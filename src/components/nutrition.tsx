import H2 from "@/components/h2";
import { memo } from "react";

const nutritionData = [
  {
    name: "Calories",
    value: "277kcal",
  },
  {
    name: "Carbs",
    value: "0g",
  },
  {
    name: "Protein",
    value: "20g",
  },
  {
    name: "Fat",
    value: "22g",
  },
];

const Nutrition = () => {
  return (
    <section>
      <H2>Nutrition</H2>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table className="mt-300 w-full">
        <tbody className="divide-stone-150 divide-y-1">
          {nutritionData.map((data, index) => (
            <tr
              key={index}
              className="flex gap-200 px-400 py-150 first:pt-0 last:pb-0"
            >
              <td className="flex-1">{data.name}</td>
              <td className="text-brown-800 flex-1 font-bold">{data.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default memo(Nutrition);
