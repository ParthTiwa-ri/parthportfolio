import { Variants } from "framer-motion";

export const slideUp = ({
  delay = 0,
  duration = 1.25,
  offset = 20,
}: {
  delay?: number;
  duration?: number;
  offset?: number;
}): Variants => ({
  hidden: {
    y: offset,
    opacity: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      delay,
      duration,
    },
  },
});
