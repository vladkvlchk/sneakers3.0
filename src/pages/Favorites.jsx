import React from 'react'
import Card from '../components/Card/Card'
import AppContext from '../context'
import Info from '../components/Info/Info'


function Favorites({ onAddToCart, onAddToFavorite}){

    const {favoriteItems} = React.useContext(AppContext);

    return(
        <div className="content">
            {favoriteItems.length ? <h1>Favorites</h1> : <></>}
            <div className='cards'>
            
                {favoriteItems.length ? favoriteItems.map((item, index) => (
                    <Card key={index + 77}
                    onPlus={ (obj) => {onAddToCart(obj)} }
                    onFavorite={ obj => onAddToFavorite(obj)}
                    favorited={true}
                    {...item}
                    />))
                    :
                    <Info key={favoriteItems.length + 66} 
                    imageUrl={"heart-bow-arrow.svg"}
                    title="no items"
                    description="add products to your favorites to they appear here"
                    />
                }
            </div>
        </div>
)}

export default Favorites