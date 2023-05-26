import './experience.css'

export const Experience = () => {

    return(
        <section className='experience'>
            <div className='experience__header'>
                <h1 className='experience__header-title'>Experiencia y estudios</h1>
            </div>
            
            <div className='experience__body'>
                <div className='experience__body-column'>
                    <div className='experience__body-header'>
                        <h2 className='experience__body-title'>Experiencia laboral</h2>
                    </div>

                    <div className='experience__body-description'>
                        <div className='experience__description-subtitle'>
                            <h3>RiojaWeb - Desarrollador Front-End</h3>
                            <span className='accent-color'>Febrero 2023 - Actualidad</span>
                        </div>
                        <div className='experiencie__description-spans'>
                            <span>- Desarrollo y diseño de páginas web desde el Front-End</span>
                            <span>- Manejo de HTML, CSS y Vanilla JavaScript</span>
                        </div>
                        <div className='experience__description-subtitle'>
                            <h3>HDC Informática - Administrador de software</h3>
                            <span className='accent-color'>Diciembre 2019 - Enero 2021</span>
                        </div>
                        <div className='experiencie__description-spans'>
                            <span>- Trabajo con software de farmacia: encargado de resolver incidencias, tratar con clientes e implementar el software en el lado del cliente</span>
                            <span>- Trabajo con bases de datos ralacionales: actualización de estructuras, modificación de datos, reparación de Bases de Datos corruptas, etc.</span>
                        </div>
                    </div>
                </div>

                <div className='experience__body-column'>
                    <div className='experience__body-header'>
                        <h2 className='experience__body-title'>Estudios académicos</h2>
                    </div>

                    <div className='experience__body-description'>
                        <div className='experience__description-subtitle'>
                            <h3>Máster en Desarrollo Web - Nett Digital School</h3>
                            <span className='accent-color'>2023</span>
                        </div>
                        <div className='experiencie__description-spans'>
                            <span>- JavaScript y TypeScript</span>
                            <span>- Docker</span>
                            <span>- Usabilidad y UX</span>
                            <span>- Bases de datos SQL</span>
                            <span>- Boostrap y Tailwind</span>
                        </div>

                        <div className='experience__description-subtitle'>
                            <h3>Web development - Tamwood College</h3>
                            <span className='accent-color'>2021 - 2022</span>
                        </div>
                        <div className='experiencie__description-spans'>
                            <span>- Fundamentos del desarrollo web Front-End</span>
                            <span>- Fundamentos de CSS, Pre-Procesadores, Frameworks y Sistemas de Control de Versiones</span>
                            <span>- JavaScript para Desarrollo Web</span>
                            <span>- Introducción al Desarrollo Web Back-End: NodeJS y PHP</span>
                            <span>- Introducción a Frameworks Front-End: ReactJS y AngularJS</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}