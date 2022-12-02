import React, { useEffect, useState } from 'react';
import './Header.css';
// import Logo from '../../assets/logo.png';
import Logo from '../../assets/logo2.png';
import Bars from '../../assets/bars.png';
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <=768 ? true: false;
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <div className="header">
      <img src={Logo} alt=""  className="logo"/> 
      
        {menuOpened === false && mobile===true ? ( 
          <div  style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          
          // on click menu bar
          onClick={()=> setMenuOpened(true)}
          >
            <img src={Bars} alt=""  style={{width: '1.1rem', height:'1.1rem'}}/>
           
            </div>
        ) : (
          
        <ul className="header-menu">
           {/* <span // on click menu bar
          onClick={()=> setMenuOpened(false)} 
          style={{
            color: "var(--orange)",
           cursor: "pointer",
           alignSelf: "right"
          }}>X</span> */}
      
        <li ><Link
         onClick={()=> setMenuOpened(false)}
         to='home'
         span={true}
         smooth={true}
        >Home</Link></li>
        <li onClick={()=> setMenuOpened(false)}><Link> Why Us</Link></li>
        <li onClick={()=> setMenuOpened(false)}><Link
        onClick={()=> setMenuOpened(false)}
        to='programs'
        span={true}
        smooth={true}
        >Programs</Link></li>
        <li onClick={()=> setMenuOpened(false)}><Link 
        onClick={()=> setMenuOpened(false)}
        to='plans'
        span={true}
        smooth={true}
        >Plans</Link></li>
        <li><Link 
         onClick={()=> setMenuOpened(false)}
        to='Testimonials'
        span={true}
        smooth={true}
        >Testimonial</Link></li>

    </ul>
    
    )}
        
    </div>
  );
};

export default Header