import { NavLink } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";


const Navbar = () => {
    const navlinks = <>
        <ul className="items-stretch  space-x-3  md:flex">
            <li className="flex">
                <NavLink className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Home</NavLink>
            </li>
            <li className="flex">
                <NavLink className="flex items-center px-4 -mb-1 border-b-2 border-transparent">About</NavLink>
            </li>
            <li className="flex">
                <NavLink className="flex items-center px-4 -mb-1 border-b-2 border-transparent ">Services</NavLink>
            </li>
            <li className="flex">
                <NavLink className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Drop</NavLink>
            </li>
            <li className="flex">
                <NavLink className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Contact</NavLink>
            </li>
        </ul>
    </>
    return (
        <header className="p-4 bg-gray-800 text-gray-100">
            <div className="flex justify-between items-center h-16 mx-auto">
                <div className=" md:hidden  ">
                    <CgMenuRightAlt className="text-3xl" />
                </div>
                <NavLink aria-label="Back to homepage" className="flex btn items-center p-2">
                    Sarkar Niloy
                </NavLink>
                {/* <ul className="items-stretch  space-x-3 md:flex">
                    <li className="flex">
                        <NavLink className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink className="flex items-center px-4 -mb-1 border-b-2 border-transparent">About</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink className="flex items-center px-4 -mb-1 border-b-2 border-transparent ">Services</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Drop</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Contact</NavLink>
                    </li>
                </ul> */}
                <div className="hidden md:flex ">
                    {
                        navlinks
                    }
                </div>



            </div>
        </header>
    );
};

export default Navbar;