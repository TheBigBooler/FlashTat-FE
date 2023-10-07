import { Outlet, Link, NavLink } from "react-router-dom";

const Root = () => {
    return (
        <>
        <div className="text-red-500">
        Welcome to FlashTat!
        </div>
        <Outlet />
        </>
    )
}

export default Root;