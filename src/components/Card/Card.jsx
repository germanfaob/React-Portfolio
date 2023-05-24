import './card.css'

export const Card = (props) => {

    const { title,imgLink,altImg } = props

    return(
        <div className="projects__cards">
            <div className="projects__cards-back face">
                <img className="projects__img" src='../images/img-8.webp' alt={altImg}/>
                <div className="projects__info">
                    <h2 className="projects__title">Titulo projecto 1</h2>
                    <p className="projects__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate deserunt totam molestias atque ipsam, iure ex odit natus dicta ratione neque voluptatum. Neque, tempora iste illo officiis repellendus magni?</p>
                </div>
            </div>
            <div className="projects__cards-front face"></div>
        </div>
    )
}