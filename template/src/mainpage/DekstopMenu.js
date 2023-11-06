import React from 'react'
import { BsSearch } from "react-icons/bs"
import { BsFillCircleFill } from "react-icons/bs"
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'


function DekstopMenu() {

    
    return (
        <>
            <div>
                

                <div className='flex justify-between px-10 py-5 menu w-full'>
                    <div className='flex items-center gap-x-2'>
                        <div className='py-1 rounded-full bg-red-100'><BsFillCircleFill size={120} color='pink' /></div>
                    </div>
                    <div>
                        <div className='flex  mt-12 space-x-7 font-bold text-slate-500'>
                            <button>ANASAYFA</button>
                            <button>HAKKIMIZDA</button>
                            <button>HİZMETLERİMİZ</button>
                            <button>EKİBİMİZ</button>
                            <button>BLOG</button>
                            <button>İLETİŞİM</button>
                        </div>

                    </div>
                    <div className='flex items-center'>
                        <div className='border-r-2 pr-2 py-1 border-gray-400'><BsSearch size={20} /></div>
                        <div className='px-2'><button className='bg-cyan-600 hover:bg-blue-400 text-white font-bold py-2 border-b-1 border-blue-700 hover:border-blue-500 rounded w-28 text-xs'>RANDEVU AL</button></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DekstopMenu