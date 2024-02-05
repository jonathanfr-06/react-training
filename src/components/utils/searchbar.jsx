function Searchbar(){
    return (
        <form class='search-form'><label htmlFor="Search Bar">Chercher un produit ...</label>
            <input type='search' class="search-bar" placeholder="Chercher un produit ..." />
            <button type="submit" class='search-button'>Go</button>    
        </form>
    )
}

export default Searchbar;