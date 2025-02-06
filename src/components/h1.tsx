import { memo } from "react";

type Props = Readonly<{
  children: string;
}>;

const H1 = ({ children }: Props) => {
  return (
    <h1 className="tb:text-[2.5rem] font-serif text-[2.25rem] leading-none text-stone-900">
      {children}
    </h1>
  );
};

export default memo(H1);
