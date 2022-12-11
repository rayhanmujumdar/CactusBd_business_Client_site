const activeLink = ({ isActive }) => {
    let activeClassName = "p-1 bg-gray-400 duration-300 rounded-md";
    return isActive ? activeClassName : undefined
}

export default activeLink
