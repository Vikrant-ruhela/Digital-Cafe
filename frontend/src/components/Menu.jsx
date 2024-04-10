import React, { useEffect, useState } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import axios from 'axios'
// import { useQuery } from "@tanstack/react-query"
// import { useDispatch } from 'react-redux'
// import { addItem, updateQuantity } from '../slices/productSlice'
import { motion } from 'framer-motion'



const Menu = () => {
    
    const [data, setData]=useState()
    

     


    return (
        <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className='flex justify-center items-center flex-col gap-8 pt-12 pb-12' >
            <h1 className='text-5xl'>We Serve Taste</h1>

            <div className="flex gap-8 flex-wrap items-center justify-center w-full">
                {data?.data?.items?.map((item) => {
                    return (
                        <motion.div whileHover={{ scale: 1.1 }}
                            className="overflow-hidden bg-white text-slate-500 shadow-md shadow-slate-200 w-1/4 rounded-xl" key={item._id}>
                            <figure>
                                <img
                                    src={item.itemPic}
                                    alt="card image"
                                    className="aspect-video w-full"
                                />
                            </figure>
                            <div className='flex justify-between items-center p-4'>
                                <div >
                                    <header className="">
                                        <h3 className="text-xl font-medium text-slate-700">
                                            {item.name}
                                        </h3>
                                        <p className=" text-slate-400">Rs.{item.price}</p>
                                    </header>
                                </div>
                                <div className="flex text-center">
                                    <motion.button initial={{ scale: 1 }} whileTap={{ scale: 1.1 }} className="text-3xl text-white bg-red-500 p-3 rounded-full text-center"
                                     >
                                        <FaCartPlus />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}

            </div>
        </motion.div>
    )
}

export default Menu