import './header.css'
import { Menu } from '../Menu/Menu'
import { Hero } from '../Hero/Hero'

export const Header = () => {

    return (
        <section className='header'>
            <Menu />
            <Hero />
        </section>
    )
}