import styles from './Drawer.module.scss'

function Drawer({ onClose, items = [], onRemove, totalPrice }){
    
    return (
        <div className={styles.overlay}>
            <div className={styles.rightSide}>
                <div className={styles.cartHeader}>
                    <h2>Cart</h2>
                    <img className={styles.delete} src="/media/delete.svg" height={20} width={20} alt="[delete]"
                        onClick={onClose}/>
                </div>

                {items.map((obj) => (
                    <div key={obj.id} className={styles.cartItem}>
                        <img src={obj.imageUrl} alt="[sneakers-photo]"/>
                        <div className={styles.cItemText}>
                            <p>{obj.title}</p>
                            <b>{obj.price}$</b>
                        </div>
                        <img className={styles.delete} src="/media/delete.svg" height={20} width={20} alt="[delete]"
                            onClick={() => onRemove(obj.id)}/>
                    </div>
                ))}
       
                <div className={styles.cartEnd}>
                    <div>
                        <p>Total:</p>
                        <b>{totalPrice}$</b>
                    </div>
                    <div>
                        <p>Tax 5%:</p>
                        <b>{Math.round(totalPrice * 0.05)}$</b>
                    </div>
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Drawer