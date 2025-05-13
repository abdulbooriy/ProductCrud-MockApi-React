import React from "react";

export const Loading = () => {
  return (
    <div className="w-full h-screen grid place-items-center">
      <h1 className="text-3xl font-bold font-[Nunito]">Loading...</h1>
    </div>
  );
};

export const Suspense = ({ children }) => {
  return <React.Suspense fallback={<Loading />}>{children}</React.Suspense>;
};
