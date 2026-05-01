"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { pageTransition, pageTransitionConfig } from "./motion-config";

type Props = HTMLMotionProps<"div"> & { children: React.ReactNode };

export default function PageTransition({ children, ...props }: Props) {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransitionConfig}
      {...props}
    >
      {children}
    </motion.div>
  );
}
