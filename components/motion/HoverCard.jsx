"use client";

import { motion } from "framer-motion";

export default function HoverCard({ children, className, as = "div", ...rest }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      whileTap={{ scale: 0.985 }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}
