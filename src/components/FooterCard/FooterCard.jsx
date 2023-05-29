import './footercard.css'

export const FooterCard = (props) => {

    const { backLink, footerName, frontLink, frontSrcImg, frontAlt } = props
    
    return(
        <li className="contact__card">
            <div className="contact__card-back flip">
                <a className='contact__card-anchor' href={backLink} target='_blank'>{footerName}</a>
            </div>

            <div className="contact__card-front flip">
                <a className='contact__card-anchor' href={frontLink}><img className='contact__card-img' src={frontSrcImg} alt={frontAlt} /></a>
            </div>
        </li>
    )
}