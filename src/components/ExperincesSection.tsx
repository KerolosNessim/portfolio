import { experiences } from "@/data";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import * as motion from "motion/react-client";

const ExperincesSection = () => {
  return (
    <div id="experinces" className="py-12 bg-black ">
      <div className="container space-y-14">
        <SectionHeader title="My" boldTitle="Experinces" style="white" />
        <div className="space-y-7 overflow-hidden">
          {experiences.map((experience) => (
            <motion.div
              initial={{ opacity: 0, x: experience.id % 2 === 0 ? 200 : -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: experience.id * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              key={experience.id}
              className="odd:border odd:border-gray-400 rounded-xl p-4 even:bg-[#27272A] odd:bg-transparent"
            >
              {/* head */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <Image src={experience.img} alt="" width={70} height={70} />
                  <h2 className="text-white lg:text-3xl md:text-xl font-bold">
                    {experience.title}
                  </h2>
                </div>
                {/* date */}
                <p className="text-[#D4D4D8] font-semibold">
                  {experience.date}
                </p>
              </div>
              <p className="text-[#D4D4D8] leading-6 mt-4 lg:text-lg">
                {experience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperincesSection;
