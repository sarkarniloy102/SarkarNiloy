import img from "./../../assets/contact.jpg"
import img2 from "./../../assets/contactimg.svg"
const ContactMe = () => {
    return (
        <div className="pt-24 pb-5 text-sky-950">

            <img className="relative h-[650px] w-full md:h-screen" src={img} alt="" />

            <div className="absolute top-28 px-8 lg:px-20   w-full  ">
                <div className="space-y-2 mx-auto text-center my-8">
                    <h2 className="text-4xl font-bold leadi lg:text-5xl">Lets talk!</h2>
                    <p className="text-xl font-semibold text-black">For any type of online project please do not hesitate to get in touch with me. The fastest way is to <br /> send me your message using the following email <span className="font-bold text-sky-950">sarkarniloy102@gmail.com</span></p>
                </div>
                <div className="grid grid-cols-1 md:gap-10 lg:gap-2 lg:grid-cols-2 items-center">
                    <div className="hidden md:flex">
                        <img  src={img2} className="h-96 md:mx-auto" alt="" />
                    </div>
                    <form className="space-y-6 text-black font-bold">
                        <div>
                            
                            <input id="name" type="text" placeholder="Full name" className="w-full p-3 rounded bg-gray-800" />
                        </div>
                        <div>
                            
                            <input id="email" type="email" placeholder="Email" className="w-full p-3 rounded bg-gray-800" />
                        </div>
                        <div>
                            <textarea id="message" rows="4" placeholder="Message" className="w-full p-3 rounded bg-gray-800"></textarea>
                        </div>
                        <button type="submit" className="w-full p-3 text-sm font-bold tracki uppercase rounded dark:bg-violet-400 dark:text-gray-900">Send Message</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ContactMe;