"use client";

import AnimatedCursor from "react-animated-cursor";

const CustomCursor = () => {
  return (
    <div>
      <AnimatedCursor
        innerSize={10}
        outerSize={40}
        innerScale={1}
        outerScale={1.5}
        outerAlpha={0}
        color="243,244,246"
        innerStyle={{
          backgroundColor: "#99A1AF",
        }}
        outerStyle={{
          border: "1px solid #99A1AF",
          mixBlendMode: "difference",
        }}
      />
    </div>
  );
};

export default CustomCursor;
