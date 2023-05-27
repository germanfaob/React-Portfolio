import { Icons } from '../Icons/Icons'
import './hero.css'

export const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero__texts'>
                <h1 className='hero__title'>German Figueroa</h1>
                <p className='hero__subtitle'>Soy desarrollador web, actualmente viviendo en España y centrado en el Front-End</p>
            </div>
            <div className='hero__icons'>
                <Icons 
                srcIcon='../../images/github.png'
                altIcon='Icono de Github'
                />

                <Icons 
                srcIcon='../../images/linkedin.png'
                altIcon='Icono de Linkedin'
                />

                <Icons 
                srcIcon='../../images/resume.png'
                altIcon='Icono de curriculum'
                />
            </div>
        </div>
    )
}