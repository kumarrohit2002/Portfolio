import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";

import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";

import pic from "../img/rohitImg.png";
import { ReactTyped,Typed } from "react-typed";






function Home() {
    return (
        <>
            <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
                        <span className="text-2xl">Welcome In My Feed</span>
                        <div className="flex space-x-1 text-2xl md:text-4xl">
                            <h1>Hello,I'm a</h1>
                            {/* <span className="text-red-700 font-bold">Devloper</span> */}
                            <ReactTyped
                                className="text-red-700 font-bold"
                                strings={["Developer","Programmer","Coder"]}
                                typeSpeed={80}
                                backSpeed={80}
                                loop={true}
                            />
                        </div>
                        <br/>
                        <p className="text-sm md:text-md text-justify space-y-2">
                            A web developer is a professional who specializes in creating and 
                            maintaining websites and web applications. They combine technical 
                            skills in programming languages such as HTML, CSS, JavaScript, and 
                            back-end languages like Python, Ruby, or PHP to build dynamic and 
                            responsive user interfaces. Web developers work closely with designers to 
                            bring visual designs to life and ensure that sites are user-friendly and accessible.
                        </p>
                        {/* social media icons */}
                        <div className="flex md:flex-row md:justify-between justify-center items-center space-y-4 flex-col">
                            <div className="space-y-2 pl-2">
                                <h1 className="font-bold">Available on</h1>
                                <div className="text-3xl flex space-x-5">
                                   <a href="https://www.facebook.com/"> <FaSquareFacebook  className="text-blue-700 cursor-pointer hover:scale-105"/></a>
                                    <a href="https://www.linkedin.com/"><FaLinkedin className="text-blue-500" /></a>
                                    <a href="https://www.youtube.com/"><IoLogoYoutube className="text-red-600"/></a>
                                    <a href="https://web.telegram.org/a/"><FaTelegram className="text-blue-500"/></a>
                                </div>
                            </div>
                            <div className="space-y-2 pr-2">
                                <h1 className="font-bold">Currently Working on</h1>
                                <div className="text-3xl flex space-x-5">
                                    <a href="https://www.mongodb.com/">< SiMongodb className="text-green-400" /></a>
                                    <a href="https://react.dev/"><RiReactjsLine  className="text-blue-700"/></a>
                                    <a href="https://expressjs.com/"><SiExpress className="text-red-600"/></a>
                                    <a href="https://nodejs.org/en"><RiNodejsLine className="text-green-300"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center md:ml-40 md:mt-12 order-1 md:order-2">
                    <img src={pic} className="xl:w-[450px] xl:h-[450px] lg:w-[370px] lg:h-[370px] md:w-[350px] md:h-[350px] sm:w-[320px] sm:h-[320px] w-[300px] h-[300px] rounded-full" ></img>
                    </div>
                </div>
                <hr className="mt-8"></hr>
            </div>
        </>
    )
}

export default Home;