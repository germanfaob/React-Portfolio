import './menu.css'

export const Menu = () => {

    return (
        <nav className='nav'>

            <label htmlFor='menu' className='nav__label'>
                <img className='nav__img' src='../../images/hamburguer.png' alt="Icono de menú móvil" />
            </label>
            <input type="checkbox" id='menu' className='nav__input' />

            <ul className='nav__list'>
                <li className='nav__list-item'><a className='nav__list-text' href='#home'>Inicio</a></li>
                <li className='nav__list-item'><a className='nav__list-text' href='#projects'>Proyectos</a></li>
                <li className='nav__list-item'><a className='nav__list-text' href='#experience'>Experiencia</a></li>
                <li className='nav__list-item'><a className='nav__list-text' href='#about'>Acerca de mi</a></li>
                <li className='nav__list-item'><a className='nav__list-text' href='#contact'>Contacto</a></li>
            </ul>

        </nav>
    )
}