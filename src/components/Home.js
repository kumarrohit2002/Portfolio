import { FaSquareFacebook, FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

import pic from "../img/rohitImg.png";
import { ReactTyped, Typed } from "react-typed";
import { useContext } from "react";
import { portfolioContext } from "../context/PortfolioContext";



function Home() {
    const { AboutmeData } = useContext(portfolioContext);
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
                                strings={["Developer", "Programmer", "Coder"]}
                                typeSpeed={80}
                                backSpeed={80}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className="text-sm md:text-md text-justify space-y-2">
                            {AboutmeData}
                        </p>
                        {/* social media icons */}
                        <div className="flex md:flex-row md:justify-between justify-center items-center space-y-4 flex-col">
                            <div className="space-y-2 pl-2">
                                <h1 className="font-bold">Available on</h1>
                                <div className="text-3xl flex space-x-5">
                                    <a href="https://github.com/kumarrohit2002"> <FaGithub className="text-blue-700 cursor-pointer hover:scale-105" /></a>
                                    <a href="https://www.linkedin.com/in/rohit-kumar111/"><FaLinkedin className="text-blue-500" /></a>
                                    <a href="https://x.com/Rohitkumar13723/"><FaTwitter className="text-blue-500"/></a>
                                    <a href="https://leetcode.com/u/kumarrohit2002/"><SiLeetcode className="text-blue-500" /></a>
                                </div>
                            </div>
                            <div className="space-y-2 pr-2">
                                <h1 className="font-bold">Currently Working on</h1>
                                <div className="text-3xl flex space-x-5">
                                    <a href="https://www.mongodb.com/">< SiMongodb className="text-green-400" /></a>
                                    <a href="https://react.dev/"><RiReactjsLine className="text-blue-700" /></a>
                                    <a href="https://expressjs.com/"><SiExpress className="text-red-600" /></a>
                                    <a href="https://nodejs.org/en"><RiNodejsLine className="text-green-300" /></a>

                                </div>
                            </div>
                        </div>
                        <div className="space-y-10">
                            <a
                                href="https://drive.google.com/file/d/1l5d4ezz1D0QHsV-_6AuC1zx055-IWBh_/view?usp=sharing"
                                className="bg-blue-500  hover:bg-blue-700 text-white rounded-md px-2 py-2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                RESUME
                            </a>
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