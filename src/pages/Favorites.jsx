import React from 'react'
import Card from '../components/Card/Card'
import AppContext from '../context'


function Favorites({ onAddToCart, onAddToFavorite}){

    const {favoriteItems} = React.useContext(AppContext);
    console.log(favoriteItems);
    return(
        <div className="content">
            <div className='cards'>
            
                {favoriteItems.map((item, index) => (
                    <Card key={index}
                    onPlus={ (obj) => {onAddToCart(obj)} }
                    onFavorite={ obj => onAddToFavorite(obj)}
                    favorited={true}
                    {...item}
                    />

                ))}
            </div>
        </div>
)}

export default Favorites