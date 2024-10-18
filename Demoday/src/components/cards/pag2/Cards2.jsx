import '../../Styles/CardCarrousel.css'

function Cards2({icon, text, titulo}) {
    return(
        <>
            <div>
                <h1>{titulo}</h1>
                <div className='img-cards'>
                    <img src={icon} alt="" />
                    <h3>{text}</h3>
                </div>

            </div>        
        </>
    )
}
export default Cards2