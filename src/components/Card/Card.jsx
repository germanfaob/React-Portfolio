import './card.css'

export const Card = (props) => {

    const { titleProject, descriptionProject, fullImg, stack } = props

    return(
        <div className="projects__cards">
            <div className="projects__cards-back face">
                <div className="projects__info">
                    <div className='projects__text-container'>
                        <h2 className="projects__title">{titleProject}</h2>
                        <p className="projects__description">{descriptionProject}</p>
                    <div className='projects__stack'>
                        <span className='stack'>{stack}</span>
                    </div>
                    </div>    
                </div>
                
            </div>

            <div className="projects__cards-front face">
                <img className="projects__front-img" src={fullImg}></img>
            </div>
        </div>
    )
}