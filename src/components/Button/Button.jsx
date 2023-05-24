export const Button = ({ buttonClass, buttonLink, buttonText }) => {
    return(
        <a className={buttonClass} href={buttonLink}>{buttonText}</a>
    )
}