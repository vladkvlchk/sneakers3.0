

function OrderItem({imageUrl, title}){
    return(
        <div className="orderItem">
            <img src={imageUrl} alt="[sneakers]"/>
            <div className="orderItemTitle">
                <p>{title}</p>
            </div>
        </div>
    )
}

export default OrderItem