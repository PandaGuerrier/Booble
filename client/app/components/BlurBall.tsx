import { motion } from 'framer-motion'

// @ts-ignore
export default function BlurBallComponent({ className }) {
  return (
      <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 180, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className={"absolute h-10 w-10 md:h-52 md:w-52  rounded-full -z-10 blur-[100px] " + className}>
      </motion.div>
  )
}

//