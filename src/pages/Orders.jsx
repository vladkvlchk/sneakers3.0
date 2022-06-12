import Info from "../components/Info/Info"
import Order from "../components/Order/Order"

function Orders ({ orders }){
    return (
        <div className="content">
            {orders.length ? <div>
                        <h1>Orders</h1>
                        {orders.reverse().map( order => <Order key={order.id} order={order}/>)}
                        </div> 
            : <Info imageUrl={'/sneakers3.0/media/empty-cartbox.png'}
                title={'You have no Orders'}
                description={'You will see your Orders here when you order them'}/>}

        </div>
    )    
}
export default Orders