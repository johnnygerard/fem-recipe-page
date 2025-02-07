import Recipe from "@/components/recipe";
import { memo } from "react";

const HomePage = () => {
  return (
    <div className="tb:py-1600 tb:grid tb:place-content-center min-h-screen w-full min-w-min">
      <Recipe />
    </div>
  );
};

export default memo(HomePage);
