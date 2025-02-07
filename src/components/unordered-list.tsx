import { clsx } from "clsx";
import { memo, ReactNode } from "react";

type Props = Readonly<{
  bulletColor: string;
  children: ReactNode[];
}>;

const UnorderedList = ({ bulletColor, children }: Props) => {
  return (
    <ul className="flex flex-col gap-100">
      {children.map((children, index) => (
        <li className="relative pl-500" key={index}>
          <div
            className={clsx(
              bulletColor,
              "absolute top-1/2 left-100 h-1 w-1 -translate-y-1/2 rounded-full",
            )}
          />
          {children}
        </li>
      ))}
    </ul>
  );
};

export default memo(UnorderedList);
