import { motion } from 'framer-motion'

const DetailHover = (props: {text: any, origin: any, mouseEnter: any, mouseLeave: any}) => {
  const textState = {
    rest: {
        color: "#FFFFFF",
        transition: {
        duration: .2,
        }
    },
    hover: {
        color: "#000000",
        transition: {
        duration: .2,
        }
    }
}

const bgState = {
    rest: {
        scaleX: 0,
        originX: props.origin,
        transition: {
        duration: .2,
        }
    },
    hover: {
        scaleX: 1,
        originX: props.origin,
        transition: {
            duration: .2,
        }
    }
}

var hStyle = props.origin == 0 ? "z-[12] relative p-5 w-full text-start notouch pointer-events-none" : "z-[12] relative p-5 w-full text-end notouch pointer-events-none"

return (
    <div className="w-96 px-24 py-2 flex justify-center items-center">
        <motion.div 
            className="z-10 w-full relative flex justify-center
            border-solid border-white border-2"
            initial="rest"
            whileHover="hover"
            animate="rest"
            onMouseEnter={props.mouseEnter}
            onMouseLeave={props.mouseLeave}
        >
            {/* <motion.div va className=""></motion.div> */}
            <motion.h5 variants={textState} className={hStyle}>{props.text}</motion.h5>
            <motion.div variants={bgState} className="absolute top-0 left-0 z-[11] h-full w-full bg-white"></motion.div>
        </motion.div>
    </div>
)
}

export default DetailHover