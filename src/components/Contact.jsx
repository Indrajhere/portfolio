import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-4xl text-center my-10"
      >
        Get in Touch
      </motion.h1>
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className=" text-neutral-400 mb-3 text-center"
      >
        {" "}
        Gurgaon, Haryana
      </motion.p>
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className=" text-neutral-400 mb-3 text-center"
      >
        {" "}
        +91 9815971397
      </motion.p>
      <p className=" text-neutral-400 mb-3 text-center underline">
        <a href="mailto:indrajbir@gmail.com">indrajbir@gmail.com</a>
      </p>
    </div>
  );
};

export default Contact;
