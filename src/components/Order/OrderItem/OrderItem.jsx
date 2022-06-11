import style from './OrderItem.module.scss'

function OrderItem({imageUrl, title}){
    return(
        <div className={style.orderItem}>
            <img src={imageUrl} alt="[sneakers]"/>
            <div className={style.orderItemTitle}>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default OrderItem