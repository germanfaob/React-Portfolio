import './hero.css'

export const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero__texts'>
                <h1 className='hero__title'>German Figueroa</h1>
                <p className='hero__subtitle'>Soy desarrollador web, actualmente viviendo en España y centrado en el Front-End</p>
            </div>
            <div className='hero__icons'>
                <a href='https://github.com/germanfaob' target='_blank'><img className='hero__icons-img' src='../../images/github.png' alt="Icono de Github" /></a>

                <a href='https://www.linkedin.com/in/germanfig/' target='_blank'><img className='hero__icons-img' src='../../images/linkedin.png' alt="Icono de Linkedin" /></a>

                <a href='' target='_blank'><img className='hero__icons-img' src='../../images/resume.png' alt="Icono de curriculum" /></a>
            </div>
        </div>
    )
}