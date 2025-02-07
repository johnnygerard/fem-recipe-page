import { memo } from "react";

type Props = Readonly<{
  children: string;
}>;

const H2 = ({ children }: Props) => {
  return (
    <h2 className="text-brown-800 mb-300 font-serif text-[1.75rem] leading-none">
      {children}
    </h2>
  );
};

export default memo(H2);
