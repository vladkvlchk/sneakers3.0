import OrderItem from "./OrderItem/OrderItem"
import style from "./Order.module.scss"

function Order({order}){
    const items = [];
    for (let key in order){
        items.push(order[key]);
    }
    items.pop();
    console.log(items);
    return (
        <div className={style.order}>
            <h3>Order #{order.id}</h3>
            <div className={style.orderItems}>
                {items.map(item => <OrderItem imageUrl={item.imageUrl} title={item.title}/>)}
            </div>
        </div>
    )
}
export default Order
/* нам приходит ордер вида:
{
    "0": {
      "title": "Air Jordan 11 Retro OG",
      "price": "349",
      "imageUrl": "/sneakers3.0/media/sneakers/6.png",
      "id": "1"
    },
    "1": {
      "title": "Air Jordan 4 Retro OG 'White Cement'",
      "price": "279",
      "imageUrl": "/sneakers3.0/media/sneakers/10.png",
      "id": "2"
    },
    "2": {
      "title": "Jordan 1low Island Green",
      "price": "699",
      "imageUrl": "/sneakers3.0/media/sneakers/16.png",
      "id": "3"
    },
    "id": "1"
}
нужно перебрать 0, 1, 2 без id
order.map( key => (
    isNumber(key) ? <OrderItem> : <></>
))

*/