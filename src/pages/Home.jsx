import Card from '../components/Card/Card.js'
import CardLoader from '../components/Card/CardLoader.jsx'
import Slider from '../components/Slider/Slider'


function Home({
    items,
    searchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
    isLoading
})
{
    return (<>
       <Slider/>
        <div className="content">
            <div className="headerOfContent">
                <h1>{searchValue ? `Search by request "${searchValue}"` : 'All sneakers'}</h1>
                <div className="searchBlock">
                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.9994165 16.2923098 3.8541369 3.8541368c.1952621.1952622.1952621.5118446 0 .7071068-.1952622.1952621-.5118446.1952621-.7071068 0l-3.8541368-3.8541369c-1.4103486 1.2450743-3.2630999 2.0005835-5.2923098 2.0005835-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8c0 2.0292099-.7555092 3.8819612-2.0005835 5.2923098zm-5.9994165 1.7076902c3.8659932 0 7-3.1340068 7-7 0-3.86599325-3.1340068-7-7-7-3.86599325 0-7 3.13400675-7 7 0 3.8659932 3.13400675 7 7 7z"/></svg>
                    <input onChange={onChangeSearchInput} placeholder="Search..."></input>
                </div>
            </div>
            <div className="cards">
                {isLoading && [...Array(8)].map( (x , index) => <CardLoader key={index}/>)}
                {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map( (item, index) => (
                    <Card 
                    key={index}
                    onPlus={ (obj) => {onAddToCart(obj)} }
                    onFavorite={ obj => onAddToFavorite(obj)}
                    {...item}
                    />
                ))}
            </div>    
        </div>
    </>)
}

export default Home