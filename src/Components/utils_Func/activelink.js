const activeLink = ({ isActive }) => {
    let activeClassName = "p-1.5 bg-[#051733] text-white duration-300 rounded-md";
    return isActive ? activeClassName : undefined
}

export default activeLink
