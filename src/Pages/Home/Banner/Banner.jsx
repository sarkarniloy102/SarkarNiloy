import img from "./../../../assets/banner.jpg"
import { IoMdContact } from "react-icons/io";


const Banner = () => {
    return (
        <div >
            <img src={img} className="relative h-[700px] md:h-screen w-full" alt="" />
            <div className="absolute text-white top-60 pl-20  space-y-10">
                <h2 className="text-7xl font-bold">I love to create <br /> beautiful and <br /> efficient websites</h2>
                <div className="flex gap-24 text-2xl">
                    <button className="border px-10 py-4 border-black hover:bg-gray-800 hover:border-white  bg-blue-800">Discover</button>
                    <button className="flex items-center gap-1 hover:text-gray-500 "><IoMdContact />
                        <p> Contact Me</p></button>
                </div>

            </div>
        </div>
    );
};

export default Banner;