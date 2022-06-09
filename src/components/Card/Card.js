import React from 'react'
import styles from './Card.module.scss'

function Card({onFavorite, onPlus, imageUrl, title, price, id, favorited = false}, onChangePrice){

    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        onPlus({id, title, price, imageUrl});
        setIsAdded(!isAdded);
    }
    
    const onClickFavorite = () => {
        onFavorite({id, title, price, imageUrl}, isFavorite);
        setIsFavorite(!isFavorite);
    }

    return(
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img className={styles.liked} src={isFavorite ? "/sneakers3.0/media/liked.svg" : "/sneakers3.0/media/unliked.svg"} alt="[liked]"
                onClick={onClickFavorite}/>                       
            </div>
            <img src={imageUrl} height={112} alt="[sneakers]"/>
            <h5>{title}</h5>
            <div className={styles.between}>
                <div className={styles.cardPriceConteiner}>
                    <span>Price:</span>
                    <b>{price}$</b>
                </div>
                <div className={styles.btnAdd}>
                    <img src={isAdded ? '/sneakers3.0/media/checked.svg' : '/sneakers3.0/media/add-plus.svg'} 
                    alt="[add]"
                    onClick={onClickPlus}/>
                </div>
            </div>
         </div>
    )
}

export default Card