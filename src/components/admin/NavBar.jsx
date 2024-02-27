import "../../../src/assets/css/components/admin/navbar.css"

function NavBar({ showUsers, showProducts }) {

    const logger = () => {
console.log("test");   
 };
    const logger2 = () => {
console.log("test2");   
 };
    return (
            <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                    <li>
                        <button className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent " onClick={event => showProducts(logger)}>Products</button>
                    </li>
                    <li>
                        <button className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 " onClick={event => showUsers(logger2)}>Users</button>
                    </li>
                    <li>
                        <button className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 ">Contact</button>
                    </li>
                </ul>
        </div>
    )
}

export default NavBar;