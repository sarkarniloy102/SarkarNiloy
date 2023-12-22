import webimg from "./../../../assets/web.jpg"
import markimg from "./../../../assets/marketing.avif"
import { NavLink } from "react-router-dom";
const OfferedService = () => {
    return (
        <div className="text-black p-3 pt-16" >
            <h2 className="text-4xl text-center  font-bold ">Offered services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 pb-16 pt-10 md:px-28">
                {/* web */}

                <div className="card border shadow-xl">
                    <div className="card-body">
                        <img src={webimg} className="h-40 w-44 mx-auto" alt="" />
                        <h2 className="card-title">DEVELOPMENT</h2>
                        <p>I can code based on designs or even use the customers design. My focus is on generating clean code that is well-structured for reliability.</p>
                        {/* link to Sevices/Development */}
                        <NavLink to={"/development"} className="border text-center bg-yellow-200 py-1 text-blue-700 hover:bg-green-200 hover:text-emerald-800">More Info...</NavLink>
                    </div>
                </div>


                {/* digital */}

                <div className="card border  shadow-xl">
                    <img src={markimg} className="h-40 w-44 mx-auto mt-5" alt="" />
                    <div className="card-body">
                        <h2 className="card-title">BASIC DIGITAL MARKETING</h2>
                        <p>In this place, I will promote your website & you can reach an enormous audience in a way that is both cost-effective and measurable.</p>
                        <NavLink className="border text-center bg-yellow-200 py-1 text-blue-700 hover:bg-green-200 hover:text-emerald-800">More Info...</NavLink>
                    </div>
                </div>


            </div>
        </div>

    );
};

export default OfferedService;