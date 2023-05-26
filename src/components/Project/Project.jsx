import { Card } from '../Card/Card'
import './project.css'

export const Project = () => {
    return(
        <section className='projects'>
            <div className='projects__header'>
                <h1 className='projects__header-title'>Proyectos</h1>
            </div>
            
            <div className='projects__container'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    )
}