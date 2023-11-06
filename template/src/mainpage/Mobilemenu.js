import { useState } from 'react'
import { BsChevronRight } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { AiOutlineMenu } from "react-icons/ai"

import clsx from 'clsx';


export default function MobileMenu() {

    const [menu, setMenuTab] = useState(['ANASAYFA', 'HAKKIMIZDA', 'HİZMETLERİMİZ', 'EKİBİMİZ', 'BLOG', 'İLETİŞİM']);
    const [isOpenMenu, setIsOpenMenu] = useState(true)



    return (
        <>
            <div className='flex justify-between items-center px-4'>

                <div onClick={() => setIsOpenMenu(true)}>
                    <div className='bg-white p-3 mt-2'><AiOutlineMenu size={24} /></div></div>
            </div>

            <div className={` z-50 flex flex-col justify-start bg-white w-3/4 border-r-2 fixed h-screen left-0 top-0 xl:relative xl:w-full transition-all ${clsx({ 'translate-x-[-100%]': !isOpenMenu, 'translate-x-0': isOpenMenu })}`}>

                <div className='flex justify-between items-center px-4 xl:hidden'>
                    <h2>Yasin Sezer</h2>
                    {isOpenMenu ?
                        <div onClick={() => {
                            setIsOpenMenu(prev => !prev)
                        }}><IoIosArrowRoundBack size={50} /></div>
                        : <div onClick={() => setIsOpenMenu(false)}><AiOutlineClose size={28} /></div>
                    }
                </div>

                <ul className="list-menu flex flex-col xl:flex-row justify-center bg-white z-10 divide-y divide-slate-200 xl:divide-none">
                    {menu?.map((x) => {
                        return (
                            <li className="flex justify-between xl:inline-block justify-center pl-4 py-4 show-category" key={x.id}>
                                <div className="w-full flex jsutify-between">
                                    <span className='grow'>{x}</span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div >
        </>
    )
}