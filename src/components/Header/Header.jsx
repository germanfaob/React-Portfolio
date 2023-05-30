import './header.css'
import { Menu } from '../Menu/Menu'
import { Hero } from '../Hero/Hero'

export const Header = () => {

    return (
        <section className='header' id='home'>
            <Menu />
            <Hero />
        </section>
    )
}