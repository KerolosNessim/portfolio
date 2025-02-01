import React from "react";
import * as motion from "motion/react-client";

const SectionHeader = ({
  title,
  boldTitle,
  style,
  align = "text-center",
}: {
  title: string;
  boldTitle: string;
  style: string;
  align?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2
        className={`lg:text-5xl text-4xl font-extrabold  text-lime-400 ${align}`}
      >
        <span style={{ color: style }}>{title}</span>{" "}
        <span className="text-stroke">{boldTitle}</span>
      </h2>
    </motion.div>
  );
};

export default SectionHeader;
