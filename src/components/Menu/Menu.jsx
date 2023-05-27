import './menu.css'

export const Menu = () => {

    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__list-item'><a className='nav__list-text' href=''>Inicio</a></li>
                <li className='nav__list-item'><a className='nav__list-text' href=''>Proyectos</a></li>
                <li className='nav__list-item'><a className='nav__list-text' href=''>Acerca de mi</a></li>
                <li className='nav__list-item'><a className='nav__list-text' href=''>Experiencia</a></li>
                <li className='nav__list-item'><a className='nav__list-text' href=''>Contacto</a></li>
            </ul>
        </nav>
    )
}