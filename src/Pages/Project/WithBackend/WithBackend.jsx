import font1 from "./../../../assets/project/fruits.png";
import font2 from "./../../../assets/project/gears.png";
import font3 from "./../../../assets/project/fashions.png";
import { CiLink } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const WithBackend = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* project 1 */}
            <div className="relative group  border rounded-2xl p-2 bg-slate-700">
                <div className="hover:opacity-70  hover:border hover:scale-110 rounded-xl shadow-2xl">
                    <img src={font1} className="h-72 rounded-2xl " alt="" />
                </div>
                <div className="absolute bottom-0 right-0 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:block ">
                    <div className=" flex gap-3">
                        <NavLink to={""}><CiLink className="text-blue-500 hover:bg-green-300 cursor-pointer text-5xl font-black border border-black rounded-lg " /></NavLink>
                        <NavLink to={"https://sarkarniloy102.github.io/fruit_brust/"}><FaEye className="text-blue-500 hover:bg-green-300 cursor-pointer text-5xl font-black border border-black rounded-lg p-1" /></NavLink>


                    </div>


                </div>
            </div>
            {/* project 2 */}
            <div className="relative group  border rounded-2xl p-2 bg-slate-700">
                <div className="hover:opacity-70  hover:border hover:scale-110 rounded-xl shadow-2xl">
                    <img src={font2} className="h-72 rounded-2xl " alt="" />
                </div>
                <div className="absolute bottom-0 right-0 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:block ">
                    <div className=" flex gap-3">
                        <NavLink to={""}><CiLink className="text-blue-500 hover:bg-green-300 cursor-pointer text-5xl font-black border border-black rounded-lg " /></NavLink>
                        <NavLink to={"https://sarkarniloy102.github.io/Influencer_gear/"}><FaEye className="text-blue-500 hover:bg-green-300 cursor-pointer text-5xl font-black border border-black rounded-lg p-1" /></NavLink>


                    </div>


                </div>
            </div>
            {/* project 3 */}
            <div className="relative group  border rounded-2xl p-2 bg-slate-700">
                <div className="hover:opacity-70  hover:border hover:scale-110 rounded-xl shadow-2xl">
                    <img src={font3} className="h-72 rounded-2xl " alt="" />
                </div>
                <div className="absolute bottom-0 right-0 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:block ">
                    <div className=" flex gap-3">
                        <NavLink to={""}><CiLink className="text-blue-500 hover:bg-green-300 cursor-pointer text-5xl font-black border border-black rounded-lg " /></NavLink>
                        <NavLink to={"https://sarkarniloy102.github.io/penguin_fashion/"}><FaEye className="text-blue-500 hover:bg-green-300 cursor-pointer text-5xl font-black border border-black rounded-lg p-1" /></NavLink>


                    </div>


                </div>
            </div>
        </div>
    );
};

export default WithBackend;