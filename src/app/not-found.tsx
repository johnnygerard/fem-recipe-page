import H1 from "@/components/h1";
import H2 from "@/components/h2";
import { Metadata } from "next";
import Link from "next/link";
import { memo } from "react";

export const metadata: Metadata = {
  title: "404 Not Found",
};

const NotFound = () => {
  return (
    <main className="tb:py-1600 tb:grid tb:place-content-center min-h-screen min-w-min p-4 text-center">
      <H1>404</H1>
      <H2>Recipe Not Found</H2>
      <p className="mb-8">
        Oops! The recipe you&#39;re looking for doesn&#39;t exist.
      </p>
      <Link
        href="/"
        className="text-blue-700 hover:text-blue-900 hover:underline"
      >
        Go Back Home
      </Link>
    </main>
  );
};

export default memo(NotFound);
