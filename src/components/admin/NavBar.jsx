import  "../../../src/assets/css/components/admin/navbar.css"

function NavBar({test, test2}){

  const logger = () => {
    return 1;
};
  const logger2 = () => {
    return 2;
};
    return(
        <div className="admin-navbar-div">
            <nav className="admin-navbar-nav">
                <li className="admin-navbar-li">Users</li>
                <li className="admin-navbar-li">Products</li>
                <li className="admin-navbar-li">Trips</li>
                <button onClick={event => test(logger)}>Click</button>
                <button onClick={event => test2(logger2)}>Click2</button>
            </nav>
        </div>
    )
}

export default NavBar;