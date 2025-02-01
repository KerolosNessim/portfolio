import Marquee from "react-fast-marquee";
import * as motion from "motion/react-client";
import { GiStarShuriken } from "react-icons/gi";

const CustomMarquee = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      viewport={{ once: true }}
      className="bg-lime-400 my-12"
    >
      <div className="overflow-hidden whitespace-nowrap bg-black -skew-y-1 mt-10 ">
        <Marquee
          autoFill={true}
          pauseOnHover={true}
          speed={30}
          className=" overflow-hidden "
        >
          <div className="lg:py-4 py-2 text-white font-bold lg:text-5xl text-3xl flex items-center gap-4">
            <p></p>
            <GiStarShuriken size={30} className="text-libg-lime-400" />
            <span>Frontend Developer</span>
            <GiStarShuriken size={30} className="text-libg-lime-400" />
            <span>Web Designer</span>
          </div>
        </Marquee>
      </div>
    </motion.div>
  );
};

export default CustomMarquee;
