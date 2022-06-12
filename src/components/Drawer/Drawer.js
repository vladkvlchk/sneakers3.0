import React from 'react'
import styles from './Drawer.module.scss'
import AppContext from '../../context'
import Info from '../Info/Info'


function Drawer({ onClose, items = [], onRemove, onOrder }){
    const { cartItems } = React.useContext(AppContext);
    let totalPrice = cartItems.map( (elem) => {return elem.price}).reduce( (sum, current) => (Number(sum) + Number(current)), 0);
    return (
        <div className={styles.overlay}>
            <div className={styles.rightSide}>
                <div className={styles.cartHeader}>
                    <h2>Cart</h2>
                    <img className={styles.delete} src="/sneakers3.0/media/delete.svg" height={20} width={20} alt="[delete]"
                        onClick={onClose}/>
                </div>

                {items.length ? items.map((obj) => (
                    <div key={obj.id} className={styles.cartItem}>
                        <img src={obj.imageUrl} alt="[sneakers]"/>
                        <div className={styles.cItemText}>
                            <p>{obj.title}</p>
                            <b>{obj.price}$</b>
                        </div>
                        <img className={styles.delete} src="/sneakers3.0//media/delete.svg" height={20} width={20} alt="[delete]"
                            onClick={() => onRemove(obj.id)}/>
                    </div>
                ))
                : <Info imageUrl="/sneakers3.0/media/empty-cartboart.png"
                title="Cart is empty"
                description="Add sneakers to you cart to see it here"/>}
       
                <div className={styles.cartEnd}>
                    <div>
                        <p>Total:</p>
                        <b>{totalPrice}$</b>
                    </div>
                    <div>
                        <p>Tax 5%:</p>
                        <b>{Math.round(totalPrice * 0.05)}$</b>
                    </div>
                    <button onClick={onOrder}>Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Drawer