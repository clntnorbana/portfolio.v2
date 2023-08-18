import About from "./About";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 5,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
        delay: 0.2,
      }}
      className="pb-20 lg:mt-40"
    >
      <About />
    </motion.div>
  );
};
export default Home;
