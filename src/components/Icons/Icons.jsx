export const Icons = (props) => {

    const { srcIcon, altIcon } = props

    return(
        <>
            <img src={srcIcon} alt={altIcon} />
        </>
    )
}