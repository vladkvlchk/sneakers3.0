import OrderItem from "./OrderItem/OrderItem"

function Order({order}){
    console.log(order.length);
    return (
        <div>
            <h3>Order #{order.id}</h3>
            {order.map( (item) => {
                console.log(item);
                return <OrderItem imageUrl={item.imageUrl} title={item.title}/>
            })}
        </div>
    )
}
export default Order