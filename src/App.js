import React from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'
import Drawer from './components/Drawer/Drawer'
import Favorites from './pages/Favorites'
import Orders from './pages/Orders'
import AppContext from './context'


function App(){
    const [items, setItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartItems, setCartItems] = React.useState();
    const [favoriteItems, setFavoriteItems] = React.useState([]);
    const [isLoading, setLoading] = React.useState(true);
    const [orders, setOrders] = React.useState([]);

    React.useEffect(() => {
        const axiosData = async () => {
            setLoading(true);
            const cartResponse = await axios.get('https://62933f7e089f87a57abcb366.mockapi.io/cart');
            const favoriteResponse = await axios.get('https://62933f7e089f87a57abcb366.mockapi.io/favorite');
            const itemsResponse = await axios.get('https://62933f7e089f87a57abcb366.mockapi.io/items');
            const ordersResponse = await axios.get('https://62933f7e089f87a57abcb366.mockapi.io/orders')
            setLoading(false);
    
            setCartItems(cartResponse.data);
            setFavoriteItems(favoriteResponse.data);
            setItems(itemsResponse.data);
            setOrders(ordersResponse.data);
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
    };

    const onOrder = () => {
        setOrders((prev) => [...prev, cartItems]);
        axios.post("https://62933f7e089f87a57abcb366.mockapi.io/orders", cartItems);
        cartItems.forEach(elem => {
            axios.delete(`https://62933f7e089f87a57abcb366.mockapi.io/cart/${elem.id}`);
        });
        setCartItems([]);
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <AppContext.Provider value={{ items, cartItems, favoriteItems }}>
            <div className="wrapper">
                {cartOpened && <Drawer 
                                items={cartItems} 
                                onClose={ () => setCartOpened(false)} 
                                onRemove={onRemoveFromCart}
                                onOrder={onOrder}
                                />}
                <Header onClickCart={ () => setCartOpened(true)}/>
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
                    <Route path="orders" element={<Orders orders={orders}/>}/>
                </Routes>
                
            </div>
        </AppContext.Provider>
    )
}

export default App