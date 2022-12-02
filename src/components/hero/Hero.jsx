import React from 'react'
import Header from '../Header/Header';
import './Hero.css';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
 import {motion} from 'framer-motion';
 import NumberCounter from 'number-counter';



const Hero = () => {
    const transition = {type: 'spring', duration : 3}
    const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className="hero" id="home">
     <div className="blur hero-blur"></div>
       <div className="left-h">
           <Header/>
           <div className="the-best-ad">
           {/* frame action here */}
               <motion.div 
               initial={{left: mobile ? "165px": '238px'}}
               whileInView={{left: '8px'}}
               transition={{...transition, type: 'tween'}}
               ></motion.div>
               <span>the best fitness club in the town</span>
           </div>
        {/* hero Heading */}
            <div className="hero-text">
                <div>
                    <span className="stroke-text">Beat </span>
                    <span>Your Body</span>
                </div>
                <div>
                    <span>To Shape</span>
                </div>
                <div>
                    <span>In here We would help you to Build your ideal body shape with us. Live your life.
                    </span>
                 </div>
            </div>
            {/*Fifures*/}
            <div className="figures">
                <div>
                    <span>
                    <NumberCounter end={140} start={100} delay='4' preFix="+" />
                    </span>
                    <span>Expert Coaches</span>
                </div>
                <div>
                    <span>
                     <NumberCounter end={978} start={450} delay='4' preFix="+" />
                     </span>
                    <span>Members Joined</span>
                </div>
                <div>
                    <span>
                     <NumberCounter end={50} start={10} delay='4' preFix="+" />
                    </span>
                    <span>fitness programs</span>
                </div>
            </div>
         {/* hero Heading */}
         <div className="hero-buttons">
             <buttons className="btn">Get Started</buttons>
             <buttons className="btn">learn More</buttons>
         </div>

        </div>
      <div className="curveback">
            <img src={hero_image_back} className="hero-image_back" alt="" />
        </div>
       <div className="right-h"> 
            <button className="btn">Join Now</button>

            <motion.div 
            initial={{ right: "2rem"}}
            whileInView={{right: "4rem"}}
            transition={transition}
            className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart Rate</span>
                <span>113 bpm</span>
            </motion.div>

         <motion.img 
         initial={{right: '2rem'}}
         whileInView={{right: '7rem'}}
         transition={transition}
         src={hero_image} className="hero-image" alt="" />
         

            {/* calories */}
            <motion.div 
               initial={{ right: "37rem"}}
               whileInView={{right: "35rem"}}
               transition={transition}
               className="calories">
                
                <img src={Calories} alt="" />
                <div>  
                    <span>Calories Burned</span>
                    <span>200 kcal</span>
                 </div>
              
            </motion.div>
       </div>





    </div>
  );
}

export default Hero
