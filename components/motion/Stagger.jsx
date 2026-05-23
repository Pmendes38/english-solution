"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function StaggerGroup({ children, className, amount = 0.15, as = "div" }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={container}
      className={className}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({ children, className, as = "div" }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag variants={item} className={className}>
      {children}
    </Tag>
  );
}
