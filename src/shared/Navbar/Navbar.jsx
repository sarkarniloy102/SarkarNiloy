import { NavLink } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
import { MdArrowDropDown } from "react-icons/md";



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
                {/* <NavLink className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Drop</NavLink> */}
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="m-1">
                        <div className="flex items-center"> <p>Drop</p> <MdArrowDropDown /></div>

                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] space-y-3 p-3 shadow bg-base-100 rounded-box w-40">
                        <li><NavLink to={"/projects"}>Project Details</NavLink></li>
                        <hr />
                        <li><NavLink>Terms & Condition</NavLink></li>
                        <hr />
                        <li><NavLink>Privacy Policy</NavLink></li>

                    </ul>
                </div>
            </li>
            <li className="flex">
                <NavLink to={"/contact"} className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Contact</NavLink>
            </li>
        </ul>
    </>

    return (
        <header className=" p-4 px-6 w-full   text-white fixed z-10 opacity-80 bg-black ">
            <div className="flex justify-between items-center h-16 mx-auto">
                {/* for small device drawer */}
                <div className=" md:hidden  ">
                    <div className="drawer">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className="btn btn-primary drawer-button"> <CgMenuRightAlt className="text-3xl" /></label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className=" p-4 space-y-3 w-80 min-h-full bg-base-200 text-white">
                                {/* Sidebar content here */}
                                <li><NavLink>Home</NavLink></li>
                                <li><NavLink>About</NavLink></li>
                                <li><NavLink>Services</NavLink></li>
                                <li> <div className="dropdown dropdown-hover">
                                    <div tabIndex={0} role="button" className="m-1">
                                        <div className="flex items-center"> <p>Drop</p> <MdArrowDropDown /></div>

                                    </div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] space-y-3 p-3 shadow bg-base-100 rounded-box w-40">
                                        <li><NavLink to={"/projects"}>Project Details</NavLink></li>
                                        <hr />
                                        <li><NavLink>Terms & Condition</NavLink></li>
                                        <hr />
                                        <li><NavLink>Privacy Policy</NavLink></li>

                                    </ul>
                                </div></li>
                                <li><NavLink to={"/contact"}>Contact</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* for medium and large device */}
                <NavLink aria-label="Back to homepage" className="flex text-3xl items-center p-2">
                    Sarkar Niloy
                </NavLink>
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