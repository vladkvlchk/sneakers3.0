import Info from "../components/Info/Info"
import Order from "../components/Order/Order"

function Orders ({ orders }){
    orders.forEach( item => {
        for (let key in item){
            if (key !== "id"){
                console.log(key);
            }
        }
    });
    return (
        <div className="content">
            {orders ? <div>
                        <h1>Orders</h1>
                        {/* {orders.forEach( item => {
                                for (let keyN in item){
                                    if (keyN !== "id"){
                                        return <Order key={order.id} order={order}/>
                                    }
                                }
                            })
                        }) } */}
                        </div> 
            : <Info imageUrl={''}
                title={'title'}
                description={'description'}/>}

        </div>
    )    
}
export default Orders