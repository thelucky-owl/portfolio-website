
import { motion,useScroll,useTransform,useSpring } from "framer-motion"
export const Banner =()=>{
    const {scrollY} = useScroll();
    const y2 = useTransform(scrollY, [0, 300], [0, 550]);
    const y2Spring = useSpring(y2, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      });
    return(
        <section className="banner" id="banner">
            <motion.div style={{y:y2Spring}}   className="sun">
            </motion.div>
        </section>
    )
}