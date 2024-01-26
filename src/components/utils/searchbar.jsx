function Searchbar(){
    return (
        <form class='search-form'><label htmlFor="Search Bar">Find product</label>
            <input type='search' class="search-bar" placeholder="Search item" />
            <button type="submit" class='search-button'>Go</button>    
        </form>
    )
}

export default Searchbar;