// import { motion,useScroll,useTransform,useSpring } from "framer-motion"
// import { useLayoutEffect, useState,useRef,useEffect } from "react";

export const Footer =()=>{
    // const ref = useRef(null)
    // const [windowSize, setWindowSize] = useState(0);
    //   useLayoutEffect(()=>{
    //     setWindowSize(ref.current.clientHeight)
    //   },[])
    //   useEffect(() => {
    //     setWindowSize([window.document.body.clientHeight, window.innerHeight]);
    //     const handleWindowResize = () => {
    //       setWindowSize([window.document.body.clientHeight, window.innerHeight]);
    //     };
    
    //     window.addEventListener('click', handleWindowResize);
    
    //     return () => {
    //       window.removeEventListener('click', handleWindowResize);
    //     };
    //   },[]);
    // console.log(windowHeight)
        // const [something,setSomething] =useState()
        // const {scrollY} = useScroll({
        //     target: ref,
        //     // container:body,
        //     offset: ["end end", "start start"]
        //   });
        // // const y2 = useTransform(scrollY, [0,1500], [0,400]);
        // const y2Spring = useSpring(scrollY, {
        //     stiffness: 100,
        //     damping: 30,
        //     restDelta: 0.001
        //   });
        //   console.log(y2Spring.current)
        // //  setSomething(y2Spring.current)
        // let aThing = y2Spring.current/4
        // style={{y:y2Spring}} ref={ref}
    return(
        <section >
            <div className="footer" id="footer" >
            <div className="moon" id="moon"  >
            </div>
            </div>
        </section>
    )
}