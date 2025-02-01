"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEnvelope, FaSpinner, FaWhatsapp } from "react-icons/fa";
import { z } from "zod";
import SectionHeader from "./SectionHeader";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(160, {
      message: "Message must not be longer than 30 characters.",
    }),
});
const ContactMe = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const serviceId = "service_pvnl7pr";
    const templateId = "template_zd8p4yh";
    const publicKey = "3KF277C9XRTS_mPql";
    const templateParams = {
      username: values.username,
      email: values.email,
      message: values.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        toast({
          title: "Message sent successfully!",
          className: "bg-lime-400 text-black",
        });
        form.reset();
      })
      .catch(() => {
        toast({
          title: "Message failed to send, please try again.",
          className: "bg-red-500 text-white",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <div id="contact" className="py-14 container space-y-14">
      <SectionHeader title="Contact" boldTitle="Me" style="black" />
      <div className="flex items-start flex-col lg:flex-row gap-10 overflow-hidden">
        {/* form */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="How can I help you ?"
                        className="resize-none h-48"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="bg-lime-400 text-lg text-black font-semibold md:w-60 w-full flex items-center justify-center py-6 border-2 border-transparent hover:border-black hover:bg-transparent hover:text-black transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? (
                  <FaSpinner className="animate-spin" size={20} />
                ) : (
                  "Get In Touch"
                )}
              </Button>
            </form>
          </Form>
        </motion.div>
        {/* content */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full space-y-6"
        >
          <h2 className="lg:text-5xl text-4xl font-bold lg:leading-[50px]">
            Let&apos;s <span className="text-stroke">talk</span> for <br />
            Something Special
          </h2>
          <p className="text-gray-500 text-lg lg:w-4/5 w-full">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>
          <div className="flex flex-col gap-4 md:text-3xl text-2xl font-bold">
            <a
              href="mailto:keronessim9@gmail.com"
              className="flex items-center gap-2"
            >
              <FaRegEnvelope size={34} className="text-lime-400" />
              keronessim9@gmail.com
            </a>
            <a
              href="https://wa.me/0201066122783?text=Hi%20there!"
              className="flex items-center gap-2"
            >
              <FaWhatsapp size={36} className="text-lime-400" />
              +0201066122783
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactMe;
