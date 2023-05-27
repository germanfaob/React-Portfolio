import './card.css'

export const Card = (props) => {

    const { srcImg, altImg, titleProject, descriptionProject, fullImg, stack } = props

    return(
        <div className="projects__cards">
            <div className="projects__cards-back face">
                <img className="projects__img" src={srcImg} alt={altImg}/>
                <div className="projects__info">
                    <h2 className="projects__title">{titleProject}</h2>
                    <p className="projects__description">{descriptionProject}</p>
                    <div className='projects__stack'>
                        <span className='stack'>{stack}</span>
                        
                    </div>
                </div>
                
            </div>

            <div className="projects__cards-front face">
                <img className="projects__front-img" src={fullImg}></img>
            </div>
        </div>
    )
}