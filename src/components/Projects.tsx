"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projects } from "@/data";
import { motion } from "motion/react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
const Projects = () => {
  return (
    <div id="projects" className="bg-black py-16">
      <div className="container space-y-12">
        <SectionHeader title="My" boldTitle="Projects" style="white" />
        <Carousel
          opts={{
            loop: true,
            dragFree: true,
          }}
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="flex items-center lg:odd:flex-row lg:even:flex-row-reverse flex-col gap-10 overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0, y: -200 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="lg:w-2/5 w-full h-96 relative"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 200 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="lg:w-3/5 w-full lg:px-10 space-y-6"
                >
                  <p className="text-white text-5xl font-extrabold">
                    0{index + 1}
                  </p>
                  <h2 className="text-white text-3xl font-extrabold">
                    {project.title}
                  </h2>
                  <p className="text-lg text-gray-400">{project.description}</p>
                  <a
                    href={project.link}
                    className="w-fit font-semibold capitalize text-lg text-black bg-lime-400 h-14  flex items-center gap-2 px-6 rounded-lg border-2 border-transparent hover:border-lime-400 hover:bg-black hover:text-lime-400 transition-all duration-300"
                  >
                    Live Demo <FaExternalLinkAlt size={20} />
                  </a>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="space-x-2 lg:text-end text-center  mt-6">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
