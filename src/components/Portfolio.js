
import { portfolioContext } from '../context/PortfolioContext';
import { useContext } from 'react';

function Portfolio(){
    const {ProjectItems}=useContext(portfolioContext);

    return (
        <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
            <div>
                <h1 className="text-3xl font-bold mb-3">Portfolio</h1>
                <span className="underline">Features Project</span>
                <div className="grid  xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5 pt-2">
                    {
                        ProjectItems.map(({id,logo,name})=>(
                            <div key={id} className="sm:h-[300px] sm:w-[300px] h-[300px] w-[350px]
                            shadow-lg bg-slate-50 flex flex-col  pt-4 rounded-md cursor-pointer hover:scale-105">
                                <img className='ml-3 w-[130px] h-[130px] rounded-full' src={logo}></img>
                                <div className='p-2'>
                                    <h1 className="text-2xl font-semibold">{name}</h1>
                                    <p>img elements must have an alt prop, either with meaningful text</p>
                                </div>
                                <div className='flex flex-row justify-between sm:w-[280px] ml-2 mr-2'>
                                    <button className='bg-blue-400 hover:bg-blue-600 rounded-md px-2 py-1'>Video</button>
                                    <button className='bg-green-400 hover:bg-green-600 rounded-md px-2 py-1'>Source Code</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <hr className='mt-8 mb-5'></hr>
        </div>
    )
}

export default Portfolio;