import Style from './Floating.module.css';
import {MdOutlineDoubleArrow as Arrow} from 'react-icons/md';
import {useEffect, useState} from 'react';

const Floating = ()=>{
  
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };


  return(
    <>
    {showButton && (
    <div onClick={scrollToTop} className={Style.floating}>
      <Arrow size="30px" style={{transform:"rotate(270deg)"}} />
    </div>
      )}
    </>
  )
}

export default Floating;








