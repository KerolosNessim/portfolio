import SectionHeader from "./SectionHeader";
import SocialLinks from "./SocialLinks";
import * as motion from "motion/react-client";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="py-12 container flex items-start gap-10 overflow-hidden"
    >
      <motion.img
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src={"/about.png"}
        alt="about-me"
        width={500}
        height={500}
        className="hidden lg:block"
      />

      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <SectionHeader
          title="About"
          boldTitle="Me"
          style="black"
          align="md:text-start text-center"
        />
        <p className="text-gray-500  lg:text-lg space-y-4">
          I am a dedicated frontend developer specializing in React.js and
          Next.js, with a keen eye for design and user experience. I take pride
          in crafting pixel-perfect, responsive, and high-performance web
          applications, ensuring seamless interactions and a smooth user
          experience.
          <br />
          <br /> My journey in web development began with a strong foundation in
          JavaScript, HTML, and CSS, and I have since expanded my expertise to
          modern technologies like TypeScript, Zustand, Tailwind CSS, and Framer
          Motion. Currently, I work at Serv5.Co as a Frontend Developer,
          building cutting-edge web solutions, while also mentoring young
          developers as a Frontend Instructor at ITS-TECHNO FUTURE.
          <br /> <br /> I thrive on solving complex problems, optimizing
          performance, and continuously learning the latest advancements in web
          development. My portfolio includes projects such as Jomlah
          Multi-vendor E-Commerce, Blue Dentist, Fresh-Cart, and more.
        </p>
        <SocialLinks />
      </motion.div>
    </div>
  );
};

export default AboutMe;
