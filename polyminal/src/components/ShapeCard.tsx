import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const ShapeCard = (props: { data: { id: any; name: any; img: any }; }) => {
    const { id, name } = props.data;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/ShapeDetail/${id}`);
    };

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
            scaleY: 0,
            scaleX: 1,
            transition: {
            duration: .2,
            }
        },
        hover: {
            scaleY: 1,
            scaleX: 1,
            transition: {
                duration: .2,
            }
        }
    }
    
    const boxState = {
        rest: {
            width: "90%",
            height: "90%",
            transition: {
                duration: .2,
            }
        },
        hover: {
            width: "100%",
            height: "100%",
            transition: {
                duration: .2,
            }
        }
    }

    return (
        <div className="w-1/4 aspect-square flex justify-center items-center">
            <motion.div 
                className="h-5/6 w-5/6 z-10 relative flex justify-center items-center cursor-pointer
                border-solid border-white border-2"
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={boxState}
                onClick={handleClick}
            >
                {/* <motion.div va className=""></motion.div> */}
                <motion.h5 variants={textState} className="z-[12] relative p-5 text-center notouch pointer-events-none">{name}</motion.h5>
                <motion.div variants={bgState} className="absolute top-0 left-0 z-[11] h-full w-full bg-white"></motion.div>
            </motion.div>
        </div>
    )
}

export default ShapeCard