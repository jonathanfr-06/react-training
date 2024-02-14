import  "../../../src/assets/css/components/admin/navbar.css"
function NavBar(){
    return(
        <div className="admin-navbar-div">
            <nav className="admin-navbar-nav">
                <li className="admin-navbar-li">Users</li>
                <li className="admin-navbar-li">Products</li>
                <li className="admin-navbar-li">Trips</li>
            </nav>
        </div>
    )
}

export default NavBar;