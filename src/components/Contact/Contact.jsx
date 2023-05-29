import { FooterCard } from '../FooterCard/FooterCard'
import './contact.css'

export const Contact = () => {

    return(
        <section className='contact'>
            <div className='contact__header'>
                <h1 className='contact__header-title'>Contacto</h1>
            </div>
            <ul className='contact__list'>
                <FooterCard 
                backLink="mailto:germanfaob@gmail.com" 
                footerName="Email" 
                frontLink="mailto:germanfaob@gmail.com"
                frontSrcImg="../../images/mail.png"
                frontAlt="Contacto: Icono de Email"
                />

                <FooterCard 
                backLink="https://www.linkedin.com/in/germanfig/" 
                footerName="Linkedin" 
                frontLink="https://www.linkedin.com/in/germanfig/"
                frontSrcImg="../../images/linkedin.png"
                frontAlt="Contacto: Icono de Linkedin"
                />

                <FooterCard 
                backLink="https://github.com/germanfaob" 
                footerName="Github" 
                frontLink="https://github.com/germanfaob"
                frontSrcImg="../../images/github.png"
                frontAlt="Contacto: Icono de Github"
                />
            </ul>
        </section>
    )
}