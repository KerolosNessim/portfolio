import * as motion from "motion/react-client";
import SocialLinks from "./SocialLinks";

const HeroSection = () => {
  return (
    <motion.div
      id="home"
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="container   flex items-center justify-between"
    >
      {/* content */}
      <div className="flex flex-col gap-6 h-full justify-center  lg:w-1/2  text-center lg:text-start">
        <h1 className="md:text-6xl text-4xl capitalize lg:leading-[56px] font-extrabold">
          <span className="text-3xl font-semibold">Hello I’am</span>
          <br />
          <span>kerolos nessim </span>
          <br />
          <span className="lg:text-nowrap">
            Frontend <span className=" text-stroke ">Developer</span>
          </span>
        </h1>
        <p className="text-gray-500  text-lg">
          Frontend React Developer skilled in creating responsive designs using
          Tailwind CSS and Bootstrap. Proficient in JavaScript (JS), HTML5, and
          CSS3, with a strong focus on user-friendly interfaces, crossbrowser
          compatibility, and mobile-first design. Focused on delivering
          high-quality web experiences.
        </p>
        {/* social links */}
        <SocialLinks />
      </div>
      {/* img */}
      <div className="w-1/2 p-10 hidden lg:block">
        <motion.img
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          src={"/hero.png"}
          alt="hero"
          width={750}
          height={750}
          className="object-contain  "
        />
      </div>
    </motion.div>
  );
};

export default HeroSection;
