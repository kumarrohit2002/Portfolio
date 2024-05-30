import { useForm } from "react-hook-form"
import axios from "axios"
import toast from "react-hot-toast"

function Contact(){
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit = async(data) =>{
        const userInfo={
            name: data.name,
            email: data.email,
            query: data.query
        }
        try{
            await axios.post("https://getform.io/f/pbqgzwzb",userInfo);
            toast.success("Your message has been sent");
        }catch(error){
            toast.error("An error has occurred");
        }
      }

    return(
        <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20">
            <div>
                <h1 className="text-3xl font-bold mb-2">Contact me</h1>
                <span>Please fill out the form below contact me</span>
                <div className="flex flex-col items-center justify center  mt-4 ">
                    <div className=" bg-gray-100 sm:w-96 w-80 p-5 border rounded-xl">
                        <form
                            onSubmit={handleSubmit(onSubmit)} 
                            // action="https://getform.io/f/pbqgzwzb"
                            // method="POST"
                            >
                            <h1 className="text-2xl font-bold mb-4">Send Your Message</h1>
                            <div>
                                <div>
                                    <label>Full Name</label>
                                    <br/>
                                    <input  {...register("name", { required: true })} id="name" name="name" type="text" className="rounded-md w-11/12 h-[30px] text-sm pl-1" placeholder="Enter your Full Name"/>
                                    {errors.name && <span className="text-red-600">This field is required</span>}
                                </div>
                                <br/>
                                <div>
                                    <label>Email Address</label>
                                    <br/>
                                    <input {...register("email", { required: true })} id="email" name="email" type="text" className="rounded-md w-11/12 h-[30px] text-sm pl-1" placeholder="Enter your Email Address"/>
                                    {errors.email && <span className="text-red-600">This field is required</span>}
                                </div>
                                <br/>
                                <div>
                                    <label>Message</label>
                                    <br/>
                                    <input {...register("query", { required: true })} id="query" name="query" type="text" className="rounded-md w-11/12 h-[80px] text-sm pl-1" placeholder="Enter your Query"/>
                                    {errors.query && <span className="text-red-600">This field is required</span>}
                                </div>
                            </div>
                            <button type="submit" className="bg-gray-700 rounded-md px-2 py-1 mt-2 hover:bg-gray-900 text-white">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <hr className="mt-10 mb-5"></hr>
        </div>
    )
}

export default Contact;