import { Card } from '../Card/Card'
import './project.css'

export const Project = () => {
    return (
        <section className='projects'>
            <div className='projects__header'>
                <h1 className='projects__header-title'>Proyectos</h1>
            </div>

            <div className='projects__container'>
                <Card 
                srcImg='' 
                altImg='' 
                titleProject='Proyecto 1 desde Padre' 
                descriptionProject='Descripción 1 ....' 
                fullImg='../images/test.jpg'
                stack='HTML, CSS, JS'
                />

                <Card 
                srcImg='' 
                altImg='' 
                titleProject='Proyecto 2 desde Padre' 
                descriptionProject='Descripción 2 ....' 
                fullImg='../images/test.jpg'
                />

                <Card 
                srcImg='' 
                altImg='' 
                titleProject='Proyecto 2 desde Padre' 
                descriptionProject='Descripción 2 ....' 
                fullImg='../images/test.jpg'
                />

                <Card 
                srcImg='' 
                altImg='' 
                titleProject='Proyecto 2 desde Padre' 
                descriptionProject='Descripción 2 ....' 
                fullImg='../images/test.jpg'
                />

                <Card 
                srcImg='' 
                altImg='' 
                titleProject='Proyecto 2 desde Padre' 
                descriptionProject='Descripción 2 ....' 
                fullImg='../images/test.jpg'
                />

                <Card 
                srcImg='' 
                altImg='' 
                titleProject='Proyecto 2 desde Padre' 
                descriptionProject='Descripción 2 ....' 
                fullImg='../images/test.jpg'
                />
            </div>
        </section>
    )
}