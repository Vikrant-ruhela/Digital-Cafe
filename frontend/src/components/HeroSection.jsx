import React from 'react'

const HeroSection = () => {
    return (
        <div className='flex flex-col'>
            <div className='lg:flex mt-12 mb-4'>
                <div className="w-1/2 flex flex-col justify-start items-start gap-12 pl-16">
                    <div>
                        <h2 className='text-8xl font-serif'>Digital</h2>
                        <h1 className='text-9xl font-semibold text-red-500'>Spoon</h1>
                    </div>
                    <div className='flex gap-3 flex-wrap'>
                        <div className="card w-44 bg-base-100 shadow-xl image-full">
                            <figure><img src="https://images.unsplash.com/photo-1615996001375-c7ef13294436?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhc3QlMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="food" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Best Quality Products</h2>
                            </div>
                        </div>
                        <div className="card w-44 bg-base-100 shadow-xl image-full">
                            <figure><img src="https://images.unsplash.com/photo-1426869981800-95ebf51ce900?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhc3QlMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="food" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Fastest delivery</h2>
                            </div>
                        </div>
                        <div className="card w-44 bg-base-100 shadow-xl image-full">
                            <figure><img src="https://images.unsplash.com/photo-1528279027-68f0d7fce9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhc3QlMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="food" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Biggest Menu</h2>
                            </div>
                        </div>
                    </div>
                    <button className="inline-flex h-12 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-6 text-sm font-medium tracking-wide text-red-500 transition duration-300 hover:bg-red-50 hover:text-red-600 focus:bg-red-100 focus:text-red-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-red-300 disabled:shadow-none disabled:hover:bg-transparent">
                        <span>View Menu</span>
                        <span className="relative only:-mx-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                role="graphics-symbol"
                                aria-labelledby="title-78 desc-78"
                            >
                                <title id="title-78">Icon title</title>
                                <desc id="desc-78">A more detailed description of the icon</desc>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </span>
                    </button>


                </div>
                <div className="w-1/2 flex flex-col justify-end items-end gap-4 pr-16">
                    <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="img" className='w-64 h-64 rounded-xl lg:ml-64 shadow-2xl' />
                    <img src="https://images.unsplash.com/photo-1561758033-7e924f619b47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="img" className='w-60 h-60 rounded-xl lg:mr-64 shadow-2xl' />
                </div>
            </div >

        </div>
    )
}

export default HeroSection