import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border-4 border-warning/20 border-t-warning animate-spin" />

        <span className="absolute text-2xl">🐾</span>
      </div>
    </div>
  );
};

export default Loading;
