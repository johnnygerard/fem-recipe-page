import Recipe from "@/components/recipe";
import { memo } from "react";

const HomePage = () => {
  return (
    <main className="tb:py-1600 tb:grid tb:place-content-center min-h-screen w-full min-w-min">
      <Recipe />
    </main>
  );
};

export default memo(HomePage);
