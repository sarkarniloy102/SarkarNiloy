import img from "./../../../assets/choose.webp"
import htmlimg from "./../../../assets/html.png"
import cssimg from "./../../../assets/css.png"
import jsimg from "./../../../assets/js.png"
import reactimg from "./../../../assets/react.png"
const ChooseMe = () => {
    return (
        <div className=" flex flex-col md:flex-row items-center text-black gap-10 md:gap-24 md:px-28 bg-gray-100">
            <div >
                <img src={img} alt="" />
            </div>
            <div className="space-y-10">
                <div >
                    <h2 className=" text-4xl font-semibold">Why Work With Me</h2>
                    <p>I am a great communicator and love to invest the necessary time to understand the customers problem very well</p>
                </div>
                <div>
                    <h2 className=" text-4xl font-semibold">Development Skills</h2>
                    <p>I am familiar and work on a daily basis with HTML, CSS, JavaScript, DaisyUI and other modern frameworks</p>
                </div>
                <div className="flex items-center gap-6">
                    <img className="w-16 " src={htmlimg} alt="" />
                    <img className="w-16  " src={cssimg} alt="" />
                    <img className="w-16" src={jsimg} alt="" />
                    <img className="w-16" src={reactimg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ChooseMe;