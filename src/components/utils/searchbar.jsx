function Searchbar(){
    return (
        <form className='search-form'><label htmlFor="Search Bar">Chercher un produit ...</label>
            <input type='search' className="search-bar" placeholder="Chercher un produit ..." />
            <button type="submit" className='search-button' >Chercher</button>    
        </form>
    )
}

export default Searchbar;