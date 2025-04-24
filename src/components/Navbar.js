import pic from "../img/rohitImg.png";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import {Link} from "react-scroll";

function Navbar() {
    const [menu,setMenu]=useState(true);

    const navItems = [
                    {id:1,text:"Home"},
                    {id:2,text:"About"},
                    {id:1,text:"Portfolio"},
                    {id:1,text:"Expriance"},
                    {id:1,text:"Contact"}
                ]

    return <div className="fixed left-0 right-0 top-0">
        <div className="flex justify-center shadow-md bg-white">
            <div className="flex justify-between place-items-center h-16 w-11/12 text-xl">
                <div className="flex gap-3">

                    <img src={pic} className="h-12 w-12 rounded-full" ></img>
                    <h1>Rohi<span className="text-green-500 text-2xl">t</span>
                        <p className="text-sm">Web Developer</p>
                    </h1>
                </div>

                {/* Desktop Navbar */}
                <div>
                    <ul className="hidden md:flex space-x-8">
                        {
                            navItems.map(({id,text}) => (
                                <li className="hover:scale-110 duration-200 cursor-pointer" key={id}>
                                    <Link 
                                        to={text} 
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        activeClass="active"
                                    >{text}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div onClick={()=>setMenu(!menu)} className="md:hidden">
                        {menu?<MdOutlineMenu size={26} />:<IoCloseSharp  size={26}/>}
                    </div>
                </div>
            </div>
        </div>
        {/* Mobile Navbar */}
        <div>
            {!menu?<ul className="md:hidden flex flex-col items-center bg-white pb-10 pt-10 justify-center">
            {
                navItems.map(({id,text}) => (
                    <li className="hover:scale-110 duration-200 cursor-pointer text-xl" key={id}>
                        <Link
                            onClick={()=>setMenu(!menu)} 
                            to={text} 
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass="active">
                            {text}
                        </Link>
                    </li>
                ))
            }
            </ul>:<div></div>}
        </div>
    </div>
}

export default Navbar;