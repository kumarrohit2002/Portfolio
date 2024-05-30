import { FaFacebook,FaTwitter,FaInstagram,FaLinkedin } from "react-icons/fa6";

function Footer(){
    return(
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
            <div className="flex flex-col items-center mx-auto px-4 md:px-20">
                <div className="flex flex-row space-x-4 text-4xl">
                    <FaFacebook className="text-blue-400"/>
                    <FaInstagram className="text-rose-600"/>
                    <FaTwitter className="text-blue-600"/>
                    <FaLinkedin className="text-blue-500"/>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col items-center pb-8  ">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;