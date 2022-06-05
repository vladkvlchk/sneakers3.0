

function Info(imageUrl, title, description){
    return(
        <div className="info">
            <div className="i-image">
                <img src={imageUrl}></img>
            </div>
            <div className="i-title">
                <h1>{title}</h1>
            </div>
            <div className="i-description">
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Info