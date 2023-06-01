import { Card } from '../Card/Card'
import './project.css'

export const Project = () => {
    return (
        <section className='projects' id='projects'>
            <div className='projects__header'>
                <h1 className='projects__header-title'>Proyectos</h1>
            </div>

            <div className='projects__container'>
                
                    <Card 
                    titleProject='Shopping Cart' 
                    descriptionProject= 'Página web de productos con carro de la compra para poder añadir artículos y consultar el monto total.'
                    fullImg='../images/shopping.jpg'
                    altImgFront='Imagen del proyecto Shopping Cart'
                    stack='ReactJS - CSS - DB:JSON'
                    stackLinkGit='https://github.com/germanfaob/Shopping_Cart'
                    stackLinkPage='https://germadev-shopping-cart.netlify.app/'
                    />

                    <Card 
                    titleProject='Movie app' 
                    descriptionProject= '- Aplicación web de películas que consume una API para poder mostrar el listado.'

                    fullImg='../images/movies.webp'
                    altImgFront='Imagen del proyecto Movie app'
                    stack='ReactJS - CSS - API:TMDb'
                    stackLinkGit='https://github.com/germanfaob/Movie_App'
                    stackLinkPage='https://germadev-movie-app.netlify.app/'
                    />

                    <Card 
                    titleProject='Kanban UI' 
                    descriptionProject= 'Organizador de tareas estilo Kanban. El usuario puede interactuar con las etiquetas y moverlas de una columna a otra.' 
                    fullImg='../images/kanban.webp'
                    altImgFront='Imagen del proyecto Kanban'
                    stack='ReactJS - SCSS - Librería:React beautiful dnd'
                    stackLinkGit='https://github.com/germanfaob/Kanban_UI'
                    stackLinkPage='https://germadev-kanban-ui.netlify.app/'
                    />
                
                
                    <Card 
                    titleProject='Login con Firebase' 
                    descriptionProject='Sistema de autentificación de usuarios con Firebase como Back-End y base de datos' 
                    fullImg='../images/login.jpg'
                    altImgFront='Imagen del proyecto Login con Firebase'
                    stack='ReactJS - CSS - Firebase'
                    stackLinkGit='https://github.com/germanfaob/Login_System_Firebase'
                    stackLinkPage='https://germadev-login.netlify.app/'
                    />

                    <Card 
                    titleProject='Task app' 
                    descriptionProject='Con esta aplicación puedes añadir una lista de tareas por hacer e ir tachando las que estén completadas o eliminarlas' 
                    fullImg='../images/task.jpg'
                    altImgFront='Imagen del proyecto App task'
                    stack='HTML - CSS - JS'
                    stackLinkGit='https://github.com/germanfaob/TaskApp'
                    stackLinkPage='https://germadev-task-app.netlify.app/'
                    />

                    <Card 
                    titleProject='Medidor de mecanografía' 
                    descriptionProject='Aplicación que mide a qué velocidad puedes escribir con tu teclado y cuántos errores y aciertos cometes' 
                    fullImg='../images/mecanografia.jpg'
                    altImgFront='Imagen del proyecto Medidor de mecanografía'
                    stack='Python - TKinter'
                    stackLinkGit='https://github.com/germanfaob/Master_Typing'
                    stackLinkPage='https://github.com/germanfaob/Master_Typing'
                    />
                
                
            </div>
        </section>
    )
}