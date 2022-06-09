import React from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'
import Drawer from './components/Drawer/Drawer'
import Favorites from './pages/Favorites'
import AppContext from './context'


function App(){
    const [items, setItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartItems, setCartItems] = React.useState([]);
    const [favoriteItems, setFavoriteItems] = React.useState([]);
    const [isLoading, setLoading] = React.useState(true);
    const [totalPrice, setTotalPrice] = React.useState(0);

    React.useEffect(() => {
        const axiosData = async () => {
            setLoading(true);
            const cartResponse = await axios.get('https://62933f7e089f87a57abcb366.mockapi.io/cart')
            .then( (res) => {
                setCartItems(res.data);
                onChangeTotalPrice()});
            const favoriteResponse = await axios.get('https://62933f7e089f87a57abcb366.mockapi.io/favorite');
            const itemsResponse = await axios.get('https://62933f7e089f87a57abcb366.mockapi.io/items');
            setLoading(false);
    
            //setCartItems(cartResponse.data);
            setFavoriteItems(favoriteResponse.data);
            setItems(itemsResponse.data);
            //onChangeTotalPrice();
        }
        axiosData().catch(console.error);
    }, [])

    const onAddToCart = async (obj) => {
        try{
            if(cartItems.find((cartObj) => cartObj.id === obj.id)){
                axios.delete(`https://62933f7e089f87a57abcb366.mockapi.io/cart/${obj.id}`);
                setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
            } else {
                const { data } = await  axios.post('https://62933f7e089f87a57abcb366.mockapi.io/cart', obj);
                setCartItems([...cartItems, data]);
            }
            onChangeTotalPrice();
        } catch {
            alert('Error [on add to cart]')
        }
        
    };

    const onAddToFavorite = async (obj, isFavorited) => {
        try{
            if(isFavorited || favoriteItems.find((favObj) => favObj.id === obj.id)){
                axios.delete(`https://62933f7e089f87a57abcb366.mockapi.io/favorite/${obj.id}`);
                setFavoriteItems((prev) => prev.filter((item) => item.id !== obj.id));
            } else {
                const { data } = await axios.post("https://62933f7e089f87a57abcb366.mockapi.io/favorite", obj);
                setFavoriteItems([...favoriteItems, data]);
            } 
        } catch {
            alert('Error [on add to favorite]');
        }
        

    }

    const onRemoveFromCart = (id) => {
        setCartItems((prev) => prev.filter(obj => obj.id !== id) );
        axios.delete(`https://62933f7e089f87a57abcb366.mockapi.io/cart/${id}`);
        onChangeTotalPrice();
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    const onChangeTotalPrice = () => {
        setTotalPrice(cartItems.map(elem => elem.price).reduce( (sum, curr) => {return Number(sum) + Number(curr)}, 0));
        console.log(cartItems);
        console.log('price changed');
    }

    return (
        <AppContext.Provider value={{ items, cartItems, favoriteItems }}>
            <div className="wrapper">
                {cartOpened && <Drawer 
                                items={cartItems} 
                                onClose={ () => setCartOpened(false)} 
                                onRemove={onRemoveFromCart}
                                totalPrice={totalPrice}
                                />}
                <Header onClickCart={ () => setCartOpened(true)}
                totalPrice={totalPrice}/>
                <Routes>
                    <Route path='favorites' element={<Favorites
                                                    onAddToFavorite={onAddToFavorite}
                                                    onAddToCart={onAddToCart}
                                                    />}/>
                    <Route path="sneakers3.0" element={<Home items={items}
                    searchValue={searchValue}
                    onChangeSearchInput={onChangeSearchInput}
                    onAddToFavorite={onAddToFavorite}
                    onAddToCart={onAddToCart}
                    isLoading={isLoading}
                    />}/>
                </Routes>
                
            </div>
        </AppContext.Provider>
    )
}

export default App