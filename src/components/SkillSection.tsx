import { skills } from "@/data";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import * as motion from "motion/react-client";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Delay between child animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SkillSection = () => {
  return (
    <section
      id="skills"
      className="container  flex items-center justify-center py-14"
    >
      <div className="w-full space-y-14">
        <SectionHeader title="My" boldTitle="Skills" style="black" />
        {/* Skills Grid with Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-12 lg:gap-10 md:gap-6 gap-4"
        >
          {skills.map((skill) => (
            <motion.div
              variants={itemVariants}
              viewport={{ once: true }}
              key={skill.id}
              className="lg:col-span-2 md:col-span-3 col-span-4 border-4 border-black rounded-xl md:p-10 p-4 flex items-center justify-center hover:bg-lime-400 transition-all duration-300"
            >
              <Image src={skill.img} alt={skill.name} width={75} height={75} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;
