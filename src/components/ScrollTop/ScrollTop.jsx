import './scrolltop.css'
import { useState } from 'react'

export const ScrollTop = () => {

    const [isVisible, setIsVisible] = useState(false)

    const handleScroll = () => {
        if(window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', handleScroll);

    return(
        <div className={`scrolltop ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            <img className='scrolltop__img' src="../../images/arrow.png" alt="Icono de scroll" />
        </div>
    )
};